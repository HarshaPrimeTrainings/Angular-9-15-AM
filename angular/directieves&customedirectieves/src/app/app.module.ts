import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './democomponent';
import { MyComponent } from './my/my.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DemoDirective } from './demo.directive';

@NgModule({
  declarations: [
    AppComponent,DemoComponent, MyComponent, HomeComponent, LoginComponent, DemoDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
