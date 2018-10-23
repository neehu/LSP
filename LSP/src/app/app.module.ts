import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {ComponentsModule} from './components/components.module'
import { AppComponent } from './app.component';
import {ToastMessageComponent} from './components/toast-message/toast-message.component';

 



@NgModule({
  declarations: [
    AppComponent,
    ToastMessageComponent
  ],
  imports: [
    BrowserModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA] 
})
export class AppModule { }
