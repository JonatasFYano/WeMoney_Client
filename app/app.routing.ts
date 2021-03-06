﻿import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';
import { MySessionComponent } from './mySession/mySession.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchCourseComponent } from './searchCourse/searchCourse.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'home', component: HomeComponent },
    { path: 'mySession', component: MySessionComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'searchCourse', component: SearchCourseComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);