import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  toDoStream: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  todoFromStream: any = [];
  constructor() { }

  changeToDo(todo: object, type: any): void {
    console.log('todo::', todo);
    this.todoFromStream.push(todo);
    console.log('todoFromStream::', this.todoFromStream);
    // this.toDoStream.next(this.todoFromStream); // Emit new value
  }

  changeToDoObserve(elem: any, type: any): any {
    console.log('todo::', this.todoFromStream);
    if (type === 'add') {
      this.todoFromStream.push(elem);
    } else if (type === 'remove') {
      this.todoFromStream = this.todoFromStream?.filter((e: any, index: any) => e?.id !== elem?.id);
    } else if (type === 'reset') {
      this.todoFromStream = [];
    } else if (type === 'edit') {
      this.todoFromStream = this.todoFromStream?.map((e: any, index: any) => {
        console.log('e:::',e,'elem::',elem);
        if (e?.id === elem?.id) {
          return {
            ...e,
            val: elem?.val
          }
        }else{
          return e;
        }

      })
    }

    this.toDoStream.next(this.todoFromStream); // Emit new value
  }
}
