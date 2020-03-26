import 'package:redux/redux.dart';

import '../integration/tools/ToolsFacade.dart';
import 'Action.dart';

/// Redux middleware.
class ToolsMiddleware {

  static final ToolsFacade _toolsFacade = ToolsFacade();

  static dynamic toolsMiddlerware(Store<dynamic> store, dynamic action, NextDispatcher nextDispatcher) {
    if (action is LoginAction) {
      _toolsFacade.login(action.user, action.password)
          .then((loginResponse) => store.dispatch(LoginResponseAction(action.user, loginResponse))
      );
    }
    if (action is FetchGlobalContainersAction) {
      String deviceId = store.state.deviceId;
      String accessToken = store.state.accessToken;
      _toolsFacade.getGlobalContainers(accessToken, 'admin', deviceId).then((value) => null);
    }
    nextDispatcher(action);
  }
}

