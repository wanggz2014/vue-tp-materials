/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"Login": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("430b");


/***/ }),

/***/ "430b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"122bcb28-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Login/Login.vue?vue&type=template&id=1474c4db&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"login"},[_c('div',{staticClass:"login-con"},[_c('Card',{attrs:{"icon":"log-in","title":"欢迎登录","bordered":false}},[_c('div',{staticClass:"form-con"},[_c('LoginForm',{on:{"on-success-valid":_vm.handleSubmit}}),_c('p',{staticClass:"login-tip"},[_vm._v(_vm._s(_vm.message))])],1)])],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/Login/Login.vue?vue&type=template&id=1474c4db&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"122bcb28-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Login/components/LoginForm/LoginForm.vue?vue&type=template&id=e4081a74&
var LoginFormvue_type_template_id_e4081a74_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Form',{ref:"loginForm",attrs:{"model":_vm.form,"rules":_vm.rules},nativeOn:{"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.handleSubmit($event)}}},[_c('FormItem',{attrs:{"prop":"userName"}},[_c('Input',{attrs:{"placeholder":"请输入用户名"},model:{value:(_vm.form.userName),callback:function ($$v) {_vm.$set(_vm.form, "userName", $$v)},expression:"form.userName"}},[_c('span',{attrs:{"slot":"prepend"},slot:"prepend"},[_c('Icon',{attrs:{"size":16,"type":"ios-person"}})],1)])],1),_c('FormItem',{attrs:{"prop":"password"}},[_c('Input',{attrs:{"type":"password","placeholder":"请输入密码"},model:{value:(_vm.form.password),callback:function ($$v) {_vm.$set(_vm.form, "password", $$v)},expression:"form.password"}},[_c('span',{attrs:{"slot":"prepend"},slot:"prepend"},[_c('Icon',{attrs:{"size":14,"type":"md-lock"}})],1)])],1),_c('FormItem',[_c('Button',{attrs:{"type":"primary","long":""},on:{"click":_vm.handleSubmit}},[_vm._v("登录")])],1)],1)}
var LoginFormvue_type_template_id_e4081a74_staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/Login/components/LoginForm/LoginForm.vue?vue&type=template&id=e4081a74&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Login/components/LoginForm/LoginForm.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var LoginFormvue_type_script_lang_js_ = ({
  name: 'LoginForm',
  props: {
    userNameRules: {
      type: Array,
      default: function _default() {
        return [{
          required: true,
          message: '账号不能为空',
          trigger: 'blur'
        }];
      }
    },
    passwordRules: {
      type: Array,
      default: function _default() {
        return [{
          required: true,
          message: '密码不能为空',
          trigger: 'blur'
        }];
      }
    }
  },
  data: function data() {
    return {
      form: {
        userName: 'admin',
        password: ''
      }
    };
  },
  computed: {
    rules: function rules() {
      return {
        userName: this.userNameRules,
        password: this.passwordRules
      };
    }
  },
  methods: {
    handleSubmit: function handleSubmit() {
      var _this = this;

      this.$refs.loginForm.validate(function (valid) {
        if (valid) {
          _this.$emit('on-success-valid', {
            userName: _this.form.userName,
            password: _this.form.password
          });
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./src/pages/Login/components/LoginForm/LoginForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var LoginForm_LoginFormvue_type_script_lang_js_ = (LoginFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/pages/Login/components/LoginForm/LoginForm.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  LoginForm_LoginFormvue_type_script_lang_js_,
  LoginFormvue_type_template_id_e4081a74_render,
  LoginFormvue_type_template_id_e4081a74_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var LoginForm = (component.exports);
// CONCATENATED MODULE: ./src/pages/Login/components/LoginForm/index.js

/* harmony default export */ var components_LoginForm = (LoginForm);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Login/Login.vue?vue&type=script&lang=js&
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Loginvue_type_script_lang_js_ = ({
  components: {
    LoginForm: components_LoginForm
  },
  data: function data() {
    return {
      message: "请输入用户名与密码"
    };
  },
  methods: _objectSpread({}, Object(vuex_esm["b" /* mapActions */])(['handleLogin', 'getUserInfo']), {
    handleSubmit: function handleSubmit(_ref) {
      var _this = this;

      var userName = _ref.userName,
          password = _ref.password;
      this.handleLogin({
        userName: userName,
        password: password
      }).then(function (res) {
        _this.getUserInfo().then(function (res) {
          window.location.href = _this.$config.homeUrl();
        });
      }).catch(function (res) {
        console.log(res);
        _this.message = "用户名或密码有误!!";
      });
    }
  })
});
// CONCATENATED MODULE: ./src/pages/Login/Login.vue?vue&type=script&lang=js&
 /* harmony default export */ var Login_Loginvue_type_script_lang_js_ = (Loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/pages/Login/Login.vue?vue&type=style&index=0&lang=less&
var Loginvue_type_style_index_0_lang_less_ = __webpack_require__("cd9f");

// CONCATENATED MODULE: ./src/pages/Login/Login.vue






/* normalize component */

var Login_component = Object(componentNormalizer["a" /* default */])(
  Login_Loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Login = (Login_component.exports);
// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm.js
var vue_esm = __webpack_require__("a026");

// EXTERNAL MODULE: ./node_modules/iview/dist/iview.js
var iview = __webpack_require__("e069");
var iview_default = /*#__PURE__*/__webpack_require__.n(iview);

// EXTERNAL MODULE: ./src/router/index.js
var router = __webpack_require__("a18c");

// EXTERNAL MODULE: ./src/store/index.js + 4 modules
var store = __webpack_require__("4360");

// EXTERNAL MODULE: ./src/config/index.js
var config = __webpack_require__("f121");

// EXTERNAL MODULE: ./node_modules/iview/dist/styles/iview.css
var styles_iview = __webpack_require__("dcad");

// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__("8c4f");

// CONCATENATED MODULE: ./src/pages/Login/index.js








var Login_router = new vue_router_esm["a" /* default */]({
  routes: [// 动态路径参数 以冒号开头
  {
    path: '/:local?',
    component: Login
  }]
});
Login_router.beforeEach(router["b" /* beforeEach */]);
Login_router.afterEach(router["a" /* afterEach */]);
vue_esm["default"].use(vue_router_esm["a" /* default */]);
vue_esm["default"].use(iview_default.a, {
  transfer: true
});
vue_esm["default"].prototype.$config = config["a" /* default */];
new vue_esm["default"]({
  router: Login_router,
  store: store["a" /* default */]
}).$mount('#app');

/***/ }),

/***/ "4360":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm.js
var vue_esm = __webpack_require__("a026");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// EXTERNAL MODULE: ./node_modules/vuex-persistedstate/dist/vuex-persistedstate.es.js + 2 modules
var vuex_persistedstate_es = __webpack_require__("0e44");

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__("bc3a");
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// CONCATENATED MODULE: ./src/libs/axios.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var axios_HttpRequest =
/*#__PURE__*/
function () {
  function HttpRequest() {
    var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : baseURL;

    _classCallCheck(this, HttpRequest);

    this.baseUrl = baseUrl;
    this.queue = {};
  }

  _createClass(HttpRequest, [{
    key: "getInsideConfig",
    value: function getInsideConfig() {
      var config = {
        baseURL: this.baseUrl,
        headers: {
          //
          "Content-Type": "application/x-www-form-urlencoded"
        }
      };
      return config;
    }
  }, {
    key: "destroy",
    value: function destroy(url) {
      delete this.queue[url];

      if (!Object.keys(this.queue).length) {// Spin.hide()
      }
    }
  }, {
    key: "interceptors",
    value: function interceptors(instance, url) {
      var _this = this;

      // 请求拦截
      instance.interceptors.request.use(function (config) {
        // 添加全局的loading...
        if (!Object.keys(_this.queue).length) {// Spin.show() // 不建议开启，因为界面不友好
        }

        _this.queue[url] = true;
        return config;
      }, function (error) {
        return Promise.reject(error);
      }); // 响应拦截

      instance.interceptors.response.use(function (res) {
        _this.destroy(url);

        var data = res.data,
            status = res.status;
        return {
          data: data,
          status: status
        };
      }, function (error) {
        _this.destroy(url);

        return Promise.reject(error);
      });
    }
  }, {
    key: "request",
    value: function request(options) {
      var instance = axios_default.a.create();
      options = Object.assign(this.getInsideConfig(), options);
      this.interceptors(instance, options.url);
      return instance(options);
    }
  }]);

  return HttpRequest;
}();

/* harmony default export */ var libs_axios = (axios_HttpRequest);
// EXTERNAL MODULE: ./src/config/index.js
var config = __webpack_require__("f121");

// CONCATENATED MODULE: ./src/libs/api.request.js


var api_request_axios = new libs_axios(config["a" /* default */].baseUrl());
/* harmony default export */ var api_request = (api_request_axios);
// EXTERNAL MODULE: ./node_modules/qs/lib/index.js
var lib = __webpack_require__("4328");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./src/api/user.js


var user_login = function login(_ref) {
  var userName = _ref.userName,
      password = _ref.password;
  var data = {
    userName: userName,
    password: password
  };
  return api_request.request({
    url: 'login',
    data: lib_default.a.stringify(data),
    method: 'post'
  });
};
var user_getUserInfo = function getUserInfo(token) {
  return api_request.request({
    url: 'userInfo',
    data: lib_default.a.stringify({
      token: token
    }),
    method: 'post'
  });
};
var user_logout = function logout(token) {
  return api_request.request({
    url: 'logout',
    data: lib_default.a.stringify({
      token: token
    }),
    method: 'post'
  });
};
// EXTERNAL MODULE: ./src/libs/util.js
var util = __webpack_require__("c276");

// CONCATENATED MODULE: ./src/store/module/user.js



var local = config["a" /* default */].local();
/* harmony default export */ var user = ({
  state: {
    userName: '',
    userId: '',
    token: Object(util["a" /* getToken */])(),
    access: '',
    hasGetInfo: false
  },
  mutations: {
    setUserId: function setUserId(state, id) {
      state.userId = id;
    },
    setUserName: function setUserName(state, name) {
      state.userName = name;
    },
    setToken: function setToken(state, token) {
      state.token = token;

      Object(util["b" /* setToken */])(token);
    },
    setHasGetInfo: function setHasGetInfo(state, status) {
      state.hasGetInfo = status;
    }
  },
  getters: {},
  actions: {
    // 登录
    handleLogin: function handleLogin(_ref, _ref2) {
      var commit = _ref.commit;
      var userName = _ref2.userName,
          password = _ref2.password,
          url = _ref2.url;
      userName = userName.trim();
      return new Promise(function (resolve, reject) {
        //本地测试,不同后端交互
        if (local) {
          if (userName == 'admin' && password == 'admin') {
            commit('setToken', 'admin_token');
            resolve({
              status: 200,
              data: {
                success: true
              }
            });
          } else {
            reject();
          }
        } //后端验证


        user_login({
          userName: userName,
          password: password
        }).then(function (res) {
          var data = res.data;

          if (res.status == 200 && data.success) {
            console.log('token:' + data.details);
            commit('setToken', data.details);
            resolve();
          } else {
            reject("not success from service");
          }
        }).catch(function (err) {
          reject(err);
        });
      });
    },
    // 退出登录
    handleLogOut: function handleLogOut(_ref3) {
      var state = _ref3.state,
          commit = _ref3.commit;
      return new Promise(function (resolve, reject) {
        if (local) {
          commit('setToken', '');
          resolve();
          return;
        }

        user_logout(state.token).then(function (res) {
          var data = res.data;

          if (res.status == 200 && data.success) {
            commit('setToken', '');
            resolve();
          } else {
            reject("not success from service");
          }
        }).catch(function (err) {
          reject(err);
        });
      });
    },
    // 获取用户相关信息
    getUserInfo: function getUserInfo(_ref4) {
      var state = _ref4.state,
          commit = _ref4.commit;
      return new Promise(function (resolve, reject) {
        if (local) {
          var data = {
            userName: 'admin',
            userId: '1'
          };
          commit('setUserName', data.userName);
          commit('setUserId', data.userId);
          commit('setHasGetInfo', true);
          resolve(data);
          return;
        }

        try {
          user_getUserInfo(state.token).then(function (res) {
            if (res.status != 200 || !res.data.success) {
              reject(res);
              return;
            }

            var data = res.data;
            commit('setUserName', data.userName);
            commit('setUserId', data.userId);
            commit('setHasGetInfo', true);
            resolve(data);
          }).catch(function (err) {
            reject(err);
          });
        } catch (error) {
          reject(error);
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./src/store/index.js




vue_esm["default"].use(vuex_esm["a" /* default */]);
/* harmony default export */ var store = __webpack_exports__["a"] = (new vuex_esm["a" /* default */].Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    User: user
  },
  plugins: [Object(vuex_persistedstate_es["a" /* default */])()]
}));

/***/ }),

/***/ "85ac":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a18c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return beforeEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return afterEach; });
/* harmony import */ var iview__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e069");
/* harmony import */ var iview__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(iview__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("c276");


var pageName = window.location.pathname.substring(1);
var LOGIN_PAGE_NAME = 'login.html';
var beforeEach = function beforeEach(to, from, next) {
  iview__WEBPACK_IMPORTED_MODULE_0___default.a.LoadingBar.start();
  var token = Object(_libs_util__WEBPACK_IMPORTED_MODULE_1__[/* getToken */ "a"])();

  if (!token && pageName !== LOGIN_PAGE_NAME) {
    // 未登录且要跳转的页面不是登录页
    // 跳转到登录页
    window.location.href = '/' + LOGIN_PAGE_NAME;
    next(false);
  } else {
    next();
  }
};
var afterEach = function afterEach(to) {
  iview__WEBPACK_IMPORTED_MODULE_0___default.a.LoadingBar.finish();
  window.scrollTo(0, 0);
};

/***/ }),

/***/ "c276":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TOKEN_KEY */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getToken; });
/* unused harmony export getParams */
/* unused harmony export scrollTop */
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a78e");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("f121");


var title = _config__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].title,
    cookieExpires = _config__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].cookieExpires;
var TOKEN_KEY = 'token';
var setToken = function setToken(token) {
  js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set(TOKEN_KEY, token, {
    expires: cookieExpires || 1
  });
};
var getToken = function getToken() {
  var token = js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get(TOKEN_KEY);
  if (token) return token;else return false;
};
/**
 * @param {String} url
 * @description 从URL中解析参数
 */

var getParams = function getParams(url) {
  var keyValueArr = url.split('?')[1].split('&');
  var paramObj = {};
  keyValueArr.forEach(function (item) {
    var keyValue = item.split('=');
    paramObj[keyValue[0]] = keyValue[1];
  });
  return paramObj;
}; // scrollTop animation

var scrollTop = function scrollTop(el) {
  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var to = arguments.length > 2 ? arguments[2] : undefined;
  var duration = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 500;
  var endCallback = arguments.length > 4 ? arguments[4] : undefined;

  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
      return window.setTimeout(callback, 1000 / 60);
    };
  }

  var difference = Math.abs(from - to);
  var step = Math.ceil(difference / duration * 50);

  var scroll = function scroll(start, end, step) {
    if (start === end) {
      endCallback && endCallback();
      return;
    }

    var d = start + step > end ? end : start + step;

    if (start > end) {
      d = start - step < end ? end : start - step;
    }

    if (el === window) {
      window.scrollTo(d, d);
    } else {
      el.scrollTop = d;
    }

    window.requestAnimationFrame(function () {
      return scroll(d, end, step);
    });
  };

  scroll(from, to, step);
};

/***/ }),

/***/ "cd9f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("85ac");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f121":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * @description 配置显示在浏览器标签的title
   */
  title: 'VPC管理中心',

  /**
   * @description token在Cookie中存储的天数，默认1天
   */
  cookieExpires: 1,

  /**
   * @description 默认打开的首页的路由name值，默认为home
   */
  homeUrl: function homeUrl() {
    var base = this.env == 'dev' ? 'http://localhost:8080' : 'http://localhost:8080';
    return base + '/tenantmanager.html';
  },

  /**
  * @description api请求基础路径
  */
  baseUrl: function baseUrl() {
    return this.env == 'dev' ? 'http://localhost:8088/rest/' : 'https://produce.com';
  },
  local: function local() {
    return this.env == 'local';
  },
  env: 'dev'
});

/***/ })

/******/ });