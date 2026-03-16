import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Resource } from '../services/resource';

@Component({
  selector: 'app-resource-api',
  imports: [],
  templateUrl: './resource-api.html',
  styleUrl: './resource-api.css',
})
export class ResourceApi implements OnInit{

  constructor(private resource : Resource, private cdr : ChangeDetectorRef){

  }

  apiData : any;

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    // this.resource.getAllData().subscribe(res => {
    //   this.apiData = res;
    //   this.cdr.detectChanges();
    // })
   // this.apiData = this.resource.rxResourceData;
   this.apiData = this.resource.resourceData;
  }
}
