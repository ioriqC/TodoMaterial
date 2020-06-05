import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  todoForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.todoForm = this.fb.group({
      title: null,
      description: null,
      author: null,
      priority: null,
      deadline: null,
    });
  }

  ngOnInit(): void {
  }

}
