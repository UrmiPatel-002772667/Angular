import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedData } from '../services/shared-data';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  name: string = "Urmi";
  topic: string = "Data Binding";
  image: string = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/960px-Altja_j%C3%B5gi_Lahemaal.jpg";
  random = "";
  dummyData: any;
  constructor(private shared_Data : SharedData){
      this.dummyData = this.shared_Data.userData;
  }
  onSave(){
    alert("Button Clicked!");
  }
  onChange(){
    alert("Country changed!");
  }
}
