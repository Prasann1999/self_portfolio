import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  host: {
    'class': 'custom-class-component_common'
  }
})
export class TodoComponent implements OnInit {
  value = '';
  list: any = [];
  edit: any = {};

  addClick() {
    console.log('addClick', this.value);
    if (this.value?.trim().length === 0) {
      this.alertService.changeAlertType('Please add some text', 'warning');
      return
    }
    this.toDoService.changeToDoObserve({
      val: this.value,
      id: new Date().getTime(),
    }, 'add');
    this.value = '';
  }
  editClick() {
    if (this.value?.trim().length === 0) {
      this.alertService.changeAlertType('Please add some text', 'warning');
      return
    }
    this.edit = {
      ...this.edit,
      val: this.value
    }
    this.toDoService.changeToDoObserve(this.edit, 'edit');
    this.edit = {};
    this.value = '';
  }
  resetClick() {
    this.toDoService.changeToDoObserve({}, 'reset');
    this.edit = {};
    this.value = '';
  }
  removeToDo(todo: any) {
    this.toDoService.changeToDoObserve(todo, 'remove');
    this.edit = {};
    this.value = '';
  }
  editToDo(todo: any) {
    console.log('todo::', todo);
    this.edit = todo;
    this.value = todo?.val;
  }
  constructor(
    private toDoService: TodoService,
    private alertService: AlertService,
  ) { }

  ngOnInit(): void {
    this.toDoService.toDoStream.subscribe((elem) => {
      this.list = elem;
      console.log('toDoStream::', elem);
    })
    // this.toDoService.changeToDoObserve(this.list).subscribe((elem: any) => {
    //   console.log('changeToDoObserve', elem);
    // });
  }

}
