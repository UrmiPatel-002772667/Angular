import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sibling1',
  imports: [],
  templateUrl: './sibling1.html',
  styleUrl: './sibling1.css',
})
export class Sibling1 {

  @Input() sibling1Input : string = "";
  @Output() sibling1Output = new EventEmitter<any>();

  onSubmit(data : any){
    this.sibling1Output.emit(data);
  }
}
