import 'Action.dart';
import 'AppState.dart';

/// Class defining state transitions with the Redux concept of reducers.
class ToolsReducer {
  static AppState reducer(dynamic state, dynamic action) {
    if (action is LoginResponseAction) {
      if (action.toolsLoginResponse.statusCode == '200') {
        return AppState.copyAndOverride(
          state,
          isLoggedIn: true,
          loggedInUser: action.user,
          accessToken: action.toolsLoginResponse.accessToken,
          deviceId: action.toolsLoginResponse.deviceId,
          currentViewName: 'Home'
        );
      }
    }
    if (action is ViewChangeAction) {
      return AppState.copyAndOverride(
          state,
          currentViewName: action.newView
      );
    }
    if (action is LogoutAction) {
      return AppState.copyAndOverride(
        AppState.init(),
        currentViewName: 'LoginView'
      );
    }
    if (action is FetchGlobalContainersAction) {
      return AppState.copyAndOverride(state);
    }
    return state;
  }
}

