define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const store = Object.create(dart.library);
  const redux = Object.create(dart.library);
  const utils = Object.create(dart.library);
  const $add = dartx.add;
  const $reversed = dartx.reversed;
  const $last = dartx.last;
  const $toList = dartx.toList;
  const $_get = dartx._get;
  let StoreOfObject = () => (StoreOfObject = dart.constFn(store.Store$(core.Object)))();
  let dynamicTodynamic = () => (dynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic])))();
  let StoreOfObjectAnddynamicAndFnTodynamic = () => (StoreOfObjectAnddynamicAndFnTodynamic = dart.constFn(dart.fnType(dart.dynamic, [StoreOfObject(), dart.dynamic, dynamicTodynamic()])))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let JSArrayOfdynamicTodynamic = () => (JSArrayOfdynamicTodynamic = dart.constFn(_interceptors.JSArray$(dynamicTodynamic())))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constList([], StoreOfObjectAnddynamicAndFnTodynamic());
    }
  });
  const _is_ReducerClass_default = Symbol('_is_ReducerClass_default');
  store.ReducerClass$ = dart.generic(State => {
    class ReducerClass extends core.Object {}
    (ReducerClass.new = function() {
      ;
    }).prototype = ReducerClass.prototype;
    dart.addTypeTests(ReducerClass);
    ReducerClass.prototype[_is_ReducerClass_default] = true;
    dart.setLibraryUri(ReducerClass, "package:redux/src/store.dart");
    return ReducerClass;
  });
  store.ReducerClass = store.ReducerClass$();
  dart.addTypeTests(store.ReducerClass, _is_ReducerClass_default);
  const _is_MiddlewareClass_default = Symbol('_is_MiddlewareClass_default');
  store.MiddlewareClass$ = dart.generic(State => {
    class MiddlewareClass extends core.Object {}
    (MiddlewareClass.new = function() {
      ;
    }).prototype = MiddlewareClass.prototype;
    dart.addTypeTests(MiddlewareClass);
    MiddlewareClass.prototype[_is_MiddlewareClass_default] = true;
    dart.setLibraryUri(MiddlewareClass, "package:redux/src/store.dart");
    return MiddlewareClass;
  });
  store.MiddlewareClass = store.MiddlewareClass$();
  dart.addTypeTests(store.MiddlewareClass, _is_MiddlewareClass_default);
  let C0;
  const _state = dart.privateName(store, "_state");
  const _dispatchers = dart.privateName(store, "_dispatchers");
  const _changeController = dart.privateName(store, "_changeController");
  const _createReduceAndNotify = dart.privateName(store, "_createReduceAndNotify");
  const _createDispatchers = dart.privateName(store, "_createDispatchers");
  const _is_Store_default = Symbol('_is_Store_default');
  const reducer$ = dart.privateName(store, "Store.reducer");
  store.Store$ = dart.generic(State => {
    let StreamControllerOfState = () => (StreamControllerOfState = dart.constFn(async.StreamController$(State)))();
    let StateAnddynamicToState = () => (StateAnddynamicToState = dart.constFn(dart.fnType(State, [State, dart.dynamic])))();
    class Store extends core.Object {
      get reducer() {
        return this[reducer$];
      }
      set reducer(value) {
        this[reducer$] = StateAnddynamicToState()._check(value);
      }
      get state() {
        return this[_state];
      }
      get onChange() {
        return this[_changeController].stream;
      }
      [_createReduceAndNotify](distinct) {
        return dart.fn(action => {
          let state = this.reducer(this[_state], action);
          if (dart.test(distinct) && dart.equals(state, this[_state])) return;
          this[_state] = state;
          this[_changeController].add(state);
        }, dynamicToNull());
      }
      [_createDispatchers](middleware, reduceAndNotify) {
        let t0;
        let dispatchers = (t0 = JSArrayOfdynamicTodynamic().of([]), t0[$add](reduceAndNotify), t0);
        for (let nextMiddleware of middleware[$reversed]) {
          let next = dispatchers[$last];
          dispatchers[$add](dart.fn(action => nextMiddleware(this, action, next), dynamicTodynamic()));
        }
        return dispatchers[$reversed][$toList]();
      }
      dispatch(action) {
        return this[_dispatchers][$_get](0)(action);
      }
      teardown() {
        return async.async(dart.dynamic, (function* teardown() {
          this[_state] = null;
          return this[_changeController].close();
        }).bind(this));
      }
    }
    (Store.new = function(reducer, opts) {
      let initialState = opts && 'initialState' in opts ? opts.initialState : null;
      let middleware = opts && 'middleware' in opts ? opts.middleware : C0 || CT.C0;
      let syncStream = opts && 'syncStream' in opts ? opts.syncStream : false;
      let distinct = opts && 'distinct' in opts ? opts.distinct : false;
      this[_state] = null;
      this[_dispatchers] = null;
      this[reducer$] = reducer;
      this[_changeController] = StreamControllerOfState().broadcast({sync: syncStream});
      this[_state] = initialState;
      this[_dispatchers] = this[_createDispatchers](middleware, this[_createReduceAndNotify](distinct));
    }).prototype = Store.prototype;
    dart.addTypeTests(Store);
    Store.prototype[_is_Store_default] = true;
    dart.setMethodSignature(Store, () => ({
      __proto__: dart.getMethods(Store.__proto__),
      [_createReduceAndNotify]: dart.fnType(dart.fnType(dart.dynamic, [dart.dynamic]), [core.bool]),
      [_createDispatchers]: dart.fnType(core.List$(dart.fnType(dart.dynamic, [dart.dynamic])), [core.List$(dart.fnType(dart.dynamic, [store.Store$(State), dart.dynamic, dart.fnType(dart.dynamic, [dart.dynamic])])), dart.fnType(dart.dynamic, [dart.dynamic])]),
      dispatch: dart.fnType(dart.dynamic, [dart.dynamic]),
      teardown: dart.fnType(async.Future, [])
    }));
    dart.setGetterSignature(Store, () => ({
      __proto__: dart.getGetters(Store.__proto__),
      state: State,
      onChange: async.Stream$(State)
    }));
    dart.setLibraryUri(Store, "package:redux/src/store.dart");
    dart.setFieldSignature(Store, () => ({
      __proto__: dart.getFields(Store.__proto__),
      reducer: dart.fieldType(dart.fnType(State, [State, dart.dynamic])),
      [_changeController]: dart.finalFieldType(async.StreamController$(State)),
      [_state]: dart.fieldType(State),
      [_dispatchers]: dart.fieldType(core.List$(dart.fnType(dart.dynamic, [dart.dynamic])))
    }));
    return Store;
  });
  store.Store = store.Store$();
  dart.addTypeTests(store.Store, _is_Store_default);
  const _is_TypedReducer_default = Symbol('_is_TypedReducer_default');
  const reducer$0 = dart.privateName(utils, "TypedReducer.reducer");
  utils.TypedReducer$ = dart.generic((State, Action) => {
    class TypedReducer extends core.Object {
      get reducer() {
        return this[reducer$0];
      }
      set reducer(value) {
        super.reducer = value;
      }
      call(state, action) {
        State._check(state);
        if (Action.is(action)) {
          return this.reducer(state, action);
        }
        return state;
      }
    }
    (TypedReducer.new = function(reducer) {
      this[reducer$0] = reducer;
      ;
    }).prototype = TypedReducer.prototype;
    dart.addTypeTests(TypedReducer);
    TypedReducer.prototype[_is_TypedReducer_default] = true;
    TypedReducer[dart.implements] = () => [store.ReducerClass$(State)];
    dart.setMethodSignature(TypedReducer, () => ({
      __proto__: dart.getMethods(TypedReducer.__proto__),
      call: dart.fnType(State, [core.Object, dart.dynamic])
    }));
    dart.setLibraryUri(TypedReducer, "package:redux/src/utils.dart");
    dart.setFieldSignature(TypedReducer, () => ({
      __proto__: dart.getFields(TypedReducer.__proto__),
      reducer: dart.finalFieldType(dart.fnType(State, [State, Action]))
    }));
    return TypedReducer;
  });
  utils.TypedReducer = utils.TypedReducer$();
  dart.addTypeTests(utils.TypedReducer, _is_TypedReducer_default);
  const _is_TypedMiddleware_default = Symbol('_is_TypedMiddleware_default');
  const middleware$ = dart.privateName(utils, "TypedMiddleware.middleware");
  utils.TypedMiddleware$ = dart.generic((State, Action) => {
    let StoreOfState = () => (StoreOfState = dart.constFn(store.Store$(State)))();
    class TypedMiddleware extends core.Object {
      get middleware() {
        return this[middleware$];
      }
      set middleware(value) {
        super.middleware = value;
      }
      call(store, action, next) {
        StoreOfState()._check(store);
        if (Action.is(action)) {
          return this.middleware(store, action, next);
        } else {
          return next(action);
        }
      }
    }
    (TypedMiddleware.new = function(middleware) {
      this[middleware$] = middleware;
      ;
    }).prototype = TypedMiddleware.prototype;
    dart.addTypeTests(TypedMiddleware);
    TypedMiddleware.prototype[_is_TypedMiddleware_default] = true;
    TypedMiddleware[dart.implements] = () => [store.MiddlewareClass$(State)];
    dart.setMethodSignature(TypedMiddleware, () => ({
      __proto__: dart.getMethods(TypedMiddleware.__proto__),
      call: dart.fnType(dart.dynamic, [core.Object, dart.dynamic, dart.fnType(dart.dynamic, [dart.dynamic])])
    }));
    dart.setLibraryUri(TypedMiddleware, "package:redux/src/utils.dart");
    dart.setFieldSignature(TypedMiddleware, () => ({
      __proto__: dart.getFields(TypedMiddleware.__proto__),
      middleware: dart.finalFieldType(dart.fnType(dart.void, [store.Store$(State), Action, dart.fnType(dart.dynamic, [dart.dynamic])]))
    }));
    return TypedMiddleware;
  });
  utils.TypedMiddleware = utils.TypedMiddleware$();
  dart.addTypeTests(utils.TypedMiddleware, _is_TypedMiddleware_default);
  utils.combineReducers = function combineReducers(State, reducers) {
    return dart.fn((state, action) => {
      for (let reducer of reducers) {
        state = reducer(state, action);
      }
      return state;
    }, dart.fnType(State, [State, dart.dynamic]));
  };
  dart.trackLibraries("packages/redux/redux", {
    "package:redux/src/store.dart": store,
    "package:redux/redux.dart": redux,
    "package:redux/src/utils.dart": utils
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/store.dart","src/utils.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAkDA;;;;;;;;;;;;;IAsDA;;;;;;;;;;;;;;;;;;;;MAsDiB;;;;;;;AA2CI;MAAM;;AAwBK,cAAA,AAAkB;MAAM;+BAOX;AACzC,cAAO,SAAS;AACR,sBAAQ,aAAQ,cAAQ,MAAM;AAEpC,wBAAI,QAAQ,KAAU,YAAN,KAAK,EAAI,eAAQ;AAEnB,UAAd,eAAS,KAAK;AACc,UAA5B,AAAkB,4BAAI,KAAK;;MAE/B;2BAG0B,YACT;;AAET,gCAA8B,oCAAI,SAAI,eAAe;AAG3D,iBAAS,iBAAkB,AAAW,WAAD;AAC7B,qBAAO,AAAY,WAAD;AAIvB,UAFD,AAAY,WAAD,OACT,QAAS,UAAW,AAAc,cAAA,CAAC,MAAM,MAAM,EAAE,IAAI;;AAIzD,cAAO,AAAY,AAAS,YAAV;MACpB;eAMyB;AACvB,cAAO,AAAY,AAAG,2BAAF,GAAG,MAAM;MAC/B;;AAMe;AACA,UAAb,eAAS;AACT,gBAAO,AAAkB;QAC3B;;;0BAhGO;UACC;UACkB;UACnB;UAQA;MA9BD;MACe;MAkBd;MAYgB,0BAAmB,2CAAgB,UAAU;AAC7C,MAArB,eAAS,YAAY;AAIpB,MAHD,qBAAe,yBACb,UAAU,EACV,6BAAuB,QAAQ;IAEnC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MCjGiD;;;;;;WAOhC,OAAe;qBAAf;AACf,YAAW,UAAP,MAAM;AACR,gBAAO,cAAQ,KAAK,EAAE,MAAM;;AAG9B,cAAO,MAAK;MACd;;;MATkB;;IAAQ;;;;;;;;;;;;;;;;;;;;;;MAkHxB;;;;;;WAOwB,OAAe,QAAuB;8BAAtC;AACxB,YAAW,UAAP,MAAM;AACR,gBAAO,iBAAW,KAAK,EAAE,MAAM,EAAE,IAAI;;AAErC,gBAAO,AAAI,KAAA,CAAC,MAAM;;MAEtB;;;MATqB;;IAAW;;;;;;;;;;;;;;;;;0DAgC6B;AAC7D,UAAO,UAAO,OAAe;AAC3B,eAAW,UAAW,SAAQ;AACE,QAA9B,QAAQ,AAAO,OAAA,CAAC,KAAK,EAAE,MAAM;;AAE/B,YAAO,MAAK;;EAEhB","file":"redux.ddc.js"}');
  // Exports:
  return {
    src__store: store,
    redux: redux,
    src__utils: utils
  };
});

//# sourceMappingURL=redux.ddc.js.map
