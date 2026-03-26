import { Routes } from '@angular/router';
import { Hero } from './hero/hero';
import { Project } from './project/project';
import { ProjectDetail } from './project-detail/project-detail';
export const routes: Routes = [
    { path: '', component: Hero }, // Default Home
  { path: 'projects', component: Project }, // Saare projects dikhane ke liye
  { path: 'project/:id', component: ProjectDetail }, // Dynamic ID ke liye
  { path: '**', redirectTo: '' } //
];
