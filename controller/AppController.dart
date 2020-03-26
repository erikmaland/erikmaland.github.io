import 'dart:html';

import 'package:redux/redux.dart';

import '../domain/TubularSegment.dart';
import '../navigation/Navigatable.dart';
import '../navigation/NavigationBar.dart';
import '../redux/Action.dart';
import '../redux/AppState.dart';
import '../redux/ToolsMiddleware.dart';
import '../redux/ToolsReducer.dart';
import '../view/BhaBuilderView.dart';
import '../view/CartView.dart';
import '../view/HomeView.dart';
import '../view/LoginView.dart';
import '../view/SaveView.dart';
import '../view/ShopView.dart';
import 'EventHandler.dart';

/// Controller class for the web app.
///
/// Responsibilities:
/// * Load the initial HTML skeleton of the app.
/// * Populate the skeleton with views.
/// * Act as a hub for user initiated events from these views.
class AppController implements EventHandler {
  LoginView _loginView;
  HomeView _homeView;
  CartView _cartView;
  SaveView _saveView;
  ShopView _shopView;

  // Map from the name of the view to the view.
  Map<String, BhaBuilderView> _views;

  NavigationBar _navigationBar;
  DivElement _mainDivElement;
  Element _contentElement;

  // Redux store
  Store _store;

  AppController(Element mainElement) {
    _homeView = HomeView();
    _cartView = CartView();
    _saveView = SaveView(this);
    _shopView = ShopView(this);
    _loginView = LoginView(this);

    _views = {
      _homeView.getName() : _homeView,
      _cartView.getName() : _cartView,
      _saveView.getName() : _saveView,
      _shopView.getName() : _shopView,
      _loginView.getName() : _loginView,
    };

    _mainDivElement = mainElement
      ..children.add(_contentElement = Element.div());
  }

  void initializeState() {
    // Initialize Redux state
    _store = Store<AppState>(
        ToolsReducer.reducer,
        initialState: AppState.getStoredState(),
        middleware: [ToolsMiddleware.toolsMiddlerware]
    );

    _store.onChange.listen((newState) {
      if (_views.containsKey(newState.currentViewName)) {
        updateView(newState.currentViewName);
      }
    });
  }

  void buildUi() {
    // Add navigation bar
    _navigationBar = NavigationBar(this);

    // Register controller in navigation bar
    _navigationBar
      ..addElement(_homeView)
      ..addElement(_shopView)
      ..addElement(_cartView)
      ..addElement(_saveView)
    ;

    // Set view at start
    updateView(_store.state.currentViewName);
  }

  void updateView(String viewName) {
    var newElement = _views[viewName];
    if (newElement == null) {
      return;
    }
    _mainDivElement.children.clear();
    if (newElement is Navigatable) {
      _mainDivElement.children
        ..add(_navigationBar.mainElement);
    }
    if (_store.state.isLoggedIn) {
      _mainDivElement.children.add(Element.div()
        ..children.add(Element.div()
          ..setInnerHtml('<b>Logged in as ${_store.state.loggedInUser}<b>')
          ..children.add(ButtonElement()
            ..setInnerHtml('Log out')
            ..onClick.listen((event) => logOut()))
      ));
    }
    _mainDivElement.children.add(_contentElement
      ..children.clear()
      ..children.add(newElement.getMainElement()));
  }

  Element getStartView() {
    return _loginView.getMainElement();
  }

  // ***** Implemented interface methods ***** //

  @override
  void fileUploaded(Map<String, dynamic> uploadedJson) {
    var tubulars = uploadedJson['tubulars'] as List;
    tubulars.forEach((json) =>
        _shopView.add(TubularSegment.fromJson(json)));
  }

  @override
  String textFileSaved() {
    var jsonFromCart = {};
    var i = 0;
    _cartView.cart.forEach((item) {
      jsonFromCart[i.toString()] = item.toJson();
      i++;
    });
    return jsonFromCart.toString();
  }

  @override
  void itemAddedToCart(TubularSegment tubularSegment) {
    _cartView.addElement(tubularSegment);
  }

  @override
  void loginAttempt(String user, String password) {
    _store.dispatch(LoginAction(user, password));
  }

  @override
  void viewChanged(String newView) {
    _store.dispatch(ViewChangeAction(newView));
  }

  @override
  void logOut() {
    _store.dispatch(LogoutAction());
  }

  @override
  void fetchGlobalContainers() {
    _store.dispatch(FetchGlobalContainersAction());
  }
}