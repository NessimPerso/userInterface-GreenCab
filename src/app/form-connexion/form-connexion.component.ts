import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-form-connexion',
  templateUrl: './form-connexion.component.html',
  styleUrls: ['./form-connexion.component.scss']
})
export class FormConnexionComponent implements OnInit {

  connexionForm !: FormGroup;

  constructor(private fb : FormBuilder,private router: Router) {
   }

   ngOnInit(): void {
	this.initForm();
  }

   initForm() {
    this.connexionForm = this.fb.group({
      firstName : ['', [Validators.required]] ,
      lastName :['',[Validators.required]] ,
      phoneNumber :['',[Validators.required]] ,
      mail:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]],
      });
   }



}
