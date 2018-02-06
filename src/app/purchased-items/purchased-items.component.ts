import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PurchasedItem } from '../purchased-item';
import {GenericRestService} from '../services/generic-rest.service';
@Component({
  selector: 'app-purchased-items',
  templateUrl: './purchased-items.component.html',
  styleUrls: ['./purchased-items.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PurchasedItemsComponent implements OnInit {
  purchasedItems:PurchasedItem[];
  private endpoint_url='service/purchased/items';


  constructor(private _purchasedItemService: GenericRestService) { 
    console.log("PurchasedItemComponent::ctor()");

  }
  ngOnInit() {
    this.getItems();
  }
  getItems(){
    this._purchasedItemService.getService(this.endpoint_url)
    .then(result => this.purchasedItems=result)
    .catch(error => console.log(error));
  }

}
