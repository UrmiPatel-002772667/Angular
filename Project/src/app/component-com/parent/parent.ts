import { AfterViewInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { Child } from "../child/child";
import { Sibling1 } from '../sibling1/sibling1';
import { Sibling2 } from '../sibling2/sibling2';
import { Reusable } from '../reusable/reusable';

@Component({
  selector: 'app-parent',
  imports: [Child, Sibling1, Sibling2, Reusable],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent implements AfterViewInit{
  parentProperty : string = "This is the parent component data";
  receiveMsg : string = "";

  receiveData( data : any ){
    this.receiveMsg = data;
  }
  sibling1Data : string ="";

  receiveEvent1(data : any){
    this.sibling1Data = data;
  }

  sibling2Data : string = "";

  receiveEvent2(data : any){
    this.sibling2Data = data;
  }

  @ViewChild('reusable')  reusableComp! : Reusable ;

  constructor (private cdr : ChangeDetectorRef){}
  ngAfterViewInit(): void {
    this.reusableComp.childProperty = "Greeting from Parent Component!"
    this.cdr.detectChanges();
  }
}
