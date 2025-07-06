import { Routes } from '@angular/router';
import { ViewCommentsComponent } from './pages/view-comments/view-comments.component';
import { AddCommentsComponent } from './pages/add-comments/add-comments.component';

export const routes: Routes = [
  { path: 'view', component: ViewCommentsComponent },
  { path: 'add', component: AddCommentsComponent },
  { path: '**', redirectTo: 'add' },
];
