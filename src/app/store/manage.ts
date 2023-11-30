import { Injectable, InjectionToken } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export class BaseState {
  constructor() {}
}

@Injectable({
  providedIn: 'root',
})
export abstract class Manager<T extends BaseState> {
  private stateSubject: BehaviorSubject<T>;

  constructor(initialState: T)  {
    this.stateSubject = new BehaviorSubject<T>(initialState);
  }

  getState(): Observable<T> {
    return this.stateSubject.asObservable();
  }

  emit(newState: T): void {
    this.stateSubject.next(newState);
  }

  
  getCurrentState(): T {
    return this.stateSubject.getValue();
  }
}
