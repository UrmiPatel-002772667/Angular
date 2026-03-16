import { Component, OnInit } from '@angular/core';
import { Crud } from '../../services/crud';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Reusable } from '../../component-com/reusable/reusable';

@Component({
  selector: 'app-update-user',
  imports: [ReactiveFormsModule, Reusable],
  templateUrl: './update-user.html',
  styleUrl: './update-user.css',
})
export class UpdateUser implements OnInit{

  updateUserForm : FormGroup;
  userData : any;

  userId : any;
    parentProperty : string = "Update User Operations"

  constructor(private crud : Crud, private activeRoute : ActivatedRoute, private router : Router, private fb : FormBuilder){
    this.updateUserForm = this.fb.group({
      id: [],
      name: [''],
      username: [''],
      email: ['']
    });
  }


  ngOnInit(): void {
    this.userId = this.activeRoute.snapshot.params['id']
    
    console.log(this.userId);

    this.crud.getDataById(this.userId).subscribe(res => {
      this.userData = res;
      this.updateUserForm.setValue({id: this.userData.id, name : this.userData.name, username: this.userData.username, email : this.userData.email})

    });
    
  }

  onSubmit(){
    console.log(this.updateUserForm.value);
    this.crud.putDataById(this.userId, this.updateUserForm.value).subscribe(res =>{
      this.router.navigateByUrl('crud');
    })
  }

  onCancel(){
    this.router.navigateByUrl('crud');
  }
}
