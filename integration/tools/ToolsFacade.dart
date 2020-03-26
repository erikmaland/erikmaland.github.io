import 'dart:convert';

import 'package:http/http.dart' as http;

import 'ToolsGlobalContainersResponse.dart';
import 'ToolsLoginResponse.dart';

class ToolsFacade {
  static final String host = 'halliburton.keystone.no';
  static final String protocol = 'https';
  static final String loginPath = 'vendor/service.nsf/oauth/login.xsp';
  static final String fetchPath = 'vendor/service.nsf/common/keyword/get.xsp';
  static final String customView = 'vendor/service.nsf/model/customview.xsp';
  static final String url = '$protocol://$host/$loginPath';

  Future<ToolsLoginResponse> login(String username, String password) {
    // Note that utf8.encode(<string>) causes problems with special characters
    // like æ, ø, å.
    var authorizationString = base64Encode('$username:$password'.runes.toList());
    return http.post(url, headers: {'Authorization': 'Basic $authorizationString'})
        .then((response) {
          var body = jsonDecode(response.body);
          return ToolsLoginResponse(
              body['access_token'],
              body['device_id'].toString(),
              '',
              body['status_code'].toString(),
              body['status_message']
          );
    });
  }

  Future<ToolsGlobalContainersResponse> getGlobalContainers(
      String accessToken, String defaultAppId, String deviceId) {
    var request = {
      '"model"':'"app.GlobalService.Supplier.Supplier"',
      '"data"':'[{"supplier":"tools"}]'
    };
    return http.post(
        Uri.https(host, customView, {'device_id' : deviceId}),
        body: {
          '"access_token"':'"$accessToken"',
          '"app_id"':'"$defaultAppId"',
          '"business_id"':'"1"',
          '"request"':request.toString()
        })
        .then((value) {
          print('Global containers response: ' + value.toString());
          return ToolsGlobalContainersResponse();
        }
    );
  }
}