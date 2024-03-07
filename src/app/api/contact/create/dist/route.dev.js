"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.POST = POST;

var _conn = _interopRequireDefault(require("@/Utils/conn"));

var _ContactModel = _interopRequireDefault(require("@/Models/ContactModel"));

var _nodejsCorekit = require("nodejs-corekit");

var _server = require("next/server");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function POST(req) {
  var body;
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

          if (!(!body.name || !body.message || !body.email || !body.subject)) {
            _context.next = 8;
            break;
          }

          throw new _nodejsCorekit.ErrorHandler("Please Enter Required Fields !", 404);

        case 8:
          _context.next = 10;
          return regeneratorRuntime.awrap(_ContactModel["default"].create(body));

        case 10:
          return _context.abrupt("return", _server.NextResponse.json({
            success: true,
            message: "Your Ticket Has Been Submitted Successfully !"
          }, {
            status: 201
          }));

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", _server.NextResponse.json({
            success: false,
            message: _context.t0
          }, {
            status: 500
          }));

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 13]]);
}