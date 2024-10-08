import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidemenuComponent } from '@shared/sidemenu/sidemenu.component';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ RouterModule, SidemenuComponent ],
  template: `
  <div class="flex bg-slate-100 text-black overflow-y-scroll w-screen h-screen antialiased selection:bg-blue-600 selection:text-white">
      <div class="flex relative w-screen">
      <app-sidemenu></app-sidemenu>
      <div class="text-black px-2 mt-2 w-full">
      <router-outlet></router-outlet>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DashboardComponent { }
