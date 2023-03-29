import {Component, OnInit} from '@angular/core';
import {DeclarationISServiceService} from "../../../controller/services/declaration-is-service.service";
import {DeclarationIS} from "../../../controller/model/declaration-is.model";


@Component({
  selector: 'app-declaration-is-list',
  templateUrl: './declaration-is-list.component.html',
  styleUrls: ['./declaration-is-list.component.css']
})
export class DeclarationISListComponent implements OnInit {

  ngOnInit(): void {
    this.findAll()
  }

  constructor(private declarationISservice: DeclarationISServiceService) {}
  public findAll():void {
    // @ts-ignore
    this.declarationISservice.findAll().subscribe(data => {
      this.declarationsIS = data ;
    })
  }

  get declarationIS(): DeclarationIS{
    return this.declarationISservice.declarationIS;
  }

  set declarationIS(value: DeclarationIS) {
    this.declarationISservice.declarationIS = value;
  }

  get declarationsIS(): Array<DeclarationIS> {
    return this.declarationISservice.declarationsIS;
  }

  set declarationsIS(value: Array<DeclarationIS>) {
    this.declarationISservice.declarationsIS = value;
  }


}
