import {Component, OnInit} from '@angular/core';
import {DeclarationTvaService} from "../../../controller/service/declaration-tva.service";
import {DeclarationTva} from "../../../controller/model/declaration-tva.model";
import {Observable} from "rxjs";
import {ConfirmationService, MessageService} from "primeng/api";

@Component({
  selector: 'app-declaration-tva-list',
  templateUrl: './declaration-tva-list.component.html',
  styleUrls: ['./declaration-tva-list.component.css']
})
export class DeclarationTvaListComponent implements OnInit{
  constructor(private messageService: MessageService, private confirmationService: ConfirmationService, private service: DeclarationTvaService) { }
  ngOnInit(): void {
    this.findAll();
  }

  public deleteDeclaration(selected: DeclarationTva){
    this.selected = selected;
    this.confirmationService.confirm({
      message: 'Voulez-vous supprimer la declaration TVA - ' + selected.ref + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.service.deleteDeclaration(selected).subscribe(data => {
          this.items = this.items.filter(val => val.id !== this.selected.id);
          this.selected = null;
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'DeclarationTVA supprimee!',
            life: 3000
          });
        });
      }
    });
  }
  public openView(declaration: DeclarationTva){
    this.selected={...declaration};
    this.service.viewDialog=true;
  }
  public openCreate(){
    this.selected=new DeclarationTva();
    this.object2=null;
    this.service.createDialog=true;
  }
  public findAll():void{
    this.service.findAll().subscribe(data=>this.items=data);
  }
  get items(): Array<DeclarationTva> {
    return this.service.items;
  }
  set items(value: Array<DeclarationTva>) {
    this.service.items = value;
  }
  get selected(): any {
    return this.service.selected;
  }
  set selected(value: any) {
    this.service.selected = value;
  }
  get object2(): any {
    return this.service.object2;
  }
  set object2(value: any) {
    this.service.object2 = value;
  }
}
