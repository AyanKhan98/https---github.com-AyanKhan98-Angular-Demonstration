import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TextMessageComponent } from './text-message/text-message.component';
import { TemplateToClassBindingComponent } from './template-to-class-binding/template-to-class-binding.component';
import {FormsModule} from '@angular/forms';
import { StructuralDerictiveComponent } from './structural-derictive/structural-derictive.component';
import { InteracterComponentComponent } from './interacter-component/interacter-component.component';
import { PipesComponent } from './pipes/pipes.component'
import { EmployeeServiceService } from './employee-service.service';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppNotFoundComponent } from './app-not-found/app-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    TextMessageComponent,
    TemplateToClassBindingComponent,
    StructuralDerictiveComponent,
    InteracterComponentComponent,
    PipesComponent,
    routingComponents,
    AppNotFoundComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    
    
  ],
  providers: [EmployeeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
