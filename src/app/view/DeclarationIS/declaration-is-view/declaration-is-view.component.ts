import {Component, OnInit} from '@angular/core';
import {DeclarationTvaService} from "../../../controller/service/declaration-tva.service";
import {DeclarationISServiceService} from "../../../controller/service/declaration-is-service.service";
import {DeclarationTva} from "../../../controller/model/declaration-tva.model";
import {DeclarationIS} from "../../../controller/model/declaration-is.model";

@Component({
  selector: 'app-declaration-is-view',
  templateUrl: './declaration-is-view.component.html',
  styleUrls: ['./declaration-is-view.component.css']
})
export class DeclarationIsViewComponent implements OnInit{
  constructor( private service: DeclarationISServiceService) { }
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
  get declarationIS(): DeclarationIS {
    return this.service.declarationIS;
  }

  set declarationIS(value: DeclarationIS) {
    this.service.declarationIS = value;
  }

}
