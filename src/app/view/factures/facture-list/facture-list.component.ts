import {Component, OnInit} from '@angular/core';
import {FactureService} from "../../../controller/service/facture.service";
import {Facture} from "../../../controller/model/facture.model";

@Component({
  selector: 'app-facture-list',
  templateUrl: './facture-list.component.html',
  styleUrls: ['./facture-list.component.css']
})
export class FactureListComponent implements OnInit{
constructor(private factureService: FactureService) {
}
  ngOnInit(): void {
  this.findAll();
  }
  public findAll(): void{
    this.factureService.findAll().subscribe(
      data => this.factures = data
    );
  }
  get facture(): Facture {
    return this.factureService.facture;
  }

  set facture(value: Facture) {
    this.factureService.facture = value;
  }

  get factures(): Array<Facture> {
    return this.factureService.factures;
  }

  set factures(value: Array<Facture>) {
    this.factureService.factures = value;
  }
  public delete(c: Facture) {
    this.factureService.deleteByReference(c.ref).subscribe(
      data => {
        let index = this.factures.findIndex(e => c.ref == e.ref);
        this.factures.splice(index, 1);
      }
    );
  }


}
