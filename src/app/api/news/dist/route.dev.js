"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GET = void 0;

var _jsdom = require("jsdom");

var _axios = _interopRequireDefault(require("axios"));

var _https = _interopRequireDefault(require("https"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import fetch from "node-fetch"
var GET = function GET(req, res) {
  var response, data, dom, document, newstitlle;
  return regeneratorRuntime.async(function GET$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].get("https://www.divyabhaskar.co.in/", {
            httpsAgent: new _https["default"].Agent({
              rejectUnauthorized: false
            })
          }));

        case 2:
          response = _context.sent;
          data = response.data;
          dom = new _jsdom.JSDOM(data);
          document = dom.window.document;
          newstitlle = document.querySelector(".f3426d1d");
          console.log(newstitlle);
          res.status(200).json({
            msg: "success"
          });

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.GET = GET;