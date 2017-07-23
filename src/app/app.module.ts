import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AngularFireModule} from "angularfire2";
import {environment} from "../environments/environment";
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule} from "@angular/forms";
import {LoginComponent} from "./pages/onboarding/login/login.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {HomeComponent} from "./pages/home/home.component";
import {AppMaterialModule} from "./app-material.module";
import {AuthProvider} from "./providers/auth";

@NgModule({
  declarations: [
    AppComponent,
    /**
     * TODO: Ideally components should be encapsulated in a module, but due to routes mimssunderstanding, I need to declare all of them here
     */
    LoginComponent,
    DashboardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppMaterialModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    AuthProvider
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
