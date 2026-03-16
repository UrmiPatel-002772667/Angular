import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Ngif } from "./ngif/ngif";
import { Ngfor } from "./ngfor/ngfor";
import { Ngswitch } from "./ngswitch/ngswitch";

@Component({
  selector: 'app-directives',
  imports: [Ngif, Ngfor, Ngswitch],
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})
export class Directives {
  constructor(private router : Router){}

}
