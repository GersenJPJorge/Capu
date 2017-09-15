import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { AuthGuard } from './_guards/index';
import { OrbitallAuthenticationService, AuthenticationService, UserService } from './_services/index';
import { HttpUtils } from './_utils/index';
import { LoginComponent } from './login/index';
import { HomeComponent } from './home/index';
import { DashboardComponent } from './dashboard/index';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        DashboardComponent
    ],
    providers: [
        AuthGuard,
        OrbitallAuthenticationService,
        AuthenticationService,
        UserService,
        HttpUtils,

        // providers used to create fake backend
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }