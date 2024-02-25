"use strict";
"use server";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsdom = require("jsdom");

var _axios = _interopRequireDefault(require("axios"));

var _https = _interopRequireDefault(require("https"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getNews = function getNews(options) {
  var lang, category, pageNumber, response;
  return regeneratorRuntime.async(function getNews$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          lang = options.lang, category = options.category, pageNumber = options.pageNumber;
          _context.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].get("\n    https://inshorts.com/api/".concat(lang, "/search/trending_topics/").concat(category, "?page=").concat(pageNumber, "&type=NEWS_CATEGORY"), {
            httpsAgent: new _https["default"].Agent({
              rejectUnauthorized: false
            })
          }));

        case 3:
          response = _context.sent;
          return _context.abrupt("return", response.data);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
};

var _default = getNews;
exports["default"] = _default;