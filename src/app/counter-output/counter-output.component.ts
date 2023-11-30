import { ChangeDetectorRef, Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CounterState } from '../store/counter.reducer';
import { Manager } from '../store/manage';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent implements OnInit {
  state$?: Observable<CounterState>;

  constructor(
    @Inject(Manager) private counterStateManager: Manager<CounterState>,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.state$ = this.counterStateManager.getState().pipe(
      tap((currentState) => currentState)
    );

    this.counterStateManager.getState().subscribe(() => {
      this.cdr.detectChanges();
    });
  }
}
