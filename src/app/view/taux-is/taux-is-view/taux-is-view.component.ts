import { Component } from '@angular/core';
import {TauxIrService} from "../../../controller/service/taux-ir.service";
import {TauxIR} from "../../../controller/model/taux-ir.model";
import {TauxIsService} from "../../../controller/service/taux-is.service";
import {TauxIS} from "../../../controller/model/taux-is.model";

@Component({
  selector: 'app-taux-is-view',
  templateUrl: './taux-is-view.component.html',
  styleUrls: ['./taux-is-view.component.css']
})
export class TauxIsViewComponent {
  constructor( private service: TauxIsService) { }
  public hideViewDialog() {
    this.viewDialog = false;
  }
  get viewDialog(): boolean {
    return this.service.viewDialog;
  }
  set viewDialog(value: boolean) {
    this.service.viewDialog = value;
  }
  get selected(): TauxIS {
    return this.service.selected;
  }

  set selected(value: TauxIS) {
    this.service.selected = value;
  }


}
