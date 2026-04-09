import { Component } from '@angular/core';
import { TaskPageComponent } from './pages/task-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskPageComponent],
  template: `<app-task-page></app-task-page>`,
})
export class AppComponent {}
