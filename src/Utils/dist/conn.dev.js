"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ConnectMongo = function ConnectMongo() {
  return regeneratorRuntime.async(function ConnectMongo$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_mongoose["default"].connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
          }).then(function (data) {
            console.log("Successfully connected With " + data.connections[0].host);
          }));

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
};

var _default = ConnectMongo;
exports["default"] = _default;