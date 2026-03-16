import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-reusable',
  imports: [],
  templateUrl: './reusable.html',
  styleUrl: './reusable.css',
})
export class Reusable {
  @Input() childProperty : string = "Hello All : Welcome!";

  @HostListener('click')
  onClick(){
    console.log("Button Clicked.")
  }
}
