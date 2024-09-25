import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-user-loader',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>user-loader works!</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserLoaderComponent { }
