import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css',
})
export class ReactiveForm {
  reactiveForm : FormGroup;

  constructor(private fb : FormBuilder){
    // this.reactiveForm = new FormGroup({
    //   firstName: new FormControl(""),
    //   lastName: new FormControl(""),
    //   email: new FormControl(""),
    //   password: new FormControl(),
    //   isCheck: new FormControl(),
    //   address: new FormGroup({
    //     city: new FormControl(""),
    //     street: new FormControl(""),
    //     pincode: new FormControl()
    //   })

    this.reactiveForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern("^[a-zA-Z]+$")]],
      lastName: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.maxLength(15), Validators.email]],
      password: ['',[Validators.required]],
      isCheck: [],
      address: this.fb.group({
        city: [''],
        street: [''],
        pincode: []
      }),
      skills: this.fb.array([])
    })
    this.reactiveForm.controls['isCheck'].disable();
  }

  get skills() : FormArray{
    return this.reactiveForm.get("skills") as FormArray
  }
  newSkill() : FormGroup{
    return this.fb.group({
      skill: ''
    })
  }
  addSkill(){
    this.skills.push(this.newSkill());
  }
  deleteSkill(i:number){
    this.skills.removeAt(i);
  }
  onSubmit(){
    console.log(this.reactiveForm.value);
  }

  setValue(){
    this.reactiveForm.setValue({
      firstName: "Urmi",
      lastName: "Patel",
      email: "urmi@gmail.cm",
      password: 11323,
      isCheck: true,
      address: {
        city: "Himatnagar",
        street: "Khed Tasiya Road",
        pincode: 383001
      },
      skills: ['Java', 'Python', 'HTML']
    })
  }
  patchValue(){
    this.reactiveForm.patchValue({
      address: {
        city: "Himatnagar",
        street: "Khed Tasiya Road",
        pincode: 383001
      }
    })
    //this.reactiveForm.controls['firstName'].patchValue("Urmi")
  }
  resetValue(){
    this.reactiveForm.reset()
  }

}
