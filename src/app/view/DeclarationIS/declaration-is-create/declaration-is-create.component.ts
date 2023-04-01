import {Component, OnInit} from '@angular/core';
import {DeclarationISServiceService} from "src/app/controller/service/declaration-is-service.service";
import {DeclarationIS} from "../../../controller/model/declaration-is.model";
import {MessageService} from "primeng/api";


@Component({
  selector: 'app-declaration-is-create',
  templateUrl: './declaration-is-create.component.html',
  styleUrls: ['./declaration-is-create.component.css']
})
export class DeclarationISCreateComponent  implements OnInit{

  constructor(private messageService: MessageService, private declarationISservice: DeclarationISServiceService) {}
  ngOnInit(): void {

  }
  public save() {

    // @ts-ignore
    return this.declarationISservice.save().subscribe(data => {
      if (data != null){
        this.declarationsIS.push({...data});
        console.log('bravo save declaration IS');
        this.messageService.add({severity:'success', summary: 'Success', detail: 'Declaration IS bien enregistrée!', life: 4000});
        this.declarationIS = null;
      }else {
        if (data==null){
          this.messageService.add({severity:'warn', summary: 'Warn', detail: 'la declaration IS de cet annee est deja validee!', life: 4000});
        }
      }
    },error => {
      this.messageService.add({severity:'error', summary: 'Error', detail: 'Error !', life: 4000});
    }

  )
    }

  public hideCreateDialog() {
    this.createDialog = false;
  }

  get declarationIS(): any{
    return this.declarationISservice.declarationIS;
  }


  set declarationIS(value: any) {
    this.declarationISservice.declarationIS = value;
  }

  get declarationsIS(): Array<DeclarationIS> {
    return this.declarationISservice.declarationsIS;
  }

  set declarationsIS(value: Array<DeclarationIS>) {
    this.declarationISservice.declarationsIS = value;
  }
  get createDialog(): boolean {
    return this.declarationISservice.createDialog;
  }

  set createDialog(value: boolean) {
    this.declarationISservice.createDialog = value;
  }


}
