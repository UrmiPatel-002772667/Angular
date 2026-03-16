import { ChangeDetectionStrategy, Component, effect, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Signals {
  ncounter = 0;
  counter = signal(0);
  //counter : WritableSignal<number> = signal(0);

  constructor(){
    this.counter.set(5);
    effect(() => console.log(`Counter Value => ${this.counter()}`));
    // setTimeout(() => {
    //   // this.ncounter = 50;
    //   this.counter.set(30);
    //   console.log("Normal Cpunter Value => " + this.counter());
    // }, 5000)
  }
  onIncrement(){
    this.counter.update(initialValue => initialValue + 1);
  }
}
