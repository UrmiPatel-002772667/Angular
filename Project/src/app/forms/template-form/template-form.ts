import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../../interfaces/user';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule],
  templateUrl: './template-form.html',
  styleUrl: './template-form.css',
})
export class TemplateForm implements OnInit{
  userObj : User = {};

  onSubmit(userForm : NgForm){
    console.log(userForm.value);
  }
  ngOnInit(): void {
    // this.userObj = {
    //   firstName: "Urmi",
    //   lastName: "Patel",
    //   email: "urmi@gmail.com",
    //   password: 11323,
    //   isCheck: true,
    // }
  }
  setValues(userForm : NgForm){
    let obj = {
      firstName: "Urmi",
      lastName: "Patel",
      email: "urmi@gmail.cm",
      password: 11323,
      isCheck: true,
    }
    userForm.setValue(obj);
  }
  patchValues(userForm : NgForm){
    let obj = {
      firstName: "Urmi",
      lastName: "Patel",
      email: "urmi@abc.com",
    }
    userForm.control.patchValue(obj);
  }
  resetValues(userForm : NgForm){
    //userForm.reset();
    userForm.resetForm();
  }
}
