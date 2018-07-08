import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task-class';

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.css"]
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  _id: string;
  group: string;
  points: number;
  content: string;


  constructor() {}


  addPoints () {
    this._id = this.task._id;
    this.group = this.task.group;
    console.log(this._id);
    console.log(this.group);
    

    this.points++
    console.log(this.task._id)
  }

  status:boolean = false;

  showContent(){
    this.status = !this.status;
    console.log("clicked")
  }


  ngOnInit() {
    this.points =  this.task.points;
    //console.log(this.task);
    
  }
}
