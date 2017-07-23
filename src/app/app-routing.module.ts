import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './pages/onboarding/login/login.component';
import {HomeComponent} from './pages/home/home.component';
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, children: [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
