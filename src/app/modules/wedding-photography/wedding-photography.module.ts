import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { WeddingPhotographyRoutingModule } from './wedding-photography-routing.module';
import { SharedModule } from '../shared/shared.module';
import { WeddingPhotographyComponent } from './wedding-photography.component';
import { HomeComponent } from './pages';


@NgModule({
    declarations: [
      WeddingPhotographyComponent,
      HomeComponent,
    ],
    imports: [
      CommonModule,
      SharedModule,
      WeddingPhotographyRoutingModule,
    ],
    exports: [
      WeddingPhotographyComponent,
      HomeComponent,
    ],
  })
  export class WeddingPhotographyModule { }
