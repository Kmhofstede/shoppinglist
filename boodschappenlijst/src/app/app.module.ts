import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GroceryComponent } from './grocery/grocery.component';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    GroceryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
