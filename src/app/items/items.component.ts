import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import {GenericRestService} from '../services/generic-rest.service';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  items:Item[];
  private endpoint_url='service/items';
  constructor(private _itemService: GenericRestService) { 
    console.log("ItemComponent::ctor()");

  }

  ngOnInit() {
    this.getItems();
  }
  getItems(){
    this._itemService.getService(this.endpoint_url)
    .then(result => this.items=result)
    .catch(error => console.log(error));
  }

}
