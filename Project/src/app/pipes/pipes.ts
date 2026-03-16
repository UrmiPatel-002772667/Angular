import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { of } from 'rxjs';
import { CustomPipe } from './custom-pipe';

@Component({
  selector: 'app-pipes',
  imports: [CommonModule, CustomPipe],
  templateUrl: './pipes.html',
  styleUrl: './pipes.css',
})
export class Pipes {

  mobileNum : any = '9807654321';
  angularPipes : string = "use pipes to format data in templates";
  
  person = {
    name: 'Urmi',
    age: 25,
    email: 'urmi@gmail.com'
  }

  currentDate : Date = new Date();

  items = of(['Apple', 'Bananan', 'Mango'])

}
