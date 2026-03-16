import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  @Input() childInputProperty : string = "";
  @Output() childOutputProperty = new EventEmitter<any>();

  sendData(){
    this.childOutputProperty.emit("This is child component Data.");
  }
}

