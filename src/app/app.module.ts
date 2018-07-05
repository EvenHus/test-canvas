import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularCropperjsModule} from 'angular-cropperjs';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularCropperjsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
