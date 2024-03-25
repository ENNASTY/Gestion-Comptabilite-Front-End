import { Component } from '@angular/core';
import {FactureService} from "../../../controller/service/facture.service";
import {Facture} from "../../../controller/model/facture.model";
import {TauxIrService} from "../../../controller/service/taux-ir.service";
import {Employee} from "../../../controller/model/employee.model";
import {TauxIR} from "../../../controller/model/taux-ir.model";

@Component({
  selector: 'app-taux-ir-view',
  templateUrl: './taux-ir-view.component.html',
  styleUrls: ['./taux-ir-view.component.css']
})
export class TauxIrViewComponent {
  constructor( private service: TauxIrService) { }
  public hideViewDialog() {
    this.viewDialog = false;
  }
  get viewDialog(): boolean {
    return this.service.viewDialog;
  }
  set viewDialog(value: boolean) {
    this.service.viewDialog = value;
  }
  get selected(): TauxIR {
    return this.service.selected;
  }

  set selected(value: TauxIR) {
    this.service.selected = value;
  }




}
