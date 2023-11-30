import { ChangeDetectorRef, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../store/counter.reducer';
import { Manager } from '../store/manage';
@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.css'],
})
export class CounterControlsComponent extends Manager<CounterState> {
  counterState: CounterState;

  constructor(
  ) {
    const initialCounterState = new CounterState();
    super(initialCounterState);
    this.counterState = initialCounterState;
  }

  async increment() {
    const currentState = this.getCurrentState();
    this.emit(currentState.copyWith({ counter: currentState.counter ++ }));
    console.log(currentState);
  }

  decrement() {
    const currentState = this.getCurrentState();
    this.emit(currentState.copyWith({ counter: currentState.counter -- }));
    console.log(currentState);
  }
}

var controller = new CounterControlsComponent();
controller.getState