import 'dart:html';

import '../controller/EventHandler.dart';
import 'Navigatable.dart';

///Class for a top navigation bar for navigating between the main views
class NavigationBar {
  Element _mainElement;
  Element get mainElement => _mainElement;
  final _navigatableItems = [];
  final EventHandler _eventHandler;


  NavigationBar(this._eventHandler) {
    _mainElement = Element.div()
      ..setAttribute('class', 'navigation_bar');
  }

  void addElement(Navigatable navigatableElement) {
    _navigatableItems.add(navigatableElement);
    _mainElement.children.add(Element.tag('a')
      ..setAttribute('href', navigatableElement.getRelativeUrl())
      ..innerHtml = navigatableElement.getNavigationMenuDisplayName()
      ..onClick.listen((event) {
        _eventHandler.viewChanged(navigatableElement.getName());
      })
    );
  }
}