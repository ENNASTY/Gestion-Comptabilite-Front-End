import {Component, OnInit} from '@angular/core';
import {DeclarationIRServiceService} from "src/app/controller/services/declaration-ir-service.service";
import {DeclarationIR} from "src/app/controller/model/declaration-ir.model";

@Component({
  selector: 'app-declaration-ir-create',
  templateUrl: './declaration-ir-create.component.html',
  styleUrls: ['./declaration-ir-create.component.css']
})
export class DeclarationIRCreateComponent implements OnInit {

  constructor(private declarationIRservice: DeclarationIRServiceService) {
  }
  ngOnInit(): void {
  }

  public save() {
    // @ts-ignore
    return this.declarationIRservice.save().subscribe(data => {
       if(data != null) {
         alert("save success");
       }else {
         alert("save error");
       }
    });
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
