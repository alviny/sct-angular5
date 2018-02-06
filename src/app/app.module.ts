import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { PurchasedItemsComponent } from './purchased-items/purchased-items.component';
import { GenericRestService } from './services/generic-rest.service';
import { HttpModule } from '@angular/http';
import { GridModule } from '@progress/kendo-angular-grid';
import { ItemsComponent } from './items/items.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ItemCreateComponent } from './item-create/item-create.component';
const appRoutes: Routes = [
  {
    path: 'items',
    component: ItemsComponent,
    data: { title: 'Item List' }
  },
  {
    path: 'item-details/:id',
    component: ItemDetailsComponent,
    data: { title: 'Item Details'}
  },
  {
    path: 'item-create',
    component: ItemCreateComponent,
    data: {title: 'Create Item'}
  },
  { path: '',
    redirectTo: '/items',
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    PurchasedItemsComponent,
    ItemsComponent,
    ItemDetailsComponent,
    ItemCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    GridModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // debugging purpose only
    )
  ],
  providers: [GenericRestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
