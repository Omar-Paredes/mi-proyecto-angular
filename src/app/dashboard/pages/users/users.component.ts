import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UserService } from '@services/users.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>users works!</p>`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UsersComponent {


public UserService = inject(UserService)


}
