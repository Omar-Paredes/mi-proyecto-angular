import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule, TitleComponent
  ],
  template: `
 <app-title [title]="currentFramework()" />

 <pre> {{ frameworkasSignal() | json }}</pre>
<pre> {{ frameworkasProperty | json}}</pre>

  `,
  styles: `
    :host {
      display: block;
    }
  `,
})
export default class ChangeDetectionComponent {


  public currentFramework = computed(
    () => ` Change detection - ${this.frameworkasSignal().name}`
  );
  public frameworkasSignal = signal({
  name:'Angular',
  releaseDate: 2016,
})

public frameworkasProperty = {
  name:'Angular',
  releaseDate: 2016,
};

constructor ()
{
setTimeout(()=> {

  //this.frameworkasProperty.name= 'React';
this.frameworkasSignal.update(value =>({
  ...value,
  name:'React'
}) )

console.log("Hecho");
 }, 3000);
}
 }
