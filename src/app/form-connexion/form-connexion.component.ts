import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountService } from '../services/account.service';


@Component({
  selector: 'app-form-connexion',
  templateUrl: './form-connexion.component.html',
  styleUrls: ['./form-connexion.component.scss']
})
export class FormConnexionComponent implements OnInit {

  connexionForm !: FormGroup;

  constructor(private fb : FormBuilder,private router: Router, private accountService:AccountService) {
   }

   ngOnInit(): void {
	this.initForm();
  }

   initForm() {
    this.connexionForm = this.fb.group({
      mail:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]],
      });
   }

   public connect(){
	   if (this.connexionForm.valid){
		   this.accountService.login(this.connexionForm.get('mail')?.value, this.connexionForm.get('password')?.value);
	   }
   }
}
