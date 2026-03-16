import { Component } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  imports: [],
  templateUrl: './ngswitch.html',
  styleUrl: './ngswitch.css',
})
export class Ngswitch {
  grade: number = 0;

  set(x: number){
    this.grade = x;
  }
}
