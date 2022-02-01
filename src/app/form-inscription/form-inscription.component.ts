import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { User } from '../models/user';

@Component({
  selector: 'app-form-inscription',
  templateUrl: './form-inscription.component.html',
  styleUrls: ['./form-inscription.component.scss']
})
export class FormInscriptionComponent implements OnInit {
	
	inscriptionForm !: FormGroup;

	constructor(private fb : FormBuilder,private router: Router, private accountService:AccountService) {
	 }
  
	 ngOnInit(): void {
	  this.initForm();
	}
  
	 initForm() {
	  this.inscriptionForm = this.fb.group({
		firstName : ['', [Validators.required]] ,
		lastName :['',[Validators.required]] ,
		age :['',[Validators.required]] ,
		mail:['',[Validators.required,Validators.email]],
		comment:['',[Validators.required]],
		});
	 }

	public register(){
		if (this.inscriptionForm.valid){
			this.accountService.register(this.inscriptionForm.value);
		}
	}
}
