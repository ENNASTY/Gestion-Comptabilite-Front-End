import {Component, OnInit} from '@angular/core';
import {DeclarationISServiceService} from "../../../controller/service/declaration-is-service.service";
import {DeclarationIS} from "../../../controller/model/declaration-is.model";
import {DeclarationTva} from "../../../controller/model/declaration-tva.model";
import {ConfirmationService, MessageService} from "primeng/api";


@Component({
  selector: 'app-declaration-is-list',
  templateUrl: './declaration-is-list.component.html',
  styleUrls: ['./declaration-is-list.component.css']
})
export class DeclarationISListComponent implements OnInit {

  ngOnInit(): void {
    this.findAll()
  }

  constructor(private messageService: MessageService, private confirmationService: ConfirmationService,private declarationISservice: DeclarationISServiceService) {}
  public findAll():void {
    // @ts-ignore
    this.declarationISservice.findAll().subscribe(data => {
      this.declarationsIS = data ;
    })
  }

  public deleteDeclaration(selected: DeclarationIS){
    this.declarationIS= selected;
    this.confirmationService.confirm({
      message: 'Voulez-vous supprimer la declaration IS de l annee ' + selected.annee + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.declarationISservice.deleteDeclaration(selected).subscribe(data => {
          this.declarationsIS = this.declarationsIS.filter(val => val.id !== this.declarationIS.id);
          this.declarationIS = null;
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Declaration IS supprimee!',
            life: 3000
          });
        });
      }
    });
  }
  public openView(declaration: DeclarationIS){
    this.declarationIS={...declaration};
    this.declarationISservice.viewDialog=true;
  }
  public openCreate(){
    this.declarationIS=new DeclarationIS();
    this.declarationISservice.createDialog=true;
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


}
