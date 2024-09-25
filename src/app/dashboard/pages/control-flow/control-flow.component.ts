import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

type Grade = 'A'|'B'|'F';
@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [
    CommonModule, TitleComponent
  ],
  template: `
<app-title title="Control Flow" withShadow />
  <section class="grid grid-cols-1 md:grid-cols-2 gap-3">

            <div class="bg-white rounder shadow p-10">
            <h2 class="text-2xl font-bold mb-5">if: {{showContent()}}</h2>

            <button
            class="p-2 bg-blue-500 rounded text-white"
            (click)="toggleContent()">
              Click Me
            </button>

          @if(showContent()){
            <p>Hola Mundo</p>
          }@else{
            <p>**********</p>
          }


            </div>

            <div class= "bg-white rounded shadow p-10">
            @switch(grade())
            {@case('A')
              {
            <p>Arriba de 90</p>
              }
              @case('B')
            {
            <p>Arriba de 80</p>
          }
          @default
          {

            <p>Reprobado</p>
            }
          }
            </div>

            <div class= "bg-white rounded shadow p-10">
            <ul>
              @for (framework of frameworks(); track frameworks;
              let i = $index, first = $first, last =$last, even = $even, odd= $odd, count= $count) {
              <li [class]="{
                'bg-red-100': even && !first && !last,
                'bg-purple-100': odd && !first && !last,
                'bg-blue-100': first || last
              }">{{ i + 1 }}/ {{count}} - {{framework}} </li>
            }</ul>
            </div>
            <div class="bg-white rounded shadow p-10">
            <ul> @for (framework of frameworks2(); track $index ) {
              <li>{{framework}}</li>
            } @empty {
              <li>No hay Frameworks Agregados</li>
            }
          </ul>

            </div>


            </section>



            `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ControlFlowComponent {

  public showContent = signal(false);
  public grade= signal<Grade>('A');

  public frameworks = signal (['Angular','Vue','Svelte','Qwik','React']);
  public frameworks2 = signal ([]);

  public toggleContent(){
this.showContent.update(value => !value);
  }



 }
