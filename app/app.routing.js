"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var index_1 = require("./login/index");
var index_2 = require("./home/index");
var index_3 = require("./dashboard/index");
var appRoutes = [
    { path: 'login', component: index_1.LoginComponent },
    { path: '', component: index_2.HomeComponent /*, canActivate: [AuthGuard]*/ },
    { path: 'dashboard', component: index_3.DashboardComponent /*, canActivate: [AuthGuard]*/ },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map