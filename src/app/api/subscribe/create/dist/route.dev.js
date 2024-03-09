"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.POST = POST;

var _conn = _interopRequireDefault(require("@/Utils/conn"));

var _SubscribeModel = _interopRequireDefault(require("@/Models/SubscribeModel"));

var _nodejsCorekit = require("nodejs-corekit");

var _server = require("next/server");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function POST(req) {
  var body, isEmail;
  return regeneratorRuntime.async(function POST$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap((0, _conn["default"])());

        case 3:
          _context.next = 5;
          return regeneratorRuntime.awrap(req.json());

        case 5:
          body = _context.sent;

          if (body.email) {
            _context.next = 8;
            break;
          }

          throw new _nodejsCorekit.ErrorHandler("Please Enter Email Address !", 404);

        case 8:
          _context.next = 10;
          return regeneratorRuntime.awrap(_SubscribeModel["default"].find({
            email: body.email
          }));

        case 10:
          isEmail = _context.sent;

          if (!(isEmail && Object.keys(isEmail).length > 0)) {
            _context.next = 13;
            break;
          }

          return _context.abrupt("return", _server.NextResponse.json({
            success: false,
            message: "Email Already Exists !"
          }, {
            status: 404
          }));

        case 13:
          _context.next = 15;
          return regeneratorRuntime.awrap(_SubscribeModel["default"].create(body));

        case 15:
          return _context.abrupt("return", _server.NextResponse.json({
            success: true,
            message: "".concat(body.email, " subscriberd successfully !")
          }, {
            status: 201
          }));

        case 18:
          _context.prev = 18;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", _server.NextResponse.json({
            success: false,
            message: _context.t0
          }, {
            status: 500
          }));

        case 21:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 18]]);
}