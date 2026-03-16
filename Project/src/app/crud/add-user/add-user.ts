import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, ɵInternalFormsSharedModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveForm } from '../../forms/reactive-form/reactive-form';
import { Crud } from '../../services/crud';
import { Reusable } from '../../component-com/reusable/reusable';

@Component({
  selector: 'app-add-user',
  imports: [ReactiveFormsModule, ɵInternalFormsSharedModule, ReactiveFormsModule, Reusable],
  templateUrl: './add-user.html',
  styleUrl: './add-user.css',
})
export class AddUser {

  addUserForm : FormGroup;
    parentProperty : string = "Add User Operations"

  constructor(private router : Router, private fb : FormBuilder, private crud : Crud){
    this.addUserForm = this.fb.group({
      name: [''],
      username: [''],
      email: ['']
    });
  }

  onSubmit(){
    console.log(this.addUserForm.value);
    this.crud.postData(this.addUserForm.value).subscribe(res => {
      this.router.navigateByUrl('crud');
    });
  }

  onCancel(){
    this.router.navigateByUrl('crud');
  }
}
