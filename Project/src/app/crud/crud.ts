import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Crud } from '../services/crud';
import { Iuser } from '../interfaces/iuser';
import { Router } from '@angular/router';
import { Reusable } from '../component-com/reusable/reusable';
@Component({
  selector: 'app-crud',
  imports: [Reusable ],
  templateUrl: './crud.html',
  styleUrl: './crud.css',
})
export class CRUD implements OnInit{

  parentProperty : string = "CRUD Operations"
  api_data : Iuser[] = [];

  constructor(private crud : Crud, private router : Router, private cdr: ChangeDetectorRef ){}

    
  getAllData(){
    this.crud.getData().subscribe(res => {
      this.api_data = res;
      this.cdr.detectChanges();
    })
  }

  ngOnInit(): void {
    this.getAllData();
  }
  addNewUser(){
    this.router.navigateByUrl('adduser');
  }

  onUpdate(id : number){
    this.router.navigate(['updateuser',id]);
  }

  onView(id : number){
    this.router.navigate(['viewuser', id]);
  }
  onDelete(id: number){
    this.crud.deleteDataById(id).subscribe(res => {
      alert("Record Deleted Successfully!");
      this.getAllData();
    })
  }
}
