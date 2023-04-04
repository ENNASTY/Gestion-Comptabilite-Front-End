import { Component } from '@angular/core';
import {FactureService} from "../../../controller/service/facture.service";
import {Facture} from "../../../controller/model/facture.model";

@Component({
  selector: 'app-facture-view',
  templateUrl: './facture-view.component.html',
  styleUrls: ['./facture-view.component.css']
})
export class FactureViewComponent {
  constructor( private service: FactureService) { }
  public hideViewDialog() {
    this.viewDialog = false;
  }
  get viewDialog(): boolean {
    return this.service.viewDialog;
  }

  set viewDialog(value: boolean) {
    this.service.viewDialog = value;
  }
  get facture(): Facture {
    return this.service.facture;
  }

  set facture(value: Facture) {
    this.service.facture = value;
  }


}
