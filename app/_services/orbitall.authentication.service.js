"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var index_1 = require("../_utils/index");
require("rxjs/add/operator/map");
var OrbitallAuthenticationService = /** @class */ (function () {
    function OrbitallAuthenticationService(http, httpUtils) {
        this.http = http;
        this.httpUtils = httpUtils;
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }
    OrbitallAuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        // https://107.154.120.58/token
        // https://api.orbitallcartoes.com.br/token
        var URL = "https://107.154.120.58/token";
        var BODY = "grant_type=password&username=" + username + /* "&password=" + password; */ "&password=e10adc3949ba59abbe56e057f20f883e";
        var HEADERS = this.httpUtils.headers("ole", "hml", "07049009717", true);
        return this.http
            .post(URL, BODY, HEADERS)
            .map(function (response) {
            // login successful if there's a jwt token in the response
            var token = response.json() && response.json().token;
            if (token) {
                // set token property
                _this.token = token;
                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
                // return true to indicate successful login
                return true;
            }
            else {
                // return null (false) to indicate failed login
                return false;
            }
        });
    };
    OrbitallAuthenticationService.prototype.logout = function () {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    };
    OrbitallAuthenticationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, index_1.HttpUtils])
    ], OrbitallAuthenticationService);
    return OrbitallAuthenticationService;
}());
exports.OrbitallAuthenticationService = OrbitallAuthenticationService;
//# sourceMappingURL=orbitall.authentication.service.js.map