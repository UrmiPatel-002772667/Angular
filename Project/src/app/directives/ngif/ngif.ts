import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ngif',
  imports: [FormsModule],
  templateUrl: './ngif.html',
  styleUrl: './ngif.css',
})
export class Ngif {
  isChecked: boolean = false;
  isInput: boolean = true;
  input1: string = '';
  input2: string = '';

  onClick(){
    this.isChecked = !this.isChecked;
  }
  showField(){
    this.isInput = true;
  }
  hideField(){
    this.isInput = false;
  }
}
