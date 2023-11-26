import { Actions, createEffect, ofType } from "@ngrx/effects";
import { decrement, increment } from "./counter.actions";
import { tap } from "rxjs/operators";
import { Injectable } from "@angular/core";

@Injectable()
export class CounterEffect {
  constructor(private action$: Actions) {}

  saveCount = createEffect(() => this.action$.pipe(
    ofType(increment, decrement),
    tap((action) => {
      console.log(action)
      localStorage.setItem('count', action.value.toString())
    }),
  ), {dispatch: false})
}