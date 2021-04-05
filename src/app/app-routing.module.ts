import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsumerFicheComponent } from './consumer/consumer-fiche/consumer-fiche.component';
import { ConsumerListeComponent } from './consumer/consumer-liste/consumer-liste.component';
import { HomeComponent } from './home/home.component';
import { AuthenticationGuard } from './login/authentication.guard';
import { LoginComponent } from './login/login.component';

export const url = {
  login: 'login',
  home: 'home',
  consumers: 'consumers',
  nouveau: 'nouveau'
}


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent, canActivate: [AuthenticationGuard]},
  { path: 'nouveau', component: ConsumerFicheComponent, canActivate: [AuthenticationGuard]},
  { path: 'edit/:id', component: ConsumerFicheComponent, canActivate: [AuthenticationGuard]},
  { path: 'consumers', component: ConsumerListeComponent, canActivate: [AuthenticationGuard]},
  { path: '**', redirectTo: 'home', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
