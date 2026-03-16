import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sibling2',
  imports: [],
  templateUrl: './sibling2.html',
  styleUrl: './sibling2.css',
})
export class Sibling2 {
  @Input() sibling2Data : string = "";

  @Output() sibling2Property = new EventEmitter<any>();

  onSend(data : any){
    this.sibling2Property.emit(data);
  }
}
