import { Component, computed, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-linked',
  imports: [],
  templateUrl: './linked.html',
  styleUrl: './linked.css',
})
export class Linked {
  quantity = signal(1);
  price = 10;

  // total = computed(() => {
  //   return this.quantity() * this.price;
  // })

  //shorthand linked signal
  // total = linkedSignal(() => {
  //   return this.quantity() * this.price;
  // });

  total = linkedSignal({
    source: this.quantity,
    computation: () => this.quantity() * this.price,
  })
  calculate(){
    this.quantity.set(2);
  }
}
