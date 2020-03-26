import 'dart:html';

/// Class for managing state of the app.
class AppState {
  // All fields should be final and serializable.
  final String _currentViewName;

  // User authentication state
  final bool _isLoggedIn;
  final String _loggedInUser;
  final String _accessToken;
  final String _deviceId;

  // Data fetching state
  final bool _isFetching;

  String get currentViewName => _currentViewName;
  bool get isLoggedIn => _isLoggedIn;
  String get loggedInUser => _loggedInUser;
  String get accessToken => _accessToken;
  String get deviceId => _deviceId;
  bool get isFetching => _isFetching;

  // These constructors deserve some explanation; you can either get the
  // initial state of the app or get a new state from and old one and the fields
  // that you want to change. This ensures that all state transitions happen
  // via the constructor copy and override constructor. Since these is a
  // Redux state, this is exactly what we want to return from the reducers.
  AppState.copyAndOverride(
      AppState oldState,
  {
    String currentViewName,
    bool isLoggedIn,
    String loggedInUser,
    String accessToken,
    String deviceId,
    bool isFetching,
  })
      :
        _currentViewName = currentViewName ?? oldState._currentViewName,
        _isLoggedIn = isLoggedIn ?? oldState._isLoggedIn,
        _loggedInUser = loggedInUser ?? oldState._loggedInUser,
        _accessToken = accessToken ?? oldState._accessToken,
        _deviceId = deviceId ?? oldState._deviceId,
        _isFetching = isFetching ?? oldState._isFetching
  {
    window.localStorage.addAll(toJson());
  }

  static AppState getStoredState() {
    return
      AppState.copyAndOverride(AppState.init(),
          currentViewName: window.localStorage['currentViewName'],
          loggedInUser: window.localStorage['loggedInUser'],
          isLoggedIn: window.localStorage['isLoggedIn']?.toLowerCase() == 'true',
          accessToken: window.localStorage['accessToken'],
          deviceId: window.localStorage['deviceId']
      );
  }

  AppState.init()
      :
        _currentViewName = '',
        _isLoggedIn = false,
        _loggedInUser = '',
        _accessToken = '',
        _deviceId = '',
        _isFetching = false
  ;

  // For persistence
  Map<String, String> toJson() => {
    'currentViewName' : _currentViewName,
    'loggedInUser' : _loggedInUser,
    'isLoggedIn' : _isLoggedIn.toString(),
    'accessToken' : _accessToken,
    'deviceId' : _deviceId
  };
}