import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';


@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {

  // @Input() means that the proerty value passes from the parent component, ProductListComponent, to this component
  @Input() product!: Product;
  @Output() notify = new EventEmitter();

}
