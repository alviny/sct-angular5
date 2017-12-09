import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PurchasedItem } from '../purchased-item';
import {GenericRestService} from '../services/generic-rest.service';
import { DataTableResource } from 'angular-4-data-table-bootstrap-4';
@Component({
  selector: 'app-purchased-items',
  templateUrl: './purchased-items.component.html',
  styleUrls: ['./purchased-items.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PurchasedItemsComponent implements OnInit {
  purchasedItems:PurchasedItem[];
  private endpoint_url='service/items';
  itemResource:DataTableResource<PurchasedItem>; 
  items = [];
  itemCount = 0;

  constructor(private _purchasedItemService: GenericRestService) { 
    console.log("PurchasedItemComponent::ctor()");

  }
  ngOnInit() {
    this.getItems();
    this.items = this.purchasedItems;
    this.itemResource = new DataTableResource(this.purchasedItems);
    this.itemResource.count().then(count => this.itemCount = count);
  }
  getItems(){
    this._purchasedItemService.getService(this.endpoint_url)
    .then(result => this.purchasedItems=result)
    .catch(error => console.log(error));
  }

}
