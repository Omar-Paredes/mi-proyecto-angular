import { Routes } from '@angular/router';

export const routes: Routes = [

{
  path: 'dashboard',
  loadComponent:() => import('./dashboard/dashboard.component'),
  children: [
  {
    path: 'change-detecion',
    title: 'Change Detection',
    loadComponent: () => import('./dashboard/pages/change-detection/change-detection.component'),
  },
  {
    path: 'control-flow',
    title: 'Control Flow',
    loadComponent: () => import('./dashboard/pages/control-flow/control-flow.component'),
  },
  {
    path: 'defer-option',
    title: 'Defer Option',
    loadComponent: () => import('./dashboard/pages/defer-option/defer-option.component'),
  },
  {
    path: 'defer-view',
    title: 'Defer View',
    loadComponent: () => import('./dashboard/pages/defer-view/defer-view.component'),
  },
  {
    path: 'user/:id',
    title: 'User View',
    loadComponent: () => import('./dashboard/pages/user/user.component'),
  },
  {
    path: 'user-list',
    title: 'User List',
    loadComponent: () => import('./dashboard/pages/users/users.component'),
  },
  {
    path: 'view-transition-1',
    title: 'View Transition 1',
    loadComponent: () => import('./dashboard/pages/view-transition/view-transition1.component'),
  },
  {
    path: 'view-transition-2',
    title: 'View Transition 2',
    loadComponent: () => import('./dashboard/pages/view-transition/view-transition2.component'),
  },
  {
    path:'', redirectTo: 'control-flow', pathMatch: 'full',
  }
  ]
},
{
  path: '',
  redirectTo: '/dashboard',
  pathMatch: 'full'
}



];
