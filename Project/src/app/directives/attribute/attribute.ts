import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute',
  imports: [CommonModule, FormsModule],
  templateUrl: './attribute.html',
  styleUrl: './attribute.css',
})
export class Attribute {
  textColor : string = 'text-success';

  changeColor(color: string){
    this.textColor = color;
  }

  isTextGreen : boolean = false;

  userClass : string ='';

  styleColor : string = "orange";
  updateColor(ngStyleColor: string){
    this.styleColor = ngStyleColor;
  }

  isTextOrange: boolean = false;

  customClass : any ={
    'color' : 'pink',
    'height' : '120px',
    'width' : '300px',
    'border' : '1px solid black'
  };

}
