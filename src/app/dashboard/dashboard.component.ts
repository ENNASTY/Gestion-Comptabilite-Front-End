import { Component, OnInit } from '@angular/core';
import { dashboardData } from './dashboard-data';
import { FactureService } from '../controller/service/facture.service';
import { EmployeeService } from '../controller/service/employee.service';
import { TauxIrService } from '../controller/service/taux-ir.service';
import { TauxIsService } from '../controller/service/taux-is.service';
import { DeclarationIRServiceService } from '../controller/service/declaration-ir-service.service';
import { DeclarationISServiceService } from '../controller/service/declaration-is-service.service';
import { forkJoin } from 'rxjs';
import { Chart } from 'chart.js/auto';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public dashData = dashboardData;

  constructor(
    private factureService: FactureService,
    private employeeService: EmployeeService,
    private tauxIrService: TauxIrService,
    private tauxIsService: TauxIsService,
    private declarationIrService: DeclarationIRServiceService,
    private declarationIsService: DeclarationISServiceService
  ) { }

  ngOnInit(): void {

    forkJoin([
      this.factureService.findAll(),
      this.employeeService.findAll(),
      this.tauxIrService.findAll(),
      this.tauxIsService.findAll(),
      this.declarationIrService.findAll(),
      this.declarationIsService.findAll()
    ]).subscribe(([factures, employees, tauxIr, tauxIs, declarationIr, declarationIs]) => {
      this.dashData[0].value = factures.length;
      this.dashData[1].value = employees.length;
      this.dashData[2].value = tauxIr.length;
      this.dashData[3].value = tauxIs.length;
      this.dashData[4].value = declarationIr.length;
      this.dashData[5].value = declarationIs.length;

      // Création du chart
      var myChart = new Chart("myChart", {
        type: 'pie',
        data: {
          labels: ['Factures', 'Employés', 'Taux IR', 'Taux IS', 'Déclaration IR', 'Déclaration IS'],
          datasets: [{
            label: '',
            data: [this.dashData[0].value, this.dashData[1].value, this.dashData[2].value, this.dashData[3].value, this.dashData[4].value, this.dashData[5].value],
            backgroundColor: [
              'rgba(255, 99, 132, 0.5)',
              'rgba(54, 162, 235, 0.5)',
              'rgba(75, 192, 192, 0.5)',
              'rgba(255, 206, 86, 0.5)',
              'rgba(153, 102, 255, 0.5)',
              'rgba(255, 159, 64, 0.5)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    })
  }
}