import {Component, OnInit} from '@angular/core';
import {FactureService} from 'src/app/controller/service/facture.service';
import {Facture} from 'src/app/controller/model/facture.model';

@Component({
  selector: 'app-facture-create',
  templateUrl: './facture-create.component.html',
  styleUrls: ['./facture-create.component.css']
})
export class FactureCreateComponent implements  OnInit {
  ngOnInit(): void {
  }
  constructor(private factureService: FactureService) {
  }
  public save(): void {
    this.factureService.save().subscribe(data => {
      if (data != null) {
        this.factures.push({...this.facture});
        alert('Save success');
      }
      if(data == null){
        alert('Save error ::: cin exist');
      }
    });

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


}
