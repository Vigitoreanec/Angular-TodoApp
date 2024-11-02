import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'routing-app-TODO';
  todos: any[] = [];
  idCreate = Math.random();
  styleSpan = 'text-decoration: line-through;';
  onChecked: boolean = false;

  addTodo(newTodo: string) {
    this.todos.push({ id: this.todos.length, text: newTodo, checked: this.onChecked });
    console.debug(this.todos);
  }

  isCompleted() {
    this.onChecked = !this.onChecked;
  }

  deleteTodo(id: number) {
    this.todos.splice(id, 1);
  }
}
