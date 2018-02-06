import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { Item } from '../item'
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { GenericRestService} from '../services/generic-rest.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ItemDetailsComponent implements OnInit {
  item:Item;
  private endpoint_url='service/items/';
  constructor(private _itemService: GenericRestService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.getItemDetails(this.route.snapshot.params['id']);
  }
  getItemDetails(id) {
    console.log("ItemDetailsComponent::getItemDetails(): " + id );
    this._itemService.getService(this.endpoint_url + id)
    .then(result => this.item=result)
    .catch(error => console.log(error));
  }
}
