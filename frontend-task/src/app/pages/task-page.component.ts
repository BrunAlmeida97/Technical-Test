import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../services/task.service';
import { TaskItem } from '../models/task.model';

@Component({
  selector: 'app-task-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-page.component.html',
  styleUrl: './task-page.component.css',
})
export class TaskPageComponent {
  private taskService = inject(TaskService);

  tasks: TaskItem[] = [];
  isSaving = false;
  deletingTaskId: number | null = null;
  newTask: TaskItem = {
    title: '',
    description: '',
    priority: 'Normal',
    status: 'Not Started',
  };

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe((data) => {
      this.tasks = data;
    });
  }

  addTask() {
    this.isSaving = true;

    this.taskService.createTask(this.newTask).subscribe({
      next: (createdTask) => {
        this.tasks.unshift(createdTask);

        this.newTask = {
          title: '',
          description: '',
          priority: 'Normal',
          status: 'Not Started',
        };

        this.isSaving = false;
      },
      error: () => {
        this.isSaving = false;
      },
    });
  }

  deleteTask(id: number) {
    this.deletingTaskId = id;

    this.taskService.deleteTask(id).subscribe({
      next: () => {
        this.tasks = this.tasks.filter((task) => task.id !== id);
        this.deletingTaskId = null;
      },
      error: () => {
        this.deletingTaskId = null;
      },
    });
  }
}
