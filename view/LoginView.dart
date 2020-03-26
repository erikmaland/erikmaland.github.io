import 'dart:html';

import '../controller/EventHandler.dart';
import 'BhaBuilderView.dart';

/// View for logging into the application.
///
/// This is the first view the user encounters.
class LoginView with BhaBuilderView {

  final InputElement _userInput, _passwordInput;
  final EventHandler _eventHandler;

  LoginView(EventHandler eventHandler) :
        _userInput = InputElement(type:'text'),
        _passwordInput = InputElement(type:'password'),
        _eventHandler = eventHandler
  {
    _userInput
      ..placeholder = 'Username';
    _passwordInput
      ..placeholder = 'Password';
  }

  // ***** Implemented interface methods ***** //

  @override
  Element getMainElement() {
    return Element.div()
      ..children.add(Element.header()
        ..children.add(_userInput)
        ..children.add(_passwordInput)
        ..children.add(ButtonElement()
          ..setInnerHtml('Log in')
          ..onClick.listen((event) {
            _eventHandler.loginAttempt(_userInput.value, _passwordInput.value);
          })
        )
      );
  }

  @override
  String getName() {
    return 'LoginView';
  }

}