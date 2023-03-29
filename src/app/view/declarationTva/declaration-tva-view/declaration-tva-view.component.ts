import { Component } from '@angular/core';
import {DeclarationTva} from "../../../controller/model/declaration-tva.model";
import {DeclarationTvaService} from "../../../controller/service/declaration-tva.service";

@Component({
  selector: 'app-declaration-tva-view',
  templateUrl: './declaration-tva-view.component.html',
  styleUrls: ['./declaration-tva-view.component.css']
})
export class DeclarationTvaViewComponent {

  constructor( private service: DeclarationTvaService) { }

  ngOnInit(): void {
  }
  public hideViewDialog() {
    this.viewDialog = false;
  }
  get viewDialog(): boolean {
    return this.service.viewDialog;
  }

  set viewDialog(value: boolean) {
    this.service.viewDialog = value;
  }
  get selected(): DeclarationTva {
    return this.service.selected;
  }

  set selected(value: DeclarationTva) {
    this.service.selected = value;
  }

}
