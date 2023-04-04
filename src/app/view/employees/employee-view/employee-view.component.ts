import { Component } from '@angular/core';
import {EmployeeService} from 'src/app/controller/service/employee.service';
import {Employee} from 'src/app/controller/model/employee.model';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent {
  constructor( private service: EmployeeService) { }
  public hideViewDialog() {
    this.viewDialog = false;
  }
  get viewDialog(): boolean {
    return this.service.viewDialog;
  }
  set viewDialog(value: boolean) {
    this.service.viewDialog = value;
  }
  get employee(): Employee {
    return this.service.employee;
  }

  set employee(value: Employee) {
    this.service.employee = value;
  }

}
