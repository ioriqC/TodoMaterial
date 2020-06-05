import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';



@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit {

  todoForm: FormGroup;

  constructor( private fb: FormBuilder ) { 
    this.todoForm = this.fb.group({
      title: [null, [Validators.required, Validators.minLength(3)]],
      description: [null, [Validators.required, Validators.minLength(10)]],
      author: [null, [Validators.required, Validators.minLength(5)]],
      priority: [null, [Validators.required, Validators.minLength(3)]],
      deadline: [null, [Validators.required, Validators.minLength(5)]],
    });
  }

  ngOnInit(): void {
    console.log('todo form::', this.todoForm);

    this.todoForm.valueChanges.subscribe(todo => console.log('todo::', todo, 'todo form::', this.todoForm));
  }

}
