import {Component, OnInit} from '@angular/core';
import {DeclarationIRServiceService} from "src/app/controller/services/declaration-ir-service.service";
import {DeclarationIR} from "src/app/controller/model/declaration-ir.model";

@Component({
  selector: 'app-declaration-ir-list',
  templateUrl: './declaration-ir-list.component.html',
  styleUrls: ['./declaration-ir-list.component.css']
})
export class DeclarationIRListComponent  implements  OnInit{
  ngOnInit(): void {
    this.findAll();
  }

  constructor(private declarationIRservice: DeclarationIRServiceService) {
  }

  public findAll():void{
    // @ts-ignore
    this.declarationIRservice.findAll().subscribe(data => {
        this.declarationsIR = data ;
      }
    )
  }
  get declarationIR(): DeclarationIR {
    return this.declarationIRservice.declarationIR;
  }
  set declarationIR(value: DeclarationIR) {
    this.declarationIRservice.declarationIR = value;
  }

  get declarationsIR(): Array<DeclarationIR> {
    return this.declarationIRservice.declarationsIR;
  }

  set declarationsIR(value: Array<DeclarationIR>) {
    this.declarationIRservice.declarationsIR = value;
  }

}
