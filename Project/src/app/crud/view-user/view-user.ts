import { ChangeDetectorRef, Component } from '@angular/core';
import { Crud } from '../../services/crud';
import { ActivatedRoute, Router } from '@angular/router';
import { Reusable } from '../../component-com/reusable/reusable';

@Component({
  selector: 'app-view-user',
  imports: [Reusable],
  templateUrl: './view-user.html',
  styleUrl: './view-user.css',
})
export class ViewUser {
      parentProperty : string = "VIew User Operations"

  userData : any;
  userId : any;

  constructor(private crud : Crud, private activeRoute : ActivatedRoute, private router : Router, private cdr : ChangeDetectorRef){}
  
  ngOnInit(): void {
    this.userId = this.activeRoute.snapshot.params['id']
    
    console.log(this.userId);

    this.crud.getDataById(this.userId).subscribe(res => {
      this.userData = res;
      this.cdr.detectChanges();

    });
    
  }

  onClose(){
    this.router.navigateByUrl('crud');
  }
}
