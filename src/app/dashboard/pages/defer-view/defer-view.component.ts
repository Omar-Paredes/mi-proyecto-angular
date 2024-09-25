import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-defer-view',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>defer-view works!</p>`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DeferViewComponent { }
