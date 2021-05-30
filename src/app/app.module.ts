import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TextMessageComponent } from './text-message/text-message.component';
import { TemplateToClassBindingComponent } from './template-to-class-binding/template-to-class-binding.component';
import {FormsModule} from '@angular/forms';
import { StructuralDerictiveComponent } from './structural-derictive/structural-derictive.component'
@NgModule({
  declarations: [
    AppComponent,
    TextMessageComponent,
    TemplateToClassBindingComponent,
    StructuralDerictiveComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
