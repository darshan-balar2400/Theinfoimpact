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
          console.log(body);

          if (body.email) {
            _context.next = 9;
            break;
          }

          throw new _nodejsCorekit.ErrorHandler("Please Enter Email Address !", 404);

        case 9:
          _context.next = 11;
          return regeneratorRuntime.awrap(_SubscribeModel["default"].find({
            email: body.email
          }));

        case 11:
          isEmail = _context.sent;

          if (!isEmail) {
            _context.next = 14;
            break;
          }

          return _context.abrupt("return", _server.NextResponse.json({
            success: false,
            message: "Email Already Exists !"
          }, {
            status: 404
          }));

        case 14:
          _context.next = 16;
          return regeneratorRuntime.awrap(_SubscribeModel["default"].create(body));

        case 16:
          return _context.abrupt("return", _server.NextResponse.json({
            success: true,
            message: "".concat(body.email, " subscriberd successfully !")
          }, {
            status: 201
          }));

        case 19:
          _context.prev = 19;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", _server.NextResponse.json({
            success: false,
            message: _context.t0
          }, {
            status: 500
          }));

        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 19]]);
}