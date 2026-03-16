import { Component, OnInit } from '@angular/core';
import { SharedData } from '../services/shared-data';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile implements OnInit {
  dummyData: any;
  isEligible: boolean;
  apiData : any;

  constructor(private shared_Data : SharedData){
    this.dummyData = this.shared_Data.userData;
    this.isEligible = this.shared_Data.isELigibleForSubscription();
  }
  ngOnInit(): void {
    this.getData()
  }
  getData(){
    this.shared_Data.getUserData().subscribe(res => {
      this.apiData = res;
    })
  }

  // userData = {
  //   id: 1, 
  //   name: "urmi",
  //   username: "urmi",
  //   email: "urmi@abc.com"
  // }
}
