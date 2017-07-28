import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './pages/onboarding/login/login.component';
import {HomeComponent} from './pages/dashboard/home/home.component';
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {NgModule} from "@angular/core";
import {UsersComponent} from "./pages/dashboard/users/users.component";
import {StarsComponent} from "./pages/dashboard/stars/stars.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import {OrganizationComponent} from "./pages/organization/organization.component";

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, children: [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'users', component: UsersComponent},
    {path: 'stars', component: StarsComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'organization', component: OrganizationComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
