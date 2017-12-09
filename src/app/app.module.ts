import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PurchasedItemsComponent } from './purchased-items/purchased-items.component';
import { GenericRestService } from './services/generic-rest.service';
import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,
    PurchasedItemsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [GenericRestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
