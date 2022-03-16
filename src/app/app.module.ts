import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TarefasComponent } from './tarefas/tarefas.component';

import { TarefasService } from './tarefas.service'

@NgModule({
  declarations: [
    AppComponent,
    TarefasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpClientModule, TarefasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
