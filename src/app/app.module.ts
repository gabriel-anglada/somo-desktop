import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AngularFireModule} from "angularfire2";
import {environment} from "../environments/environment";
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginComponent} from "./pages/onboarding/login/login.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {HomeComponent} from "./pages/dashboard/home/home.component";
import {AuthProvider} from "./providers/auth";
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
import {AlertProvider} from "./providers/alert";
import {ClarityModule} from "clarity-angular";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {UserAddModalComponent} from "./pages/dashboard/users/user-add.component";
import {OrganizationsProvider} from "./providers/organizations";
import {UserEditModalComponent} from "./pages/dashboard/users/user-edit.component";
import {StarAddModalComponent} from "./pages/dashboard/stars/star-add.component";
import {StarEditModalComponent} from "./pages/dashboard/stars/star-edit.component";

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
        LoginComponent,
        //Modals
        UserAddModalComponent,
        UserEditModalComponent,
        StarAddModalComponent,
        StarEditModalComponent
        //Directives
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        AppRoutingModule,
        AppTranslationModule,
        AngularFireModule.initializeApp(environment.firebase),
        ClarityModule.forRoot(),
        BrowserAnimationsModule
    ],
    providers: [
        AuthProvider,
        UsersProvider,
        StarsProvider,
        OrganizationsProvider,
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
        ContactComponent
    ]
})
export class AppModule {
}
