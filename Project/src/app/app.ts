import { ChangeDetectorRef, Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  constructor(private cdr : ChangeDetectorRef){}
  protected readonly title = signal('angular_prj');
  ngOnInit(): void {
    this.cdr.detectChanges();
  }
  
}
