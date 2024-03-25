import {Component, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';
import {EmployeeService} from 'src/app/controller/service/employee.service';
import {Employee} from 'src/app/controller/model/employee.model';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements  OnInit {
  ngOnInit(): void {
  }
  constructor(private messageService: MessageService ,private employeeService: EmployeeService) {
  }
  public hideCreateDialog() {
    this.createDialog = false;
  }
  public save(): void {
    this.employeeService.save().subscribe(data => {
      if (data != null) {
        this.employees.push({...data});
        this.messageService.add({severity:'success', summary: 'Success', detail: 'Employée bien enregistré!', life: 4000});
        this.employee=null;
      }
      if(data == null){
        this.messageService.add({severity:'warn', summary: 'Warn', detail: ' les Informations est incorrects!', life: 4000});
      }
    });

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
  get createDialog(): boolean {
    return this.employeeService.createDialog;
  }

  set createDialog(value: boolean) {
    this.employeeService.createDialog = value;
  }
}
