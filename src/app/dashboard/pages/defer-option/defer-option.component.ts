import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeavyLoadersFastComponent } from '@shared/heavy-loaders/heavy-loaders-fast.component';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-defer-option',
  standalone: true,
  imports: [
    CommonModule,HeavyLoadersFastComponent, TitleComponent],
  template: `
  <app-title title="Defer Triggers" />

  <section>
    <h1 class="text-xl">Interaciones</h1>
    <hr class="my-2">

    @defer(on interaction){
    <app-heavy-loaders-fast cssClass="bg-blue-500 h-20">
    <span>On Interaction</span>

    </app-heavy-loaders-fast>

    }@placeholder {
<div class="w-full h-20 bg-purple-100"> Click en el div</div>

    }
  </section>

  <section>
    <hr class="my-2">

    <button
    #btnInteraction
    class="p-2 bg-blue-500 hover:bg-blue-700 transition-all rounder text-white my-2">
    Click Me!
    </button>

    @defer(on interaction(btnInteraction)){
    <app-heavy-loaders-fast cssClass="bg-blue-500 h-20">
    <span>On Interaction</span>

    </app-heavy-loaders-fast>

    }@placeholder {
<div class="w-full h-20 bg-purple-100"> Click en el div</div>

    }
  </section>

  <section>
    <hr class="my-2">


    @defer(on hover){
    <app-heavy-loaders-fast cssClass="bg-blue-500 h-20">
    <span>On Interaction</span>

    </app-heavy-loaders-fast>

    }@placeholder {
<div class="w-full h-20 bg-purple-100"> Click en el div</div>

    }
  </section>


  <section>
    <hr class="my-2">


    @defer(on immediate){
    <app-heavy-loaders-fast cssClass="bg-blue-500 h-20">
    <span>On Interaction</span>

    </app-heavy-loaders-fast>

    }@placeholder {
<div class="w-full h-20 bg-purple-100"> Click en el div</div>

    }
  </section>


  <section>
    <hr class="my-2">


    @defer(on timer(2000)){
    <app-heavy-loaders-fast cssClass="bg-green-500 h-20">
    <span>On Timer</span>

    </app-heavy-loaders-fast>

    }@placeholder {
<div class="w-full h-20 bg-purple-100"> 2 seg</div>

    }
  </section>

  <section>
    <hr class="my-2">


    @defer(on hover; prefetch on idle){
    <app-heavy-loaders-fast cssClass="bg-green-500 h-20">
    <span>On hover, idle</span>

    </app-heavy-loaders-fast>

    }@placeholder {
<div class="w-full h-20 bg-purple-100"> Hover</div>

    }
  </section>

  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DeferOptionComponent { }
