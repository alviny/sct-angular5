import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { Item } from '../item';
import { GenericRestService } from '../services/generic-rest.service'
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ItemCreateComponent implements OnInit {
  item = {};
  message:string = '';
  private endpoint_url='service/item';
  constructor(private _itemService: GenericRestService,private router: Router) { 

  }
  ngOnInit() {
  }
  saveItem(){
    this._itemService.putService(this.endpoint_url, this.item)
    .then( () => this.message = 'The item was added successfully.', (error) => this.message = 'There was an error when adding an item. Error:' + error )
    .catch(error => console.log(error));
    this.item = {}; //reset
  }
}
