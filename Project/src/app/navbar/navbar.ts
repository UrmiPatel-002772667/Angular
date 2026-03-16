import { Component, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})

export class Navbar {

  constructor(){

  }
  activeDropdown = signal<string | null>(null);
  mobileMenuOpen = signal(false);

  toggleDropdown(label: string) {
    this.activeDropdown.update(current => current === label ? null : label);
  }

  closeDropdown() {
    this.activeDropdown.set(null);
  }

  toggleMobileMenu() {
    this.mobileMenuOpen.update(v => !v);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.nav-item')) {
      this.activeDropdown.set(null);
    }
  }
}