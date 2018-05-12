import { ResourceService } from '../../services/index';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {ICard} from '../../interfaces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  /**
* content is used to render IContents value on the view
*/
@Input() data: ICard;
@Output('clickEvent')
clickEvent = new EventEmitter<any>();

public onAction(data, action) {
  this.clickEvent.emit({'action': action, 'data': data});
}
}