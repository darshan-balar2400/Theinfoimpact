"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _validator = _interopRequireDefault(require("validator"));

var _nodejsCorekit = require("nodejs-corekit");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ContactSchema = new _mongoose["default"].Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    validate: function validate(value) {
      if (!_validator["default"].isEmail(value)) {
        return new _nodejsCorekit.ErrorHandler("Invalid Email Address", 400);
      }
    }
  },
  subject: {
    type: String,
    required: true,
    trim: true
  },
  message: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true
});
var ContactModel = _mongoose["default"].models.Contact || new _mongoose["default"].model("Contact", ContactSchema);
var _default = ContactModel;
exports["default"] = _default;