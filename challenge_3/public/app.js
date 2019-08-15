"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));
    _this.state = {
      page: 0,
      webpage: '',
      name: '',
      email: '',
      password: '',
      address1: '',
      address2: '',
      city: '',
      homestate: '',
      zipcode: '',
      phoneNumber: '',
      ccNumber: '',
      expDate: '',
      cvv: '',
      billZip: ''
    };
    _this.inputFormChange = _this.inputFormChange.bind(_assertThisInitialized(_this)); //  this.renderf1Page = this.renderf1Page.bind(this);

    _this.submitInputFormData = _this.submitInputFormData.bind(_assertThisInitialized(_this));
    _this.nextPage = _this.nextPage.bind(_assertThisInitialized(_this));
    _this.onPurchase = _this.onPurchase.bind(_assertThisInitialized(_this));
    return _this;
  }
  /*
  ==========
  render pages
  ==========
  */


  _createClass(App, [{
    key: "nextPage",
    value: function nextPage() {
      // console.log(this.state.page);
      this.setState(function (state) {
        return {
          page: state.page + 1
        };
      });
    }
  }, {
    key: "inputFormChange",
    value: function inputFormChange(event) {
      this.setState(_defineProperty({}, event.target.id, event.target.value));
    }
  }, {
    key: "submitInputFormData",
    value: function submitInputFormData(event) {
      var form = event.target.parentNode.id;

      function postData() {
        var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return fetch(url, {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json'
          }
        });
      }

      if (form === 'f1') {
        postData('http://localhost:3000/', {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password
        }).then(function (data) {
          console.log(data);
        })["catch"](function (error) {
          console.log(error);
        });
      } else if (form === 'f2') {
        postData('http://localhost:3000/', {
          address1: this.state.address1,
          address2: this.state.address2,
          city: this.state.city,
          homestate: this.state.homestate,
          zipcode: this.state.zipcode,
          phoneNumber: this.state.phoneNumber
        }).then(function (data) {
          console.log(data);
        })["catch"](function (error) {
          console.log(error);
        });
      } else if (form === 'f3') {
        postData('http://localhost:3000/', {
          ccNumber: this.state.ccNumber,
          expDate: this.state.expDate,
          cvv: this.state.cvv,
          billZip: this.state.billZip
        }).then(function (data) {
          console.log(data);
        })["catch"](function (error) {
          console.log(error);
        });
      }

      event.preventDefault();
    }
  }, {
    key: "onPurchase",
    value: function onPurchase(event) {
      this.setState({
        page: 0
      });
      event.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var webpageDOM;

      if (this.state.page === 0) {
        webpageDOM = React.createElement("button", {
          onClick: this.nextPage,
          id: "checkout"
        }, "Checkout");
      } else if (this.state.page === 1) {
        webpageDOM = React.createElement("div", null, React.createElement("form", {
          id: "f1"
        }, React.createElement("label", null, "Name:", React.createElement("input", {
          type: "text",
          id: "name",
          onChange: this.inputFormChange,
          value: this.state.name
        })), React.createElement("br", null), React.createElement("label", null, "Email:", React.createElement("input", {
          type: "text",
          id: "email",
          onChange: this.inputFormChange,
          value: this.state.email
        })), React.createElement("br", null), React.createElement("label", null, "Password:", React.createElement("input", {
          type: "text",
          id: "password",
          onChange: this.inputFormChange,
          value: this.state.password
        })), React.createElement("br", null), React.createElement("button", {
          onClick: function onClick(event) {
            _this2.nextPage(event);

            _this2.submitInputFormData(event);
          }
        }, "Next")));
      } else if (this.state.page === 2) {
        webpageDOM = React.createElement("div", null, React.createElement("form", {
          id: "f2"
        }, React.createElement("label", null, "Address Line 1", React.createElement("input", {
          type: "text",
          id: "address1",
          onChange: this.inputFormChange,
          value: this.state.address1
        })), React.createElement("br", null), React.createElement("label", null, "Address Line 2", React.createElement("input", {
          type: "text",
          id: "address2",
          onChange: this.inputFormChange,
          value: this.state.address2
        })), React.createElement("br", null), React.createElement("label", null, "City", React.createElement("input", {
          type: "text",
          id: "city",
          onChange: this.inputFormChange,
          value: this.state.city
        })), React.createElement("br", null), React.createElement("label", null, "State", React.createElement("input", {
          type: "text",
          id: "homestate",
          onChange: this.inputFormChange,
          value: this.state.homestate
        })), React.createElement("br", null), React.createElement("label", null, "Zip Code", React.createElement("input", {
          type: "text",
          id: "zipcode",
          onChange: this.inputFormChange,
          value: this.state.zipcode
        })), React.createElement("br", null), React.createElement("label", null, "Phone Number", React.createElement("input", {
          type: "text",
          id: "phoneNumber",
          onChange: this.inputFormChange,
          value: this.state.phoneNumber
        })), React.createElement("br", null), React.createElement("button", {
          onClick: function onClick(event) {
            _this2.nextPage(event);

            _this2.submitInputFormData(event);
          }
        }, "Next")));
      } else if (this.state.page === 3) {
        webpageDOM = React.createElement("div", null, React.createElement("form", {
          id: "f3"
        }, React.createElement("label", null, "Credit Card Number:", React.createElement("input", {
          type: "text",
          id: "ccNumber",
          onChange: this.inputFormChange,
          value: this.state.ccNumber
        })), React.createElement("br", null), React.createElement("label", null, "Expiration Date:", React.createElement("input", {
          type: "text",
          id: "expDate",
          onChange: this.inputFormChange,
          value: this.state.expDate
        })), React.createElement("br", null), React.createElement("label", null, "CVV:", React.createElement("input", {
          type: "text",
          id: "cvv",
          onChange: this.inputFormChange,
          value: this.state.cvv
        })), React.createElement("br", null), React.createElement("label", null, "Billing Zip Code:", React.createElement("input", {
          type: "text",
          id: "billZip",
          onChange: this.inputFormChange,
          value: this.state.billZip
        })), React.createElement("br", null), React.createElement("button", {
          onClick: function onClick(event) {
            _this2.nextPage(event);

            _this2.submitInputFormData(event);
          }
        }, "Next")));
      } else if (this.state.page === 4) {
        webpageDOM = React.createElement("div", null, React.createElement("h2", null, "Payment Information"), React.createElement("h3", null, "Page 1 Information"), React.createElement("div", null, "Name: ", this.state.name), React.createElement("div", null, "Email: ", this.state.email), React.createElement("div", null, "Password: ", this.state.password), React.createElement("h3", null, "Page 2 Information"), React.createElement("div", null, "Address Line 1: ", this.state.address1), React.createElement("div", null, "Address Line 2: ", this.state.address2), React.createElement("div", null, "City: ", this.state.city), React.createElement("div", null, "State: ", this.state.homestate), React.createElement("div", null, "Zip Code: ", this.state.zipcode), React.createElement("div", null, "Phone Number: ", this.state.phoneNumber), React.createElement("h3", null, "Page 3 Information"), React.createElement("div", null, "Credit Card Number: ", this.state.ccNumber), React.createElement("div", null, "Credit Card Expiration Date: ", this.state.expDate), React.createElement("div", null, "Credit Card CVV Number: ", this.state.cvv), React.createElement("div", null, "Billing Zip Code: ", this.state.billZip), React.createElement("button", {
          onClick: this.onPurchase
        }, "Purchase"));
      }

      return React.createElement("div", null, React.createElement("header", null, "The Complete Checkout Experience"), webpageDOM);
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));