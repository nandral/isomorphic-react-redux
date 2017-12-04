/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SearchPage = __webpack_require__(13);

var _SearchPage2 = _interopRequireDefault(_SearchPage);

var _HomePage = __webpack_require__(14);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _DetailsPage = __webpack_require__(15);

var _DetailsPage2 = _interopRequireDefault(_DetailsPage);

var _NotFoundPage = __webpack_require__(16);

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

var _App = __webpack_require__(17);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_extends({}, _App2.default, {
  routes: [_extends({}, _HomePage2.default, {
    path: "/",
    exact: true
  }), _extends({}, _SearchPage2.default, {
    path: "/search"
  }), _extends({}, _DetailsPage2.default, {
    path: "/make/model/:id"
  }), _extends({}, _NotFoundPage2.default)]
})];

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(8);

var _express = __webpack_require__(9);

var _express2 = _interopRequireDefault(_express);

var _renderer = __webpack_require__(10);

var _renderer2 = _interopRequireDefault(_renderer);

var _createServerStore = __webpack_require__(19);

var _createServerStore2 = _interopRequireDefault(_createServerStore);

var _reactRouterConfig = __webpack_require__(3);

var _Routes = __webpack_require__(4);

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PORT = process.env.PORT || 3000;

var app = (0, _express2.default)();

app.use(_express2.default.static("public"));
app.get("*", function (req, res) {
  var store = (0, _createServerStore2.default)();
  //Initialise and load data into the store
  var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {
    var route = _ref.route;

    return route.loadData ? route.loadData(store) : null;
  });
  Promise.all(promises).then(function () {
    var context = {};
    var content = (0, _renderer2.default)(req, store, context);
    if (context.notFound) res.status(404);
    res.send(content);
  });
  //
});

app.listen(PORT, function () {
  console.log("Started server on port " + PORT + " .... ");
});

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(11);

var _reactRouterDom = __webpack_require__(2);

var _reactRedux = __webpack_require__(1);

var _reactRouterConfig = __webpack_require__(3);

var _serializeJavascript = __webpack_require__(12);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _Routes = __webpack_require__(4);

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, store, context) {
  var content = (0, _server.renderToString)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: req.path, context: context },
      _react2.default.createElement(
        "div",
        null,
        (0, _reactRouterConfig.renderRoutes)(_Routes2.default)
      )
    )
  ));
  var html = "\n    <html>\n      <head>\n      <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css\" integrity=\"sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb\" crossorigin=\"anonymous\">\n      </head>\n      <body>\n        <div id=\"root\">" + content + "</div>\n        <script>\n        window.INITIAL_STATE=" + (0, _serializeJavascript2.default)(store.getState()) + "\n        </script>\n        <script src=\"bundle.js\"></script>\n      </body>\n    </html>\n  ";

  return html;
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _reactRouterDom = __webpack_require__(2);

var _lodash = __webpack_require__(5);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchPage = function (_Component) {
  _inherits(SearchPage, _Component);

  function SearchPage(props) {
    _classCallCheck(this, SearchPage);

    var _this = _possibleConstructorReturn(this, (SearchPage.__proto__ || Object.getPrototypeOf(SearchPage)).call(this, props));

    _this.state = { make: "", model: "" };

    _this.handleMakeChange = _this.handleMakeChange.bind(_this);
    _this.handleModelChange = _this.handleModelChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(SearchPage, [{
    key: "render",
    value: function render() {
      // console.log(this.props.match);
      var _props = this.props,
          makes = _props.makes,
          models = _props.models;
      var _state = this.state,
          make = _state.make,
          model = _state.model;

      var disableButton = make && model ? false : true;
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "div",
          { className: "col-8 mt-3" },
          _react2.default.createElement(
            "form",
            { onSubmit: this.handleSubmit },
            _react2.default.createElement(
              "div",
              { className: "form-group" },
              _react2.default.createElement(
                "label",
                null,
                "Make"
              ),
              _react2.default.createElement(
                "select",
                {
                  className: "form-control",
                  value: this.state.make,
                  onChange: this.handleMakeChange
                },
                _react2.default.createElement("option", null),
                this.renderMakes()
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "form-group" },
              _react2.default.createElement(
                "label",
                null,
                "Model"
              ),
              _react2.default.createElement(
                "select",
                {
                  disabled: this.state.make ? false : true,
                  className: "form-control",
                  value: this.state.model,
                  onChange: this.handleModelChange
                },
                _react2.default.createElement("option", null),
                this.renderModels()
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "btn-toolbar" },
              _react2.default.createElement(
                "button",
                { disabled: disableButton, type: "submit", className: "btn btn-primary mr-3" },
                "Submit"
              ),
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: "/", className: "btn btn-danger" },
                "Cancel"
              )
            )
          )
        )
      );
    }
  }, {
    key: "renderMakes",
    value: function renderMakes() {
      return this.props.makes.map(function (make) {
        return _react2.default.createElement(
          "option",
          { key: make.id, value: make.id },
          make.name
        );
      });
    }
  }, {
    key: "renderModels",
    value: function renderModels() {
      if (!this.state.make) return;
      return this.props.models[this.state.make].map(function (model) {
        return _react2.default.createElement(
          "option",
          { key: model.id, value: model.id },
          model.name
        );
      });
    }
  }, {
    key: "handleMakeChange",
    value: function handleMakeChange(event) {
      this.setState({ make: event.target.value });
    }
  }, {
    key: "handleModelChange",
    value: function handleModelChange(event) {
      this.setState({ model: event.target.value });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      event.preventDefault();
      console.log(this.state);
      // this.props.history.push(`/make/model/${this.state.model}`);
      this.props.history.push("/make/model/" + this.state.model);
    }
  }]);

  return SearchPage;
}(_react.Component);

function mapStateToProps(_ref) {
  var makes = _ref.makes,
      models = _ref.models;

  var modelsGroupByMake = _lodash2.default.groupBy(models, "makeId");
  return { makes: makes, models: modelsGroupByMake };
}
exports.default = {
  component: (0, _reactRedux.connect)(mapStateToProps)(SearchPage)
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home(props) {
  // console.log(props.match);
  var car = props.carOfTheWeek;
  return _react2.default.createElement(
    "div",
    { className: "container", style: { marginTop: "30px" } },
    _react2.default.createElement(
      "div",
      { className: "alert alert-light col-9", role: "alert" },
      _react2.default.createElement(
        "h2",
        null,
        "Car of the week"
      ),
      _react2.default.createElement(
        "h5",
        { className: "alert-heading" },
        car.name
      ),
      _react2.default.createElement("img", { src: car.imageUrl, className: "img-fluid", alt: "Responsive image" }),
      _react2.default.createElement(
        "p",
        null,
        car.review
      ),
      _react2.default.createElement("hr", null),
      _react2.default.createElement(
        "p",
        { className: "mb-0" },
        "$",
        car.price
      )
    )
  );
};

function mapStateToProps(_ref) {
  var carOfTheWeek = _ref.carOfTheWeek;

  return { carOfTheWeek: carOfTheWeek };
}
exports.default = {
  component: (0, _reactRedux.connect)(mapStateToProps)(Home)
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _lodash = __webpack_require__(5);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DetailsPage = function DetailsPage(_ref) {
  var match = _ref.match,
      models = _ref.models;

  // console.log(match);
  var car = models[match.params.id];
  if (!car) return null;
  return _react2.default.createElement(
    "div",
    { className: "left", style: { marginTop: "30px" } },
    _react2.default.createElement(
      "div",
      { className: "alert alert-light col-9", role: "alert" },
      _react2.default.createElement(
        "h4",
        { className: "alert-heading" },
        car.name
      ),
      _react2.default.createElement("img", { src: car.imageUrl, className: "img-fluid", alt: "Responsive image" }),
      _react2.default.createElement("hr", null),
      _react2.default.createElement(
        "p",
        { className: "mb-0" },
        "$",
        car.price
      )
    )
  );
};

function mapStateToProps(_ref2) {
  var models = _ref2.models;

  var modelsById = _lodash2.default.mapKeys(models, "id");
  return { models: modelsById };
}
exports.default = {
  component: (0, _reactRedux.connect)(mapStateToProps)(DetailsPage)
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFoundPage = function NotFoundPage(_ref) {
  var _ref$staticContext = _ref.staticContext,
      staticContext = _ref$staticContext === undefined ? {} : _ref$staticContext;

  staticContext.notFound = true;
  return _react2.default.createElement(
    "h2",
    null,
    "OOPs Page not found !!"
  );
};

exports.default = {
  component: NotFoundPage
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(3);

var _Header = __webpack_require__(18);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
  var route = _ref.route;

  return _react2.default.createElement(
    "div",
    { className: "container" },
    _react2.default.createElement(_Header2.default, null),
    (0, _reactRouterConfig.renderRoutes)(route.routes)
  );
};

exports.default = {
  component: App
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    "div",
    { className: "col-9" },
    _react2.default.createElement(
      "nav",
      { className: "navbar navbar-dark bg-dark" },
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: "/", className: "navbar-brand" },
        _react2.default.createElement(
          "h2",
          null,
          "Cars Catalog"
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "nav-item align-right" },
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: "/search", className: "btn btn-info" },
          "Search"
        )
      )
    )
  );
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(6);

var _reduxThunk = __webpack_require__(20);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(21);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default));
  return store;
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(6);

var _carOfWeekReducer = __webpack_require__(22);

var _carOfWeekReducer2 = _interopRequireDefault(_carOfWeekReducer);

var _makesReducer = __webpack_require__(24);

var _makesReducer2 = _interopRequireDefault(_makesReducer);

var _modelsReducer = __webpack_require__(26);

var _modelsReducer2 = _interopRequireDefault(_modelsReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  carOfTheWeek: _carOfWeekReducer2.default,
  makes: _makesReducer2.default,
  models: _modelsReducer2.default
});

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return _carOfTheWeek2.default;
};

var _carOfTheWeek = __webpack_require__(23);

var _carOfTheWeek2 = _interopRequireDefault(_carOfTheWeek);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = {"modelId":520,"review":"The Mazda MX-5 is a traditional two-seat sports car, with a lightweight body and rear-wheel drive. It has a folding, fabric roof and is among the least expensive convertibles. This fourth-generation MX-5 is fantastic fun to drive. Motoring magazine Wheels named it Car of the Year for 2016.","name":"MX-5","price":90000,"imageUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/2015_Mazda_MX-5_ND_2.0_SKYACTIV-G_160_i-ELOOP_Rubinrot-Metallic_Vorderansicht.jpg/1200px-2015_Mazda_MX-5_ND_2.0_SKYACTIV-G_160_i-ELOOP_Rubinrot-Metallic_Vorderansicht.jpg"}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return _makes2.default;
};

var _makes = __webpack_require__(25);

var _makes2 = _interopRequireDefault(_makes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = [{"id":10,"name":"Porsche"},{"id":20,"name":"Nissan"},{"id":30,"name":"BMW"},{"id":40,"name":"Audi"},{"id":50,"name":"Mazda"}]

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return _models2.default;
};

var _models = __webpack_require__(27);

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = [{"id":100,"makeId":10,"name":"911 Carrera 4s","price":297130,"imageUrl":"http://files1.porsche.com/filestore/image/multimedia/none/991-2nd-c4s-modelimage-sideshot/model/15bd09cf-553b-11e5-8c32-0019999cd470;s25/porsche-model.png"},{"id":110,"makeId":10,"name":"Cayenne GTS","price":171605,"imageUrl":"http://files3.porsche.com/filestore/image/multimedia/none/rd-2013-9pa-e2-2nd-gts-modelimage-sideshot/model/c287d350-5920-11e4-99aa-001a64c55f5c;s25/porsche-model.png"},{"id":120,"makeId":10,"name":"Panamera 4S","price":328160,"imageUrl":"http://files1.porsche.com/filestore/image/multimedia/none/970-g2-4s-modelimage-sideshot/model/a23b6da0-33b9-11e6-9225-0019999cd470;s25/porsche-model.png"},{"id":210,"makeId":20,"name":"Leaf","price":50000,"imageUrl":"http://o.aolcdn.com/commerce/autodata/images/USC10NIC161B021001.jpg"},{"id":220,"makeId":20,"name":"GT-R","price":180000,"imageUrl":"http://o.aolcdn.com/dims-shared/dims3/GLOB/crop/1280x720+0+104/resize/800x450!/format/jpg/quality/85/http://o.aolcdn.com/hss/storage/midas/55737528ce8b83620a84bfa35c05e152/201537017/2009-nissan-gtr.jpg"},{"id":300,"makeId":30,"name":"1","price":83000,"imageUrl":"http://www.bmw.com.au/content/dam/bmw/common/all-models/1-series/5-door/2015/at-a-glance/design-fw-exterieur-01.jpg/jcr:content/renditions/cq5dam.resized.img.585.low.time1447923462248.jpg"},{"id":310,"makeId":30,"name":"2","price":125000,"imageUrl":"http://www.bmw.com.au/content/dam/bmw/common/all-models/2-series/coupe/2013/at-a-glance/Exterieur-design-03.jpg/jcr:content/renditions/cq5dam.resized.img.585.low.time1470324214485.jpg"},{"id":320,"makeId":30,"name":"3","price":150000,"imageUrl":"http://www.bmw.com.au/content/dam/bmw/common/all-models/3-series/sedan/2015/at-a-glance/3-series-sedan-design.jpg/jcr:content/renditions/cq5dam.resized.img.585.low.time1447942773188.jpg"},{"id":400,"makeId":40,"name":"S5","price":165000,"imageUrl":"http://media.caranddriver.com/images/media/267365/2008-audi-s5-photo-105022-s-450x274.jpg"},{"id":510,"makeId":50,"name":"TT","price":40000,"imageUrl":"http://media.caranddriver.com/images/media/3124/2007-nissan-350z-photo-3786-s-429x262.jpg"},{"id":520,"makeId":50,"name":"MX-5","price":90000,"imageUrl":"http://www.mazda.com.au/assets/cars/allnewmx5/overview/standard-feature-panel/overview-roadster-gt.jpg"}]

/***/ })
/******/ ]);