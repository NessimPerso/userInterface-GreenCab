import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormConnexionComponent } from './form-connexion/form-connexion.component';

const routes: Routes = [
  {path:'connexion', component: FormConnexionComponent},
  {path:'**', redirectTo:'/connexion'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
