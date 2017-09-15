"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/http");
var LoginResponse = /** @class */ (function (_super) {
    __extends(LoginResponse, _super);
    function LoginResponse(_code, _message, _defaultOptions) {
        return _super.call(this, _defaultOptions) || this;
    }
    return LoginResponse;
}(http_1.Response));
exports.LoginResponse = LoginResponse;
//# sourceMappingURL=login.response.js.map