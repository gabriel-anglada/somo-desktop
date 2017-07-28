import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AngularFireModule} from "angularfire2";
import {environment} from "../environments/environment";
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule} from "@angular/forms";
import {LoginComponent} from "./pages/onboarding/login/login.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {HomeComponent} from "./pages/dashboard/home/home.component";
import {AuthProvider} from "./providers/auth";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {UsersComponent} from "./pages/dashboard/users/users.component";
import {StarsComponent} from "./pages/dashboard/stars/stars.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import {OrganizationComponent} from "./pages/organization/organization.component";
import {AboutComponent} from "./pages/about/about.component";
import {ContactComponent} from "./pages/contact/contact.component";
import {AppTranslationModule} from "./app-translation.module";
import {HttpModule} from "@angular/http";
import {UsersProvider} from "./providers/users";
import {StarsProvider} from "./providers/stars";
import {ConfirmDirective} from "./directives/confirm.directive";
import {ConfirmComponent} from "./directives/confirm.component";
import {AlertProvider} from "./providers/alert";

@NgModule({
    declarations: [
        AppComponent,
        /**
         * TODO: Ideally components should be encapsulated in a module, but due to routes mimssunderstanding, I need to declare all of them here
         */
        LoginComponent,
        DashboardComponent,
        HomeComponent,
        UsersComponent,
        StarsComponent,
        ProfileComponent,
        OrganizationComponent,
        AboutComponent,
        ContactComponent,
        //Directives
        ConfirmDirective,
        ConfirmComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        AppTranslationModule,
        AngularFireModule.initializeApp(environment.firebase),
        NgbModule.forRoot()
    ],
    providers: [
        AuthProvider,
        UsersProvider,
        StarsProvider,
        AlertProvider,
    ],
    bootstrap: [
        AppComponent
    ],
    entryComponents: [
        /**
         * TODO: Ideally move this entry components to a low level module
         */
        AboutComponent,
        ContactComponent,
        ConfirmComponent
    ]
})
export class AppModule {
}
