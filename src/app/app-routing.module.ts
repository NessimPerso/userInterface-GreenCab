import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormConnexionComponent } from './form-connexion/form-connexion.component';
import { FormInscriptionComponent } from './form-inscription/form-inscription.component';

const routes: Routes = [
  {path:'connexion', component: FormConnexionComponent},
  {path:'inscription', component: FormInscriptionComponent},
  {path:'**', redirectTo:'/connexion'},
  {path:'', redirectTo:'/connexion', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
