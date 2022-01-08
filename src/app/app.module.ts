import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormConnexionComponent } from './form-connexion/form-connexion.component';
import { FormInscriptionComponent } from './form-inscription/form-inscription.component';

@NgModule({
  declarations: [
    AppComponent,
    FormConnexionComponent,
    FormInscriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
