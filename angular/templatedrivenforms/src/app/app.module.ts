import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './democomponent';
import { MyComponent } from './my/my.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DemoDirective } from './demo.directive';
import { EvenoddPipe } from './evenodd.pipe';
import { GreetService } from './greet.service';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,DemoComponent, DemoDirective, EvenoddPipe
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
