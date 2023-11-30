import { createReducer, on } from "@ngrx/store";
import { decrement, increment } from "./counter.actions";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { BaseState } from "./manage";


export class CounterState extends BaseState{
  isLoading: boolean;
  isLoaded: boolean;
  counter: number;
  todoList: Array<string>

  constructor() {
    super()
    this.isLoading = false;
    this.isLoaded = false;
    this.counter = 0;
    this.todoList = []
  }

  
  private counterSubject = new BehaviorSubject<CounterState>(this);

  copyWith({
    isLoading = this.isLoading,
    isLoaded = this.isLoaded,
    counter = this.counter,
    todoList = this.todoList
  }: Partial<CounterState>): CounterState {
    const copied = new CounterState();
    copied.isLoading = isLoading;
    copied.isLoaded = isLoaded;
    copied.counter = counter;
    copied.todoList = todoList;

    this.counterSubject.next(copied);
    return copied;
  }
}

export const counterReducer = createReducer(
  CounterState,
)