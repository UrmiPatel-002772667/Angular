import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor(private router: Router){
    console.log("constructor called")
  }

  ngOnChanges(changes: SimpleChanges): void {
    //used for component input property
    console.log("1. ngOnChanges called")
  }

  ngOnInit(): void {
    //usefor API call
    console.log("2. ngOnInit called")
  }

  ngDoCheck(): void {
    //Use for every change detection
    console.log("3. ngDoCheck Called")
  }
  ngAfterContentInit(): void {
    //use for ng-content
    console.log("4. ngAfterContentInit Called")    
  }

  ngAfterContentChecked() : void {
    //after ng-content has been checked 
    console.log("5. ngAfterContentChecked Called")    
  }

  ngAfterViewInit(): void {
    //use for viewChild
    console.log("6. ngAfterViewInit Called")   
  }

  ngAfterViewChecked(): void {
    //after view is checked
    console.log("7. ngAfterViewChecked Called")    
  }

  ngOnDestroy() : void {
    // before componwnt is destroyed
    console.log("8. ngOnDestroy Called")    
  }

  loginData(){
   // this.router.navigateByUrl("structural-directive")
   this.router.navigate(['structural-directive'])
  }
}
