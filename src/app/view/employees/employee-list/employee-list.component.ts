import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {EmployeeService} from 'src/app/controller/service/employee.service';
import {Employee} from 'src/app/controller/model/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  ngOnInit(): void {
    this.findAll();
  }
  constructor(private messageService: MessageService, private confirmationService: ConfirmationService,private employeeService: EmployeeService) {
  }
  public findAll(): void{
    this.employeeService.findAll().subscribe(
      data => this.employees = data
    );
  }
  get employee(): any {
    return this.employeeService.employee;
  }

  set employee(value: any) {
    this.employeeService.employee = value;
  }

  get employees(): Array<Employee> {
    return this.employeeService.employees;
  }

  set employees(value: Array<Employee>) {
    this.employeeService.employees = value;
  }
  public deleteEmployee(employee: Employee){
    this.employee = employee;
    this.confirmationService.confirm({
      message: 'Voulez-vous supprimer la employee - ' + employee.cin + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.employeeService.deleteByCin(employee.cin).subscribe(data => {
          this.employees = this.employees.filter(val => val.cin !== this.employee.cin);
          this.employee = null;
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Facture supprimee!',
            life: 3000
          });
        });
      }
    });
  }
  public openView(employee: Employee){
    this.employee={...employee};
    this.employeeService.viewDialog=true;
  }
  public openCreate(){
    this.employee=new Employee();
    this.employeeService.createDialog=true;
  }
}
