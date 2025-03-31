import { Routes } from '@angular/router';

import { routes as userRoutes } from './users/users.routes';
import { NoTaskComponent } from './tasks/no-task/no-task.component';
import {
  resolveTitle,
  resolveUserName,
  UserTasksComponent,
} from './users/user-tasks/user-tasks.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: NoTaskComponent,
    title: 'No Task selected',
  },
  {
    path: 'users/:userId', // <your-domain>/users/user1/<uid>
    component: UserTasksComponent,
    children: userRoutes,
    data: {
      message: 'Hello',
    },
    resolve: {
      userName: resolveUserName,
    },
    title: resolveTitle,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
