import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './components/contato/contato.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SobreComponent } from './components/sobre/sobre.component';

const routes: Routes = [
  {path:'', component: LandingPageComponent},
  {path:'sobre', component: SobreComponent},
  {path:'contato', component: ContatoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
