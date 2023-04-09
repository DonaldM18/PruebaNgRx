import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './ToDo/principal/principal.component';
import { TarjetaComponent } from './ToDo/tarjeta/tarjeta.component';

const routes: Routes = [
  {
    path: 'HomePage',
    component: PrincipalComponent
  },
  {
    path: 'Tarjeta',
    component: TarjetaComponent
  },
  {
    path: '**',
    redirectTo: 'HomePage'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
