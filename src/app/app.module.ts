import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from "@ngrx/store";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './ToDo/principal/principal.component';
import { TarjetaComponent } from './ToDo/tarjeta/tarjeta.component';
import { ReactiveFormsModule } from '@angular/forms';
import { todoReducer } from './ToDo/ToDo.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    TarjetaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ todo: todoReducer }),
    StoreDevtoolsModule.instrument({
      maxAge:25,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
