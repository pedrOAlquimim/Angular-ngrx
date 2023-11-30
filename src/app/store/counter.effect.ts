import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { CounterState } from './counter.reducer';

@Injectable()
export class CounterEffect {
  constructor(private action$: Actions, private counterState: CounterState) {}

  saveCount = createEffect(() => this.action$.pipe(
    tap(action => {
      console.log(action);
      localStorage.setItem('count', this.counterState.counter.toString());
    })
  ), { dispatch: false });
}
