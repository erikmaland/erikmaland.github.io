import '../integration/tools/ToolsLoginResponse.dart';

/// Class describing state changes with the Redux concept of Actions.

/// Action for logging into the application.
class LoginAction {
  final String _user;
  final String _password;

  String get user => _user;

  LoginAction(this._user, this._password);

  String get password => _password;
}

/// Action for response on login request.
class LoginResponseAction {
  final String _user;
  final ToolsLoginResponse _toolsLoginResponse;

  String get user => _user;
  ToolsLoginResponse get toolsLoginResponse => _toolsLoginResponse;

  LoginResponseAction(this._user, this._toolsLoginResponse);
}

/// Action for changing the current view of the application.
class ViewChangeAction {
  final String _newView;

  String get newView => _newView;

  ViewChangeAction(this._newView);
}

class LogoutAction {

}

class FetchGlobalContainersAction {

}