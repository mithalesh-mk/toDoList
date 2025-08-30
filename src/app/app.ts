import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Form } from "./form/form";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [Form, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('toDoList');
}
