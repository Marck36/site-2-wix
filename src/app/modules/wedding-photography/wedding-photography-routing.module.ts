import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./pages/home/home.component";
import { WeddingPhotographyComponent } from './wedding-photography.component';

const routes: Routes = [
  {
    path: '', component: WeddingPhotographyComponent,
    children: [
      { path: '', component: HomeComponent, },
      { path: 'home', component: HomeComponent, },
      { path: 'weddingphotography', component: WeddingPhotographyComponent, },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:  [RouterModule],
})
export class WeddingPhotographyRoutingModule {}
