"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var index_1 = require("./home/index");
var index_2 = require("./login/index");
var index_3 = require("./register/index");
var index_4 = require("./_guards/index");
var mySession_component_1 = require("./mySession/mySession.component");
var profile_component_1 = require("./profile/profile.component");
var searchCourse_component_1 = require("./searchCourse/searchCourse.component");
var appRoutes = [
    { path: '', component: index_1.HomeComponent, canActivate: [index_4.AuthGuard] },
    { path: 'login', component: index_2.LoginComponent },
    { path: 'register', component: index_3.RegisterComponent },
    { path: 'home', component: index_1.HomeComponent },
    { path: 'mySession', component: mySession_component_1.MySessionComponent },
    { path: 'profile', component: profile_component_1.ProfileComponent },
    { path: 'searchCourse', component: searchCourse_component_1.SearchCourseComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map