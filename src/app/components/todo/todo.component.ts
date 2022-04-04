import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  private API_URL = 'http://localhost:8000/api/todos';

  constructor(private http:HttpClient) { }

  todoList:any[]=[];
  todoList1:any[]=[];
  todoList2:any[]=[];
  todoList3:any[]=[];
  todoList4:any[]=[];
  todoList5:any[]=[];
  
  search!:string; search2!:string; search3!:string;

  ngOnInit(): void {
    // this.http.get(this.API_URL)
    // .subscribe((res:any)=>{
    //   // console.log(res.todo_list);
    //   this.todoList = res.todo_list;
    //   this.todoList1 = res.todo_list;
    //   this.todoList2 = res.todo_list;
    //   this.todoList3 = res.todo_list;
    //   this.todoList4 = res.todo_list;
    //   this.todoList5 = res.todo_list;
    // })

    this.http.get(this.API_URL)
    .subscribe((res:any)=>{
      this.todoList = res.todo_list;
    })
    this.http.get(this.API_URL)
    .subscribe((res:any)=>{
      this.todoList1 = res.todo_list;
    })
    this.http.get(this.API_URL)
    .subscribe((res:any)=>{
      this.todoList2 = res.todo_list;
    })
    this.http.get(this.API_URL)
    .subscribe((res:any)=>{
      this.todoList3 = res.todo_list;
    })
    this.http.get(this.API_URL)
    .subscribe((res:any)=>{
      this.todoList4 = res.todo_list;
    })
    this.http.get(this.API_URL)
    .subscribe((res:any)=>{
      this.todoList5 = res.todo_list;
    })

  }

}
