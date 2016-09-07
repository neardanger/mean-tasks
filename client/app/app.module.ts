import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {TodosComponent} from './components/todos.component';
import {TodoService} from './services/todo.service'
import {HTTP_PROVIDERS} from '@angular/http'


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,TodosComponent ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }