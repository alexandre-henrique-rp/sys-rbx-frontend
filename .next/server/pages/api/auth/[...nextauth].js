/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers */ \"next-auth/providers\");\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst options = {\n  providers: [next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default().Credentials({\n    name: 'Credentials',\n    credentials: {\n      email: {\n        label: \"Email\",\n        type: \"text\",\n        placeholder: \"test@test.com\"\n      },\n      password: {\n        label: \"Password\",\n        type: \"password\"\n      }\n    },\n\n    async authorize(credentials) {\n      try {\n        const {\n          data\n        } = await axios__WEBPACK_IMPORTED_MODULE_2___default().post(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/auth/local`, {\n          identifier: credentials.email,\n          password: credentials.password\n        });\n\n        if (data) {\n          return data;\n        } else {\n          return null;\n        }\n      } catch (e) {\n        // console.log('caught error');\n        // const errorMessage = e.response.data.message\n        // Redirecting to the login page with error message          in the URL\n        // throw new Error(errorMessage + '&email=' + credentials.email)\n        return null;\n      }\n    }\n\n  })],\n  pages: {\n    signIn: '/auth/signin'\n  },\n  session: {\n    jwt: true\n  },\n  callbacks: {\n    // Getting the JWT token from API response\n    jwt: async (token, user, account) => {\n      const isSignIn = user ? true : false;\n\n      if (isSignIn) {\n        token.jwt = user.jwt;\n        token.id = user.user.id;\n        token.name = user.user.username;\n        token.email = user.user.email;\n      }\n\n      return Promise.resolve(token);\n    },\n    session: async (session, user) => {\n      session.jwt = user.jwt;\n      session.id = user.id;\n      return Promise.resolve(session);\n    }\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ((req, res) => next_auth__WEBPACK_IMPORTED_MODULE_0___default()(req, res, options));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbXMtc3RyYXBpLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcz85OTA5Il0sIm5hbWVzIjpbIm9wdGlvbnMiLCJwcm92aWRlcnMiLCJQcm92aWRlcnMiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJlbWFpbCIsImxhYmVsIiwidHlwZSIsInBsYWNlaG9sZGVyIiwicGFzc3dvcmQiLCJhdXRob3JpemUiLCJkYXRhIiwiYXhpb3MiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU1RSQVBJX0FQSV9VUkwiLCJpZGVudGlmaWVyIiwiZSIsInBhZ2VzIiwic2lnbkluIiwic2Vzc2lvbiIsImp3dCIsImNhbGxiYWNrcyIsInRva2VuIiwidXNlciIsImFjY291bnQiLCJpc1NpZ25JbiIsImlkIiwidXNlcm5hbWUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlcSIsInJlcyIsIk5leHRBdXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsTUFBTUEsT0FBTyxHQUFHO0FBQ2RDLFdBQVMsRUFBRSxDQUNUQyxzRUFBQSxDQUFzQjtBQUNwQkMsUUFBSSxFQUFFLGFBRGM7QUFFcEJDLGVBQVcsRUFBRTtBQUNYQyxXQUFLLEVBQUU7QUFBRUMsYUFBSyxFQUFFLE9BQVQ7QUFBa0JDLFlBQUksRUFBRSxNQUF4QjtBQUFnQ0MsbUJBQVcsRUFBRTtBQUE3QyxPQURJO0FBRVhDLGNBQVEsRUFBRTtBQUFHSCxhQUFLLEVBQUUsVUFBVjtBQUFzQkMsWUFBSSxFQUFFO0FBQTVCO0FBRkMsS0FGTzs7QUFNdEIsVUFBTUcsU0FBTixDQUFnQk4sV0FBaEIsRUFBNkI7QUFDekIsVUFBSTtBQUNGLGNBQU07QUFBRU87QUFBRixZQUFXLE1BQU1DLGlEQUFBLENBQVksR0FBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLDBCQUEyQixhQUFyRCxFQUFtRTtBQUN4RkMsb0JBQVUsRUFBRVosV0FBVyxDQUFDQyxLQURnRTtBQUV4Rkksa0JBQVEsRUFBRUwsV0FBVyxDQUFDSztBQUZrRSxTQUFuRSxDQUF2Qjs7QUFJQSxZQUFJRSxJQUFKLEVBQVU7QUFDUixpQkFBT0EsSUFBUDtBQUNELFNBRkQsTUFHSztBQUNILGlCQUFPLElBQVA7QUFDRDtBQUNGLE9BWEQsQ0FXRSxPQUFPTSxDQUFQLEVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQU8sSUFBUDtBQUNEO0FBQ0Y7O0FBekJtQixHQUF0QixDQURTLENBREc7QUErQmRDLE9BQUssRUFBRTtBQUNMQyxVQUFNLEVBQUU7QUFESCxHQS9CTztBQW1DZEMsU0FBTyxFQUFFO0FBQ1BDLE9BQUcsRUFBRTtBQURFLEdBbkNLO0FBdUNkQyxXQUFTLEVBQUU7QUFDVDtBQUNBRCxPQUFHLEVBQUUsT0FBT0UsS0FBUCxFQUFjQyxJQUFkLEVBQW9CQyxPQUFwQixLQUFnQztBQUNuQyxZQUFNQyxRQUFRLEdBQUdGLElBQUksR0FBRyxJQUFILEdBQVUsS0FBL0I7O0FBQ0EsVUFBSUUsUUFBSixFQUFjO0FBQ1pILGFBQUssQ0FBQ0YsR0FBTixHQUFZRyxJQUFJLENBQUNILEdBQWpCO0FBQ0FFLGFBQUssQ0FBQ0ksRUFBTixHQUFXSCxJQUFJLENBQUNBLElBQUwsQ0FBVUcsRUFBckI7QUFDQUosYUFBSyxDQUFDcEIsSUFBTixHQUFhcUIsSUFBSSxDQUFDQSxJQUFMLENBQVVJLFFBQXZCO0FBQ0FMLGFBQUssQ0FBQ2xCLEtBQU4sR0FBY21CLElBQUksQ0FBQ0EsSUFBTCxDQUFVbkIsS0FBeEI7QUFDRDs7QUFDRCxhQUFPd0IsT0FBTyxDQUFDQyxPQUFSLENBQWdCUCxLQUFoQixDQUFQO0FBQ0QsS0FYUTtBQWFUSCxXQUFPLEVBQUUsT0FBT0EsT0FBUCxFQUFnQkksSUFBaEIsS0FBeUI7QUFDaENKLGFBQU8sQ0FBQ0MsR0FBUixHQUFjRyxJQUFJLENBQUNILEdBQW5CO0FBQ0FELGFBQU8sQ0FBQ08sRUFBUixHQUFhSCxJQUFJLENBQUNHLEVBQWxCO0FBQ0EsYUFBT0UsT0FBTyxDQUFDQyxPQUFSLENBQWdCVixPQUFoQixDQUFQO0FBQ0Q7QUFqQlE7QUF2Q0csQ0FBaEI7QUE0REEsK0RBQWUsQ0FBQ1csR0FBRCxFQUFNQyxHQUFOLEtBQWNDLGdEQUFRLENBQUNGLEdBQUQsRUFBTUMsR0FBTixFQUFXaEMsT0FBWCxDQUFyQyIsImZpbGUiOiIuL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSAnbmV4dC1hdXRoJ1xuaW1wb3J0IFByb3ZpZGVycyBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5jb25zdCBvcHRpb25zID0ge1xuICBwcm92aWRlcnM6IFtcbiAgICBQcm92aWRlcnMuQ3JlZGVudGlhbHMoe1xuICAgICAgbmFtZTogJ0NyZWRlbnRpYWxzJyxcbiAgICAgIGNyZWRlbnRpYWxzOiB7XG4gICAgICAgIGVtYWlsOiB7IGxhYmVsOiBcIkVtYWlsXCIsIHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJ0ZXN0QHRlc3QuY29tXCIgfSxcbiAgICAgICAgcGFzc3dvcmQ6IHsgIGxhYmVsOiBcIlBhc3N3b3JkXCIsIHR5cGU6IFwicGFzc3dvcmRcIiB9XG4gICAgICB9LFxuICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVFJBUElfQVBJX1VSTH0vYXV0aC9sb2NhbGAsIHtcbiAgICAgICAgICAgIGlkZW50aWZpZXI6IGNyZWRlbnRpYWxzLmVtYWlsLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IGNyZWRlbnRpYWxzLnBhc3N3b3JkXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdjYXVnaHQgZXJyb3InKTtcbiAgICAgICAgICAvLyBjb25zdCBlcnJvck1lc3NhZ2UgPSBlLnJlc3BvbnNlLmRhdGEubWVzc2FnZVxuICAgICAgICAgIC8vIFJlZGlyZWN0aW5nIHRvIHRoZSBsb2dpbiBwYWdlIHdpdGggZXJyb3IgbWVzc2FnZSAgICAgICAgICBpbiB0aGUgVVJMXG4gICAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKGVycm9yTWVzc2FnZSArICcmZW1haWw9JyArIGNyZWRlbnRpYWxzLmVtYWlsKVxuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgXSxcblxuICBwYWdlczoge1xuICAgIHNpZ25JbjogJy9hdXRoL3NpZ25pbidcbiAgfSxcblxuICBzZXNzaW9uOiB7XG4gICAgand0OiB0cnVlLFxuICB9LFxuXG4gIGNhbGxiYWNrczoge1xuICAgIC8vIEdldHRpbmcgdGhlIEpXVCB0b2tlbiBmcm9tIEFQSSByZXNwb25zZVxuICAgIGp3dDogYXN5bmMgKHRva2VuLCB1c2VyLCBhY2NvdW50KSA9PiB7XG4gICAgICBjb25zdCBpc1NpZ25JbiA9IHVzZXIgPyB0cnVlIDogZmFsc2U7XG4gICAgICBpZiAoaXNTaWduSW4pIHtcbiAgICAgICAgdG9rZW4uand0ID0gdXNlci5qd3Q7XG4gICAgICAgIHRva2VuLmlkID0gdXNlci51c2VyLmlkO1xuICAgICAgICB0b2tlbi5uYW1lID0gdXNlci51c2VyLnVzZXJuYW1lO1xuICAgICAgICB0b2tlbi5lbWFpbCA9IHVzZXIudXNlci5lbWFpbDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodG9rZW4pO1xuICAgIH0sXG4gIFxuICAgIHNlc3Npb246IGFzeW5jIChzZXNzaW9uLCB1c2VyKSA9PiB7XG4gICAgICBzZXNzaW9uLmp3dCA9IHVzZXIuand0O1xuICAgICAgc2Vzc2lvbi5pZCA9IHVzZXIuaWQ7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlc3Npb24pO1xuICAgIH0sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKHJlcSwgcmVzKSA9PiBOZXh0QXV0aChyZXEsIHJlcywgb3B0aW9ucykiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/auth/[...nextauth].js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-auth");;

/***/ }),

/***/ "next-auth/providers":
/*!**************************************!*\
  !*** external "next-auth/providers" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-auth/providers");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();