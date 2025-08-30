import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../models/task';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './form.html',
  styleUrl: './form.css'
})
export class Form implements OnInit {
  taskName: string = '';
  tasks : Task[] = [];



  ngOnInit() : void {
    const storedtasks = localStorage.getItem('tasks');
    if (storedtasks) {
      this.tasks = JSON.parse(storedtasks);
    }
  } 

  handleSubmit() {
    if(this.taskName.trim().length != 0) {
      const newUser: Task = {
        taskName: this.taskName
      };
      this.tasks.push(newUser);
      console.log(this.tasks);
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
      this.taskName = '';
      
    }
    
  }


  handleDelete(index: number) {
    this.tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  handleStrike(index: number) {
    const taskElements = document.getElementsByClassName('taskname');
    const item =  taskElements[index] as HTMLElement;
    item.style.textDecoration = item.style.textDecoration == 'line-through' ? 'none' : 'line-through';

  }


}
