import { Injectable } from '@angular/core';
import {Employee} from '../model/employee.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private _employee: Employee;
  private _employees: Array<Employee>;
  private _url = 'http://localhost:8036/Gestion-comptabilite/v1/employee/';
  private _viewDialog: boolean;
  private _createDialog: boolean;


  constructor(private _http: HttpClient) { }
  public save(): Observable<Employee> {
    return this._http.post<Employee>(this._url, this.employee);
  }

  public findAll(): Observable<Array<Employee>> {
    return this._http.get<Array<Employee>>(this._url);
  }

  public deleteByCin(cin: string): Observable<number> {
    return this._http.delete<number>(this._url + 'cin/' + cin);
  }


  get employee(): Employee {
    if (this._employee == null) {
      this._employee = new Employee();
    }
    return this._employee;
  }

  set employee(value: Employee) {
    this._employee = value;
  }

  get employees(): Array<Employee> {
    if (this._employees == null) {
      this._employees = new Array<Employee>();
    }
    return this._employees;
  }

  set employees(value: Array<Employee>) {
    this._employees = value;
  }


  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }

  get viewDialog(): boolean {
    return this._viewDialog;
  }

  set viewDialog(value: boolean) {
    this._viewDialog = value;
  }

  get createDialog(): boolean {
    return this._createDialog;
  }

  set createDialog(value: boolean) {
    this._createDialog = value;
  }

  get http(): HttpClient {
    return this._http;
  }

  set http(value: HttpClient) {
    this._http = value;
  }
}
