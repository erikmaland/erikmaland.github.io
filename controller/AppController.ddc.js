define(['dart_sdk', 'packages/http/http', 'packages/http/src/base_client', 'packages/redux/redux'], function(dart_sdk, packages__http__http, packages__http__src__base_client, packages__redux__redux) {
  'use strict';
  const core = dart_sdk.core;
  const convert = dart_sdk.convert;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const http = packages__http__http.http;
  const response = packages__http__src__base_client.src__response;
  const store = packages__redux__redux.src__store;
  const ToolsFacade = Object.create(dart.library);
  const ToolsLoginResponse = Object.create(dart.library);
  const ToolsGlobalContainersResponse = Object.create(dart.library);
  const EventHandler = Object.create(dart.library);
  const TubularSegment = Object.create(dart.library);
  const Action = Object.create(dart.library);
  const BhaBuilderView = Object.create(dart.library);
  const ToolsReducer = Object.create(dart.library);
  const AppState = Object.create(dart.library);
  const main = Object.create(dart.library);
  const AppController = Object.create(dart.library);
  const ShopView = Object.create(dart.library);
  const Navigatable = Object.create(dart.library);
  const SaveView = Object.create(dart.library);
  const LoginView = Object.create(dart.library);
  const HomeView = Object.create(dart.library);
  const CartView = Object.create(dart.library);
  const ToolsMiddleware = Object.create(dart.library);
  const NavigationBar = Object.create(dart.library);
  const $runes = dartx.runes;
  const $toList = dartx.toList;
  const $toString = dartx.toString;
  const $_get = dartx._get;
  const $addAll = dartx.addAll;
  const $toLowerCase = dartx.toLowerCase;
  const $children = dartx.children;
  const $add = dartx.add;
  const $containsKey = dartx.containsKey;
  const $clear = dartx.clear;
  const $setInnerHtml = dartx.setInnerHtml;
  const $onClick = dartx.onClick;
  const $forEach = dartx.forEach;
  const $_set = dartx._set;
  const $innerHtml = dartx.innerHtml;
  const $setAttribute = dartx.setAttribute;
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let ResponseToToolsLoginResponse = () => (ResponseToToolsLoginResponse = dart.constFn(dart.fnType(ToolsLoginResponse.ToolsLoginResponse, [response.Response])))();
  let ResponseToToolsGlobalContainersResponse = () => (ResponseToToolsGlobalContainersResponse = dart.constFn(dart.fnType(ToolsGlobalContainersResponse.ToolsGlobalContainersResponse, [response.Response])))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let IdentityMapOfString$BhaBuilderView = () => (IdentityMapOfString$BhaBuilderView = dart.constFn(_js_helper.IdentityMap$(core.String, BhaBuilderView.BhaBuilderView)))();
  let StoreOfAppState = () => (StoreOfAppState = dart.constFn(store.Store$(AppState.AppState)))();
  let dynamicAnddynamicToAppState = () => (dynamicAnddynamicToAppState = dart.constFn(dart.fnType(AppState.AppState, [dart.dynamic, dart.dynamic])))();
  let dynamicTodynamic = () => (dynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic])))();
  let StoreAnddynamicAndFnTodynamic = () => (StoreAnddynamicAndFnTodynamic = dart.constFn(dart.fnType(dart.dynamic, [store.Store, dart.dynamic, dynamicTodynamic()])))();
  let StoreOfAppStateAnddynamicAndFnTodynamic = () => (StoreOfAppStateAnddynamicAndFnTodynamic = dart.constFn(dart.fnType(dart.dynamic, [StoreOfAppState(), dart.dynamic, dynamicTodynamic()])))();
  let JSArrayOfStoreOfAppStateAnddynamicAndFnTodynamic = () => (JSArrayOfStoreOfAppStateAnddynamicAndFnTodynamic = dart.constFn(_interceptors.JSArray$(StoreOfAppStateAnddynamicAndFnTodynamic())))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let MouseEventTovoid = () => (MouseEventTovoid = dart.constFn(dart.fnType(dart.void, [html.MouseEvent])))();
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let dynamicTovoid = () => (dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))();
  let TubularSegmentToNull = () => (TubularSegmentToNull = dart.constFn(dart.fnType(core.Null, [TubularSegment.TubularSegment])))();
  let JSArrayOfTubularSegment = () => (JSArrayOfTubularSegment = dart.constFn(_interceptors.JSArray$(TubularSegment.TubularSegment)))();
  let MouseEventToNull = () => (MouseEventToNull = dart.constFn(dart.fnType(core.Null, [html.MouseEvent])))();
  let TubularSegmentTovoid = () => (TubularSegmentTovoid = dart.constFn(dart.fnType(dart.void, [TubularSegment.TubularSegment])))();
  let ToolsLoginResponseTodynamic = () => (ToolsLoginResponseTodynamic = dart.constFn(dart.fnType(dart.dynamic, [ToolsLoginResponse.ToolsLoginResponse])))();
  let ToolsGlobalContainersResponseToNull = () => (ToolsGlobalContainersResponseToNull = dart.constFn(dart.fnType(core.Null, [ToolsGlobalContainersResponse.ToolsGlobalContainersResponse])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(ToolsReducer.ToolsReducer.reducer, dynamicAnddynamicToAppState());
    },
    get C1() {
      return C1 = dart.fn(ToolsMiddleware.ToolsMiddleware.toolsMiddlerware, StoreAnddynamicAndFnTodynamic());
    }
  });
  ToolsFacade.ToolsFacade = class ToolsFacade$ extends core.Object {
    login(username, password) {
      let authorizationString = convert.base64Encode((dart.str(username) + ":" + dart.str(password))[$runes][$toList]());
      return http.post(ToolsFacade.ToolsFacade.url, {headers: new (IdentityMapOfString$String()).from(["Authorization", "Basic " + dart.str(authorizationString)])}).then(ToolsLoginResponse.ToolsLoginResponse, dart.fn(response => {
        let body = convert.jsonDecode(response.body);
        return new ToolsLoginResponse.ToolsLoginResponse.new(core.String._check(dart.dsend(body, '_get', ["access_token"])), dart.toString(dart.dsend(body, '_get', ["device_id"])), "", dart.toString(dart.dsend(body, '_get', ["status_code"])), core.String._check(dart.dsend(body, '_get', ["status_message"])));
      }, ResponseToToolsLoginResponse()));
    }
    getGlobalContainers(accessToken, defaultAppId, deviceId) {
      let request = new (IdentityMapOfString$String()).from(["\"model\"", "\"app.GlobalService.Supplier.Supplier\"", "\"data\"", "[{\"supplier\":\"tools\"}]"]);
      return http.post(core._Uri.https(ToolsFacade.ToolsFacade.host, ToolsFacade.ToolsFacade.customView, new (IdentityMapOfString$String()).from(["device_id", deviceId])), {body: new (IdentityMapOfString$String()).from(["\"access_token\"", "\"" + dart.str(accessToken) + "\"", "\"app_id\"", "\"" + dart.str(defaultAppId) + "\"", "\"business_id\"", "\"1\"", "\"request\"", request[$toString]()])}).then(ToolsGlobalContainersResponse.ToolsGlobalContainersResponse, dart.fn(value => {
        core.print("Global containers response: " + dart.notNull(dart.toString(value)));
        return new ToolsGlobalContainersResponse.ToolsGlobalContainersResponse.new();
      }, ResponseToToolsGlobalContainersResponse()));
    }
  };
  (ToolsFacade.ToolsFacade.new = function() {
    ;
  }).prototype = ToolsFacade.ToolsFacade.prototype;
  dart.addTypeTests(ToolsFacade.ToolsFacade);
  dart.setMethodSignature(ToolsFacade.ToolsFacade, () => ({
    __proto__: dart.getMethods(ToolsFacade.ToolsFacade.__proto__),
    login: dart.fnType(async.Future$(ToolsLoginResponse.ToolsLoginResponse), [core.String, core.String]),
    getGlobalContainers: dart.fnType(async.Future$(ToolsGlobalContainersResponse.ToolsGlobalContainersResponse), [core.String, core.String, core.String])
  }));
  dart.setLibraryUri(ToolsFacade.ToolsFacade, "org-dartlang-app:///web/integration/tools/ToolsFacade.dart");
  dart.defineLazy(ToolsFacade.ToolsFacade, {
    /*ToolsFacade.ToolsFacade.host*/get host() {
      return "halliburton.keystone.no";
    },
    /*ToolsFacade.ToolsFacade.protocol*/get protocol() {
      return "https";
    },
    /*ToolsFacade.ToolsFacade.loginPath*/get loginPath() {
      return "vendor/service.nsf/oauth/login.xsp";
    },
    /*ToolsFacade.ToolsFacade.fetchPath*/get fetchPath() {
      return "vendor/service.nsf/common/keyword/get.xsp";
    },
    /*ToolsFacade.ToolsFacade.customView*/get customView() {
      return "vendor/service.nsf/model/customview.xsp";
    },
    /*ToolsFacade.ToolsFacade.url*/get url() {
      return dart.str(ToolsFacade.ToolsFacade.protocol) + "://" + dart.str(ToolsFacade.ToolsFacade.host) + "/" + dart.str(ToolsFacade.ToolsFacade.loginPath);
    }
  });
  const _accessToken$ = dart.privateName(ToolsLoginResponse, "_accessToken");
  const _deviceId$ = dart.privateName(ToolsLoginResponse, "_deviceId");
  const _appId$ = dart.privateName(ToolsLoginResponse, "_appId");
  const _statusCode$ = dart.privateName(ToolsLoginResponse, "_statusCode");
  const _statusMessage$ = dart.privateName(ToolsLoginResponse, "_statusMessage");
  ToolsLoginResponse.ToolsLoginResponse = class ToolsLoginResponse extends core.Object {
    get accessToken() {
      return this[_accessToken$];
    }
    get deviceId() {
      return this[_deviceId$];
    }
    get appId() {
      return this[_appId$];
    }
    get statusCode() {
      return this[_statusCode$];
    }
    get statusMessage() {
      return this[_statusMessage$];
    }
  };
  (ToolsLoginResponse.ToolsLoginResponse.new = function(_accessToken, _deviceId, _appId, _statusCode, _statusMessage) {
    this[_accessToken$] = _accessToken;
    this[_deviceId$] = _deviceId;
    this[_appId$] = _appId;
    this[_statusCode$] = _statusCode;
    this[_statusMessage$] = _statusMessage;
    ;
  }).prototype = ToolsLoginResponse.ToolsLoginResponse.prototype;
  dart.addTypeTests(ToolsLoginResponse.ToolsLoginResponse);
  dart.setGetterSignature(ToolsLoginResponse.ToolsLoginResponse, () => ({
    __proto__: dart.getGetters(ToolsLoginResponse.ToolsLoginResponse.__proto__),
    accessToken: core.String,
    deviceId: core.String,
    appId: core.String,
    statusCode: core.String,
    statusMessage: core.String
  }));
  dart.setLibraryUri(ToolsLoginResponse.ToolsLoginResponse, "org-dartlang-app:///web/integration/tools/ToolsLoginResponse.dart");
  dart.setFieldSignature(ToolsLoginResponse.ToolsLoginResponse, () => ({
    __proto__: dart.getFields(ToolsLoginResponse.ToolsLoginResponse.__proto__),
    [_accessToken$]: dart.finalFieldType(core.String),
    [_deviceId$]: dart.finalFieldType(core.String),
    [_appId$]: dart.finalFieldType(core.String),
    [_statusCode$]: dart.finalFieldType(core.String),
    [_statusMessage$]: dart.finalFieldType(core.String)
  }));
  ToolsGlobalContainersResponse.ToolsGlobalContainersResponse = class ToolsGlobalContainersResponse extends core.Object {};
  (ToolsGlobalContainersResponse.ToolsGlobalContainersResponse.new = function() {
    ;
  }).prototype = ToolsGlobalContainersResponse.ToolsGlobalContainersResponse.prototype;
  dart.addTypeTests(ToolsGlobalContainersResponse.ToolsGlobalContainersResponse);
  dart.setLibraryUri(ToolsGlobalContainersResponse.ToolsGlobalContainersResponse, "org-dartlang-app:///web/integration/tools/ToolsGlobalContainersResponse.dart");
  EventHandler.EventHandler = class EventHandler extends core.Object {};
  (EventHandler.EventHandler.new = function() {
    ;
  }).prototype = EventHandler.EventHandler.prototype;
  dart.addTypeTests(EventHandler.EventHandler);
  dart.setLibraryUri(EventHandler.EventHandler, "org-dartlang-app:///web/controller/EventHandler.dart");
  const _lowerDiameter = dart.privateName(TubularSegment, "_lowerDiameter");
  const _upperDiameter = dart.privateName(TubularSegment, "_upperDiameter");
  const _length = dart.privateName(TubularSegment, "_length");
  TubularSegment.TubularSegment = class TubularSegment extends core.Object {
    toJson() {
      return new (IdentityMapOfString$dynamic()).from(["radius1", this[_lowerDiameter], "radius2", this[_upperDiameter], "length", this[_length]]);
    }
    toHtml() {
      return "<b>Lower Diameter<b>: " + dart.str(this[_lowerDiameter]) + ", " + "<b>Upper Diameter<b>: " + dart.str(this[_upperDiameter]) + ", " + "<b>Length<b>: " + dart.str(this[_length]);
    }
  };
  (TubularSegment.TubularSegment.fromJson = function(json) {
    this[_lowerDiameter] = core.double._check(json[$_get]("radius1"));
    this[_upperDiameter] = core.double._check(json[$_get]("radius2"));
    this[_length] = core.double._check(json[$_get]("length"));
    ;
  }).prototype = TubularSegment.TubularSegment.prototype;
  dart.addTypeTests(TubularSegment.TubularSegment);
  dart.setMethodSignature(TubularSegment.TubularSegment, () => ({
    __proto__: dart.getMethods(TubularSegment.TubularSegment.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), []),
    toHtml: dart.fnType(core.String, [])
  }));
  dart.setLibraryUri(TubularSegment.TubularSegment, "org-dartlang-app:///web/domain/TubularSegment.dart");
  dart.setFieldSignature(TubularSegment.TubularSegment, () => ({
    __proto__: dart.getFields(TubularSegment.TubularSegment.__proto__),
    [_lowerDiameter]: dart.finalFieldType(core.double),
    [_upperDiameter]: dart.finalFieldType(core.double),
    [_length]: dart.finalFieldType(core.double)
  }));
  const _user$ = dart.privateName(Action, "_user");
  const _password$ = dart.privateName(Action, "_password");
  Action.LoginAction = class LoginAction extends core.Object {
    get user() {
      return this[_user$];
    }
    get password() {
      return this[_password$];
    }
  };
  (Action.LoginAction.new = function(_user, _password) {
    this[_user$] = _user;
    this[_password$] = _password;
    ;
  }).prototype = Action.LoginAction.prototype;
  dart.addTypeTests(Action.LoginAction);
  dart.setGetterSignature(Action.LoginAction, () => ({
    __proto__: dart.getGetters(Action.LoginAction.__proto__),
    user: core.String,
    password: core.String
  }));
  dart.setLibraryUri(Action.LoginAction, "org-dartlang-app:///web/redux/Action.dart");
  dart.setFieldSignature(Action.LoginAction, () => ({
    __proto__: dart.getFields(Action.LoginAction.__proto__),
    [_user$]: dart.finalFieldType(core.String),
    [_password$]: dart.finalFieldType(core.String)
  }));
  const _toolsLoginResponse$ = dart.privateName(Action, "_toolsLoginResponse");
  Action.LoginResponseAction = class LoginResponseAction extends core.Object {
    get user() {
      return this[_user$];
    }
    get toolsLoginResponse() {
      return this[_toolsLoginResponse$];
    }
  };
  (Action.LoginResponseAction.new = function(_user, _toolsLoginResponse) {
    this[_user$] = _user;
    this[_toolsLoginResponse$] = _toolsLoginResponse;
    ;
  }).prototype = Action.LoginResponseAction.prototype;
  dart.addTypeTests(Action.LoginResponseAction);
  dart.setGetterSignature(Action.LoginResponseAction, () => ({
    __proto__: dart.getGetters(Action.LoginResponseAction.__proto__),
    user: core.String,
    toolsLoginResponse: ToolsLoginResponse.ToolsLoginResponse
  }));
  dart.setLibraryUri(Action.LoginResponseAction, "org-dartlang-app:///web/redux/Action.dart");
  dart.setFieldSignature(Action.LoginResponseAction, () => ({
    __proto__: dart.getFields(Action.LoginResponseAction.__proto__),
    [_user$]: dart.finalFieldType(core.String),
    [_toolsLoginResponse$]: dart.finalFieldType(ToolsLoginResponse.ToolsLoginResponse)
  }));
  const _newView$ = dart.privateName(Action, "_newView");
  Action.ViewChangeAction = class ViewChangeAction extends core.Object {
    get newView() {
      return this[_newView$];
    }
  };
  (Action.ViewChangeAction.new = function(_newView) {
    this[_newView$] = _newView;
    ;
  }).prototype = Action.ViewChangeAction.prototype;
  dart.addTypeTests(Action.ViewChangeAction);
  dart.setGetterSignature(Action.ViewChangeAction, () => ({
    __proto__: dart.getGetters(Action.ViewChangeAction.__proto__),
    newView: core.String
  }));
  dart.setLibraryUri(Action.ViewChangeAction, "org-dartlang-app:///web/redux/Action.dart");
  dart.setFieldSignature(Action.ViewChangeAction, () => ({
    __proto__: dart.getFields(Action.ViewChangeAction.__proto__),
    [_newView$]: dart.finalFieldType(core.String)
  }));
  Action.LogoutAction = class LogoutAction extends core.Object {};
  (Action.LogoutAction.new = function() {
    ;
  }).prototype = Action.LogoutAction.prototype;
  dart.addTypeTests(Action.LogoutAction);
  dart.setLibraryUri(Action.LogoutAction, "org-dartlang-app:///web/redux/Action.dart");
  Action.FetchGlobalContainersAction = class FetchGlobalContainersAction extends core.Object {};
  (Action.FetchGlobalContainersAction.new = function() {
    ;
  }).prototype = Action.FetchGlobalContainersAction.prototype;
  dart.addTypeTests(Action.FetchGlobalContainersAction);
  dart.setLibraryUri(Action.FetchGlobalContainersAction, "org-dartlang-app:///web/redux/Action.dart");
  BhaBuilderView.BhaBuilderView = class BhaBuilderView extends core.Object {};
  BhaBuilderView.BhaBuilderView[dart.mixinOn] = Object => class BhaBuilderView extends Object {};
  (BhaBuilderView.BhaBuilderView[dart.mixinNew] = function() {
  }).prototype = BhaBuilderView.BhaBuilderView.prototype;
  dart.addTypeTests(BhaBuilderView.BhaBuilderView);
  BhaBuilderView.BhaBuilderView[dart.implements] = () => [core.Object];
  dart.setLibraryUri(BhaBuilderView.BhaBuilderView, "org-dartlang-app:///web/view/BhaBuilderView.dart");
  ToolsReducer.ToolsReducer = class ToolsReducer extends core.Object {
    static reducer(state, action) {
      if (Action.LoginResponseAction.is(action)) {
        if (action.toolsLoginResponse.statusCode === "200") {
          return new AppState.AppState.copyAndOverride(AppState.AppState._check(state), {isLoggedIn: true, loggedInUser: action.user, accessToken: action.toolsLoginResponse.accessToken, deviceId: action.toolsLoginResponse.deviceId, currentViewName: "Home"});
        }
      }
      if (Action.ViewChangeAction.is(action)) {
        return new AppState.AppState.copyAndOverride(AppState.AppState._check(state), {currentViewName: action.newView});
      }
      if (Action.LogoutAction.is(action)) {
        return new AppState.AppState.copyAndOverride(new AppState.AppState.init(), {currentViewName: "LoginView"});
      }
      if (Action.FetchGlobalContainersAction.is(action)) {
        return new AppState.AppState.copyAndOverride(AppState.AppState._check(state));
      }
      return AppState.AppState._check(state);
    }
  };
  (ToolsReducer.ToolsReducer.new = function() {
    ;
  }).prototype = ToolsReducer.ToolsReducer.prototype;
  dart.addTypeTests(ToolsReducer.ToolsReducer);
  dart.setLibraryUri(ToolsReducer.ToolsReducer, "org-dartlang-app:///web/redux/ToolsReducer.dart");
  const _currentViewName = dart.privateName(AppState, "_currentViewName");
  const _isLoggedIn = dart.privateName(AppState, "_isLoggedIn");
  const _loggedInUser = dart.privateName(AppState, "_loggedInUser");
  const _accessToken = dart.privateName(AppState, "_accessToken");
  const _deviceId = dart.privateName(AppState, "_deviceId");
  const _isFetching = dart.privateName(AppState, "_isFetching");
  AppState.AppState = class AppState$ extends core.Object {
    get currentViewName() {
      return this[_currentViewName];
    }
    get isLoggedIn() {
      return this[_isLoggedIn];
    }
    get loggedInUser() {
      return this[_loggedInUser];
    }
    get accessToken() {
      return this[_accessToken];
    }
    get deviceId() {
      return this[_deviceId];
    }
    get isFetching() {
      return this[_isFetching];
    }
    static getStoredState() {
      let t0;
      return new AppState.AppState.copyAndOverride(new AppState.AppState.init(), {currentViewName: html.window.localStorage[$_get]("currentViewName"), loggedInUser: html.window.localStorage[$_get]("loggedInUser"), isLoggedIn: (t0 = html.window.localStorage[$_get]("isLoggedIn"), t0 == null ? null : t0[$toLowerCase]()) === "true", accessToken: html.window.localStorage[$_get]("accessToken"), deviceId: html.window.localStorage[$_get]("deviceId")});
    }
    toJson() {
      return new (IdentityMapOfString$String()).from(["currentViewName", this[_currentViewName], "loggedInUser", this[_loggedInUser], "isLoggedIn", dart.toString(this[_isLoggedIn]), "accessToken", this[_accessToken], "deviceId", this[_deviceId]]);
    }
  };
  (AppState.AppState.copyAndOverride = function(oldState, opts) {
    let t0, t0$, t0$0, t0$1, t0$2, t0$3;
    let currentViewName = opts && 'currentViewName' in opts ? opts.currentViewName : null;
    let isLoggedIn = opts && 'isLoggedIn' in opts ? opts.isLoggedIn : null;
    let loggedInUser = opts && 'loggedInUser' in opts ? opts.loggedInUser : null;
    let accessToken = opts && 'accessToken' in opts ? opts.accessToken : null;
    let deviceId = opts && 'deviceId' in opts ? opts.deviceId : null;
    let isFetching = opts && 'isFetching' in opts ? opts.isFetching : null;
    this[_currentViewName] = (t0 = currentViewName, t0 == null ? oldState[_currentViewName] : t0);
    this[_isLoggedIn] = (t0$ = isLoggedIn, t0$ == null ? oldState[_isLoggedIn] : t0$);
    this[_loggedInUser] = (t0$0 = loggedInUser, t0$0 == null ? oldState[_loggedInUser] : t0$0);
    this[_accessToken] = (t0$1 = accessToken, t0$1 == null ? oldState[_accessToken] : t0$1);
    this[_deviceId] = (t0$2 = deviceId, t0$2 == null ? oldState[_deviceId] : t0$2);
    this[_isFetching] = (t0$3 = isFetching, t0$3 == null ? oldState[_isFetching] : t0$3);
    html.window.localStorage[$addAll](this.toJson());
  }).prototype = AppState.AppState.prototype;
  (AppState.AppState.init = function() {
    this[_currentViewName] = "";
    this[_isLoggedIn] = false;
    this[_loggedInUser] = "";
    this[_accessToken] = "";
    this[_deviceId] = "";
    this[_isFetching] = false;
    ;
  }).prototype = AppState.AppState.prototype;
  dart.addTypeTests(AppState.AppState);
  dart.setMethodSignature(AppState.AppState, () => ({
    __proto__: dart.getMethods(AppState.AppState.__proto__),
    toJson: dart.fnType(core.Map$(core.String, core.String), [])
  }));
  dart.setGetterSignature(AppState.AppState, () => ({
    __proto__: dart.getGetters(AppState.AppState.__proto__),
    currentViewName: core.String,
    isLoggedIn: core.bool,
    loggedInUser: core.String,
    accessToken: core.String,
    deviceId: core.String,
    isFetching: core.bool
  }));
  dart.setLibraryUri(AppState.AppState, "org-dartlang-app:///web/redux/AppState.dart");
  dart.setFieldSignature(AppState.AppState, () => ({
    __proto__: dart.getFields(AppState.AppState.__proto__),
    [_currentViewName]: dart.finalFieldType(core.String),
    [_isLoggedIn]: dart.finalFieldType(core.bool),
    [_loggedInUser]: dart.finalFieldType(core.String),
    [_accessToken]: dart.finalFieldType(core.String),
    [_deviceId]: dart.finalFieldType(core.String),
    [_isFetching]: dart.finalFieldType(core.bool)
  }));
  main.main = function main$() {
    let mainUiContainer = html.querySelector("#main");
    main._controller = new AppController.AppController.new(mainUiContainer);
    main._controller.initializeState();
    main._controller.buildUi();
  };
  dart.copyProperties(main, {
    get controller() {
      return main._controller;
    }
  });
  dart.defineLazy(main, {
    /*main._controller*/get _controller() {
      return null;
    },
    set _controller(_) {}
  });
  const _loginView = dart.privateName(AppController, "_loginView");
  const _homeView = dart.privateName(AppController, "_homeView");
  const _cartView = dart.privateName(AppController, "_cartView");
  const _saveView = dart.privateName(AppController, "_saveView");
  const _shopView = dart.privateName(AppController, "_shopView");
  const _views = dart.privateName(AppController, "_views");
  const _navigationBar = dart.privateName(AppController, "_navigationBar");
  const _mainDivElement = dart.privateName(AppController, "_mainDivElement");
  const _contentElement = dart.privateName(AppController, "_contentElement");
  const _store = dart.privateName(AppController, "_store");
  let C0;
  let C1;
  AppController.AppController = class AppController extends core.Object {
    initializeState() {
      this[_store] = new (StoreOfAppState()).new(C0 || CT.C0, {initialState: AppState.AppState.getStoredState(), middleware: JSArrayOfStoreOfAppStateAnddynamicAndFnTodynamic().of([C1 || CT.C1])});
      this[_store].onChange.listen(dart.fn(newState => {
        if (dart.test(this[_views][$containsKey](dart.dload(newState, 'currentViewName')))) {
          this.updateView(core.String._check(dart.dload(newState, 'currentViewName')));
        }
      }, dynamicToNull()));
    }
    buildUi() {
      let t0;
      this[_navigationBar] = new NavigationBar.NavigationBar.new(this);
      t0 = this[_navigationBar];
      t0.addElement(this[_homeView]);
      t0.addElement(this[_shopView]);
      t0.addElement(this[_cartView]);
      t0.addElement(this[_saveView]);
      t0;
      this.updateView(core.String._check(dart.dload(this[_store].state, 'currentViewName')));
    }
    updateView(viewName) {
      let t0, t2, t1, t0$, t0$0;
      let newElement = this[_views][$_get](viewName);
      if (newElement == null) {
        return;
      }
      this[_mainDivElement][$children][$clear]();
      if (Navigatable.Navigatable.is(newElement)) {
        t0 = this[_mainDivElement][$children];
        t0[$add](this[_navigationBar].mainElement);
        t0;
      }
      if (dart.dtest(dart.dload(this[_store].state, 'isLoggedIn'))) {
        this[_mainDivElement][$children][$add]((t0$ = html.Element.div(), t0$[$children][$add]((t1 = html.Element.div(), t1[$setInnerHtml]("<b>Logged in as " + dart.str(dart.dload(this[_store].state, 'loggedInUser')) + "<b>"), t1[$children][$add]((t2 = html.ButtonElement.new(), t2[$setInnerHtml]("Log out"), t2[$onClick].listen(dart.fn(event => this.logOut(), MouseEventTovoid())), t2)), t1)), t0$));
      }
      this[_mainDivElement][$children][$add]((t0$0 = this[_contentElement], t0$0[$children][$clear](), t0$0[$children][$add](newElement.getMainElement()), t0$0));
    }
    getStartView() {
      return this[_loginView].getMainElement();
    }
    fileUploaded(uploadedJson) {
      let tubulars = core.List.as(uploadedJson[$_get]("tubulars"));
      tubulars[$forEach](dart.fn(json => this[_shopView].add(new TubularSegment.TubularSegment.fromJson(MapOfString$dynamic()._check(json))), dynamicTovoid()));
    }
    textFileSaved() {
      let jsonFromCart = new _js_helper.LinkedMap.new();
      let i = 0;
      this[_cartView].cart[$forEach](dart.fn(item => {
        jsonFromCart[$_set](i[$toString](), item.toJson());
        i = i + 1;
      }, TubularSegmentToNull()));
      return jsonFromCart[$toString]();
    }
    itemAddedToCart(tubularSegment) {
      this[_cartView].addElement(tubularSegment);
    }
    loginAttempt(user, password) {
      this[_store].dispatch(new Action.LoginAction.new(user, password));
    }
    viewChanged(newView) {
      this[_store].dispatch(new Action.ViewChangeAction.new(newView));
    }
    logOut() {
      this[_store].dispatch(new Action.LogoutAction.new());
    }
    fetchGlobalContainers() {
      this[_store].dispatch(new Action.FetchGlobalContainersAction.new());
    }
  };
  (AppController.AppController.new = function(mainElement) {
    let t0;
    this[_loginView] = null;
    this[_homeView] = null;
    this[_cartView] = null;
    this[_saveView] = null;
    this[_shopView] = null;
    this[_views] = null;
    this[_navigationBar] = null;
    this[_mainDivElement] = null;
    this[_contentElement] = null;
    this[_store] = null;
    this[_homeView] = new HomeView.HomeView.new();
    this[_cartView] = new CartView.CartView.new();
    this[_saveView] = new SaveView.SaveView.new(this);
    this[_shopView] = new ShopView.ShopView.new(this);
    this[_loginView] = new LoginView.LoginView.new(this);
    this[_views] = new (IdentityMapOfString$BhaBuilderView()).from([this[_homeView].getName(), this[_homeView], this[_cartView].getName(), this[_cartView], this[_saveView].getName(), this[_saveView], this[_shopView].getName(), this[_shopView], this[_loginView].getName(), this[_loginView]]);
    this[_mainDivElement] = html.DivElement._check((t0 = mainElement, t0[$children][$add](this[_contentElement] = html.Element.div()), t0));
  }).prototype = AppController.AppController.prototype;
  dart.addTypeTests(AppController.AppController);
  AppController.AppController[dart.implements] = () => [EventHandler.EventHandler];
  dart.setMethodSignature(AppController.AppController, () => ({
    __proto__: dart.getMethods(AppController.AppController.__proto__),
    initializeState: dart.fnType(dart.void, []),
    buildUi: dart.fnType(dart.void, []),
    updateView: dart.fnType(dart.void, [core.String]),
    getStartView: dart.fnType(html.Element, []),
    fileUploaded: dart.fnType(dart.void, [core.Map$(core.String, dart.dynamic)]),
    textFileSaved: dart.fnType(core.String, []),
    itemAddedToCart: dart.fnType(dart.void, [TubularSegment.TubularSegment]),
    loginAttempt: dart.fnType(dart.void, [core.String, core.String]),
    viewChanged: dart.fnType(dart.void, [core.String]),
    logOut: dart.fnType(dart.void, []),
    fetchGlobalContainers: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(AppController.AppController, "org-dartlang-app:///web/controller/AppController.dart");
  dart.setFieldSignature(AppController.AppController, () => ({
    __proto__: dart.getFields(AppController.AppController.__proto__),
    [_loginView]: dart.fieldType(LoginView.LoginView),
    [_homeView]: dart.fieldType(HomeView.HomeView),
    [_cartView]: dart.fieldType(CartView.CartView),
    [_saveView]: dart.fieldType(SaveView.SaveView),
    [_shopView]: dart.fieldType(ShopView.ShopView),
    [_views]: dart.fieldType(core.Map$(core.String, BhaBuilderView.BhaBuilderView)),
    [_navigationBar]: dart.fieldType(NavigationBar.NavigationBar),
    [_mainDivElement]: dart.fieldType(html.DivElement),
    [_contentElement]: dart.fieldType(html.Element),
    [_store]: dart.fieldType(store.Store)
  }));
  const _tubularSegments = dart.privateName(ShopView, "_tubularSegments");
  const _eventHandler$ = dart.privateName(ShopView, "_eventHandler");
  ShopView.ShopView = class ShopView extends core.Object {
    add(tubularSegment) {
      this[_tubularSegments][$add](tubularSegment);
    }
    getMainElement() {
      let t1, t0;
      t0 = html.Element.div();
      t0[$children][$add]((t1 = html.ButtonElement.new(), t1[$setInnerHtml]("Fetch Data"), t1[$onClick].listen(dart.fn(event => {
        this[_eventHandler$].fetchGlobalContainers();
      }, MouseEventToNull())), t1));
      return t0;
    }
    getNavigationMenuDisplayName() {
      return this.getName();
    }
    getRelativeUrl() {
      return "#shop";
    }
    getName() {
      return "Shop";
    }
  };
  (ShopView.ShopView.new = function(_eventHandler) {
    this[_tubularSegments] = JSArrayOfTubularSegment().of([]);
    this[_eventHandler$] = _eventHandler;
    ;
  }).prototype = ShopView.ShopView.prototype;
  dart.addTypeTests(ShopView.ShopView);
  ShopView.ShopView[dart.implements] = () => [Navigatable.Navigatable];
  dart.setMethodSignature(ShopView.ShopView, () => ({
    __proto__: dart.getMethods(ShopView.ShopView.__proto__),
    add: dart.fnType(dart.void, [TubularSegment.TubularSegment]),
    getMainElement: dart.fnType(html.Element, []),
    getNavigationMenuDisplayName: dart.fnType(core.String, []),
    getRelativeUrl: dart.fnType(core.String, []),
    getName: dart.fnType(core.String, [])
  }));
  dart.setLibraryUri(ShopView.ShopView, "org-dartlang-app:///web/view/ShopView.dart");
  dart.setFieldSignature(ShopView.ShopView, () => ({
    __proto__: dart.getFields(ShopView.ShopView.__proto__),
    [_eventHandler$]: dart.finalFieldType(EventHandler.EventHandler),
    [_tubularSegments]: dart.finalFieldType(core.List$(TubularSegment.TubularSegment))
  }));
  const Object_BhaBuilderView$36 = class Object_BhaBuilderView extends core.Object {};
  (Object_BhaBuilderView$36.new = function() {
  }).prototype = Object_BhaBuilderView$36.prototype;
  dart.applyMixin(Object_BhaBuilderView$36, BhaBuilderView.BhaBuilderView);
  Navigatable.Navigatable = class Navigatable extends Object_BhaBuilderView$36 {};
  (Navigatable.Navigatable.new = function() {
    ;
  }).prototype = Navigatable.Navigatable.prototype;
  dart.addTypeTests(Navigatable.Navigatable);
  dart.setLibraryUri(Navigatable.Navigatable, "org-dartlang-app:///web/navigation/Navigatable.dart");
  const _eventHandler$0 = dart.privateName(SaveView, "_eventHandler");
  SaveView.SaveView = class SaveView extends core.Object {
    getMainElement() {
      let t1, t0;
      t0 = html.Element.div();
      t0[$innerHtml] = "Save items from cart: ";
      t0[$children][$add]((t1 = html.ButtonElement.new(), t1[$innerHtml] = "Download cart", t1[$onClick].listen(dart.fn(event => {
        let t2;
        let fileContent = this[_eventHandler$0].textFileSaved();
        t2 = html.AnchorElement.new({href: "data:text/plain;charset=utf-8, " + dart.str(fileContent)});
        t2[$setAttribute]("download", "cart.json");
        t2.click();
        t2;
      }, MouseEventToNull())), t1));
      return t0;
    }
    getNavigationMenuDisplayName() {
      return this.getName();
    }
    getRelativeUrl() {
      return "#save";
    }
    getName() {
      return "Save";
    }
  };
  (SaveView.SaveView.new = function(_eventHandler) {
    this[_eventHandler$0] = _eventHandler;
    ;
  }).prototype = SaveView.SaveView.prototype;
  dart.addTypeTests(SaveView.SaveView);
  SaveView.SaveView[dart.implements] = () => [Navigatable.Navigatable];
  dart.setMethodSignature(SaveView.SaveView, () => ({
    __proto__: dart.getMethods(SaveView.SaveView.__proto__),
    getMainElement: dart.fnType(html.Element, []),
    getNavigationMenuDisplayName: dart.fnType(core.String, []),
    getRelativeUrl: dart.fnType(core.String, []),
    getName: dart.fnType(core.String, [])
  }));
  dart.setLibraryUri(SaveView.SaveView, "org-dartlang-app:///web/view/SaveView.dart");
  dart.setFieldSignature(SaveView.SaveView, () => ({
    __proto__: dart.getFields(SaveView.SaveView.__proto__),
    [_eventHandler$0]: dart.finalFieldType(EventHandler.EventHandler)
  }));
  const _userInput = dart.privateName(LoginView, "_userInput");
  const _passwordInput = dart.privateName(LoginView, "_passwordInput");
  const _eventHandler = dart.privateName(LoginView, "_eventHandler");
  const Object_BhaBuilderView$36$ = class Object_BhaBuilderView extends core.Object {};
  (Object_BhaBuilderView$36$.new = function() {
  }).prototype = Object_BhaBuilderView$36$.prototype;
  dart.applyMixin(Object_BhaBuilderView$36$, BhaBuilderView.BhaBuilderView);
  LoginView.LoginView = class LoginView extends Object_BhaBuilderView$36$ {
    getMainElement() {
      let t2, t1, t0;
      t0 = html.Element.div();
      t0[$children][$add]((t1 = html.Element.header(), t1[$children][$add](this[_userInput]), t1[$children][$add](this[_passwordInput]), t1[$children][$add]((t2 = html.ButtonElement.new(), t2[$setInnerHtml]("Log in"), t2[$onClick].listen(dart.fn(event => {
        this[_eventHandler].loginAttempt(this[_userInput].value, this[_passwordInput].value);
      }, MouseEventToNull())), t2)), t1));
      return t0;
    }
    getName() {
      return "LoginView";
    }
  };
  (LoginView.LoginView.new = function(eventHandler) {
    let t0, t0$;
    this[_userInput] = html.InputElement.new({type: "text"});
    this[_passwordInput] = html.InputElement.new({type: "password"});
    this[_eventHandler] = eventHandler;
    t0 = this[_userInput];
    t0.placeholder = "Username";
    t0;
    t0$ = this[_passwordInput];
    t0$.placeholder = "Password";
    t0$;
  }).prototype = LoginView.LoginView.prototype;
  dart.addTypeTests(LoginView.LoginView);
  dart.setMethodSignature(LoginView.LoginView, () => ({
    __proto__: dart.getMethods(LoginView.LoginView.__proto__),
    getMainElement: dart.fnType(html.Element, []),
    getName: dart.fnType(core.String, [])
  }));
  dart.setLibraryUri(LoginView.LoginView, "org-dartlang-app:///web/view/LoginView.dart");
  dart.setFieldSignature(LoginView.LoginView, () => ({
    __proto__: dart.getFields(LoginView.LoginView.__proto__),
    [_userInput]: dart.finalFieldType(html.InputElement),
    [_passwordInput]: dart.finalFieldType(html.InputElement),
    [_eventHandler]: dart.finalFieldType(EventHandler.EventHandler)
  }));
  HomeView.HomeView = class HomeView extends core.Object {
    getMainElement() {
      let t0;
      t0 = html.Element.div();
      t0[$innerHtml] = "<h2>Welcome to the BHA Builder!</h2>";
      return t0;
    }
    getNavigationMenuDisplayName() {
      return this.getName();
    }
    getRelativeUrl() {
      return "#";
    }
    getName() {
      return "Home";
    }
  };
  (HomeView.HomeView.new = function() {
    ;
  }).prototype = HomeView.HomeView.prototype;
  dart.addTypeTests(HomeView.HomeView);
  HomeView.HomeView[dart.implements] = () => [Navigatable.Navigatable];
  dart.setMethodSignature(HomeView.HomeView, () => ({
    __proto__: dart.getMethods(HomeView.HomeView.__proto__),
    getMainElement: dart.fnType(html.Element, []),
    getNavigationMenuDisplayName: dart.fnType(core.String, []),
    getRelativeUrl: dart.fnType(core.String, []),
    getName: dart.fnType(core.String, [])
  }));
  dart.setLibraryUri(HomeView.HomeView, "org-dartlang-app:///web/view/HomeView.dart");
  const _mainElement = dart.privateName(CartView, "_mainElement");
  const _cart = dart.privateName(CartView, "_cart");
  CartView.CartView = class CartView extends core.Object {
    get cart() {
      return this[_cart];
    }
    addElement(element) {
      this[_cart][$add](element);
    }
    getMainElement() {
      this[_mainElement][$children][$clear]();
      this[_cart][$forEach](dart.fn(item => {
        let t1, t0;
        return this[_mainElement][$children][$add]((t0 = html.Element.div(), t1 = t0, t1[$innerHtml] = dart.notNull(t1[$innerHtml]) + dart.notNull(item.toHtml()), t0));
      }, TubularSegmentTovoid()));
      return this[_mainElement];
    }
    getNavigationMenuDisplayName() {
      return this.getName();
    }
    getRelativeUrl() {
      return "#cart";
    }
    getName() {
      return "Cart";
    }
  };
  (CartView.CartView.new = function() {
    this[_mainElement] = null;
    this[_cart] = JSArrayOfTubularSegment().of([]);
    this[_mainElement] = html.Element.div();
  }).prototype = CartView.CartView.prototype;
  dart.addTypeTests(CartView.CartView);
  CartView.CartView[dart.implements] = () => [Navigatable.Navigatable];
  dart.setMethodSignature(CartView.CartView, () => ({
    __proto__: dart.getMethods(CartView.CartView.__proto__),
    addElement: dart.fnType(dart.void, [TubularSegment.TubularSegment]),
    getMainElement: dart.fnType(html.Element, []),
    getNavigationMenuDisplayName: dart.fnType(core.String, []),
    getRelativeUrl: dart.fnType(core.String, []),
    getName: dart.fnType(core.String, [])
  }));
  dart.setGetterSignature(CartView.CartView, () => ({
    __proto__: dart.getGetters(CartView.CartView.__proto__),
    cart: core.List$(TubularSegment.TubularSegment)
  }));
  dart.setLibraryUri(CartView.CartView, "org-dartlang-app:///web/view/CartView.dart");
  dart.setFieldSignature(CartView.CartView, () => ({
    __proto__: dart.getFields(CartView.CartView.__proto__),
    [_mainElement]: dart.fieldType(html.Element),
    [_cart]: dart.finalFieldType(core.List$(TubularSegment.TubularSegment))
  }));
  ToolsMiddleware.ToolsMiddleware = class ToolsMiddleware$ extends core.Object {
    static toolsMiddlerware(store, action, nextDispatcher) {
      if (Action.LoginAction.is(action)) {
        ToolsMiddleware.ToolsMiddleware._toolsFacade.login(action.user, action.password).then(dart.dynamic, dart.fn(loginResponse => store.dispatch(new Action.LoginResponseAction.new(action.user, loginResponse)), ToolsLoginResponseTodynamic()));
      }
      if (Action.FetchGlobalContainersAction.is(action)) {
        let deviceId = core.String._check(dart.dload(store.state, 'deviceId'));
        let accessToken = core.String._check(dart.dload(store.state, 'accessToken'));
        ToolsMiddleware.ToolsMiddleware._toolsFacade.getGlobalContainers(accessToken, "admin", deviceId).then(core.Null, dart.fn(value => null, ToolsGlobalContainersResponseToNull()));
      }
      nextDispatcher(action);
    }
  };
  (ToolsMiddleware.ToolsMiddleware.new = function() {
    ;
  }).prototype = ToolsMiddleware.ToolsMiddleware.prototype;
  dart.addTypeTests(ToolsMiddleware.ToolsMiddleware);
  dart.setLibraryUri(ToolsMiddleware.ToolsMiddleware, "org-dartlang-app:///web/redux/ToolsMiddleware.dart");
  dart.defineLazy(ToolsMiddleware.ToolsMiddleware, {
    /*ToolsMiddleware.ToolsMiddleware._toolsFacade*/get _toolsFacade() {
      return new ToolsFacade.ToolsFacade.new();
    }
  });
  const _mainElement$ = dart.privateName(NavigationBar, "_mainElement");
  const _navigatableItems = dart.privateName(NavigationBar, "_navigatableItems");
  const _eventHandler$1 = dart.privateName(NavigationBar, "_eventHandler");
  NavigationBar.NavigationBar = class NavigationBar extends core.Object {
    get mainElement() {
      return this[_mainElement$];
    }
    addElement(navigatableElement) {
      let t0;
      this[_navigatableItems][$add](navigatableElement);
      this[_mainElement$][$children][$add]((t0 = html.Element.tag("a"), t0[$setAttribute]("href", navigatableElement.getRelativeUrl()), t0[$innerHtml] = navigatableElement.getNavigationMenuDisplayName(), t0[$onClick].listen(dart.fn(event => {
        this[_eventHandler$1].viewChanged(navigatableElement.getName());
      }, MouseEventToNull())), t0));
    }
  };
  (NavigationBar.NavigationBar.new = function(_eventHandler) {
    let t0;
    this[_mainElement$] = null;
    this[_navigatableItems] = [];
    this[_eventHandler$1] = _eventHandler;
    this[_mainElement$] = (t0 = html.Element.div(), t0[$setAttribute]("class", "navigation_bar"), t0);
  }).prototype = NavigationBar.NavigationBar.prototype;
  dart.addTypeTests(NavigationBar.NavigationBar);
  dart.setMethodSignature(NavigationBar.NavigationBar, () => ({
    __proto__: dart.getMethods(NavigationBar.NavigationBar.__proto__),
    addElement: dart.fnType(dart.void, [Navigatable.Navigatable])
  }));
  dart.setGetterSignature(NavigationBar.NavigationBar, () => ({
    __proto__: dart.getGetters(NavigationBar.NavigationBar.__proto__),
    mainElement: html.Element
  }));
  dart.setLibraryUri(NavigationBar.NavigationBar, "org-dartlang-app:///web/navigation/NavigationBar.dart");
  dart.setFieldSignature(NavigationBar.NavigationBar, () => ({
    __proto__: dart.getFields(NavigationBar.NavigationBar.__proto__),
    [_mainElement$]: dart.fieldType(html.Element),
    [_navigatableItems]: dart.finalFieldType(core.List),
    [_eventHandler$1]: dart.finalFieldType(EventHandler.EventHandler)
  }));
  dart.trackLibraries("web/controller/AppController", {
    "org-dartlang-app:///web/integration/tools/ToolsFacade.dart": ToolsFacade,
    "org-dartlang-app:///web/integration/tools/ToolsLoginResponse.dart": ToolsLoginResponse,
    "org-dartlang-app:///web/integration/tools/ToolsGlobalContainersResponse.dart": ToolsGlobalContainersResponse,
    "org-dartlang-app:///web/controller/EventHandler.dart": EventHandler,
    "org-dartlang-app:///web/domain/TubularSegment.dart": TubularSegment,
    "org-dartlang-app:///web/redux/Action.dart": Action,
    "org-dartlang-app:///web/view/BhaBuilderView.dart": BhaBuilderView,
    "org-dartlang-app:///web/redux/ToolsReducer.dart": ToolsReducer,
    "org-dartlang-app:///web/redux/AppState.dart": AppState,
    "org-dartlang-app:///web/main.dart": main,
    "org-dartlang-app:///web/controller/AppController.dart": AppController,
    "org-dartlang-app:///web/view/ShopView.dart": ShopView,
    "org-dartlang-app:///web/navigation/Navigatable.dart": Navigatable,
    "org-dartlang-app:///web/view/SaveView.dart": SaveView,
    "org-dartlang-app:///web/view/LoginView.dart": LoginView,
    "org-dartlang-app:///web/view/HomeView.dart": HomeView,
    "org-dartlang-app:///web/view/CartView.dart": CartView,
    "org-dartlang-app:///web/redux/ToolsMiddleware.dart": ToolsMiddleware,
    "org-dartlang-app:///web/navigation/NavigationBar.dart": NavigationBar
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["../integration/tools/ToolsFacade.dart","../integration/tools/ToolsLoginResponse.dart","../integration/tools/ToolsGlobalContainersResponse.dart","EventHandler.dart","../domain/TubularSegment.dart","../redux/Action.dart","../redux/ToolsReducer.dart","../redux/AppState.dart","../main.dart","AppController.dart","../view/ShopView.dart","../navigation/Navigatable.dart","../view/SaveView.dart","../view/LoginView.dart","../view/HomeView.dart","../view/CartView.dart","../redux/ToolsMiddleware.dart","../navigation/NavigationBar.dart"],"names":[],"mappings":"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","file":"AppController.ddc.js"}');
  // Exports:
  return {
    web__integration__tools__ToolsFacade: ToolsFacade,
    web__integration__tools__ToolsLoginResponse: ToolsLoginResponse,
    web__integration__tools__ToolsGlobalContainersResponse: ToolsGlobalContainersResponse,
    web__controller__EventHandler: EventHandler,
    web__domain__TubularSegment: TubularSegment,
    web__redux__Action: Action,
    web__view__BhaBuilderView: BhaBuilderView,
    web__redux__ToolsReducer: ToolsReducer,
    web__redux__AppState: AppState,
    web__main: main,
    web__controller__AppController: AppController,
    web__view__ShopView: ShopView,
    web__navigation__Navigatable: Navigatable,
    web__view__SaveView: SaveView,
    web__view__LoginView: LoginView,
    web__view__HomeView: HomeView,
    web__view__CartView: CartView,
    web__redux__ToolsMiddleware: ToolsMiddleware,
    web__navigation__NavigationBar: NavigationBar
  };
});

//# sourceMappingURL=AppController.ddc.js.map
