import {Component, OnInit} from '@angular/core';
import {DeclarationISServiceService} from "src/app/controller/services/declaration-is-service.service";
import {DeclarationIS} from "../../../controller/model/declaration-is.model";


@Component({
  selector: 'app-declaration-is-create',
  templateUrl: './declaration-is-create.component.html',
  styleUrls: ['./declaration-is-create.component.css']
})
export class DeclarationISCreateComponent  implements OnInit{

  constructor(private declarationISservice: DeclarationISServiceService) {}
  ngOnInit(): void {

  }



  public save() {

    // @ts-ignore
    return this.declarationISservice.save().subscribe(data => {
      if(data != null) {
        alert("save sucess");
      }else {
        alert("save error");
      }

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
