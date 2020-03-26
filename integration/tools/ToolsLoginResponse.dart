/// Encapsulating response from Tools login attempt.
class ToolsLoginResponse {
  final String _accessToken;
  final String _deviceId;
  final String _appId;
  final String _statusCode;
  final String _statusMessage;

  String get accessToken => _accessToken;
  String get deviceId => _deviceId;
  String get appId => _appId;
  String get statusCode => _statusCode;
  String get statusMessage => _statusMessage;

  ToolsLoginResponse(this._accessToken, this._deviceId, this._appId,
      this._statusCode, this._statusMessage);
}