"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _validator = _interopRequireDefault(require("validator"));

var _nodejsCorekit = require("nodejs-corekit");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SubscribeSchema = new _mongoose["default"].Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: function validate(value) {
      if (!_validator["default"].isEmail(value)) {
        throw new _nodejsCorekit.ErrorHandler("Email is not in proper formate !", 422);
      }
    }
  }
}, {
  timestamps: true
});
var SubscribeModel = _mongoose["default"].models.Subscribe || new _mongoose["default"].model("Subscribe", SubscribeSchema);
var _default = SubscribeModel;
exports["default"] = _default;