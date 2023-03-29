import {DeclarationIR} from "./declaration-ir.model";
import {Employee} from "./employee.model";
import {TauxIR} from "./taux-ir.model";

export class DeclarationIrEmployee {
  public id:number;
  public refEmp:number;
  public salaireNet:number;
  public salaireBrut:number;
  public montantIR:number;
  public employee = new Employee();
  public declarationIR = new DeclarationIR();
  public tauxIR = new TauxIR();
}
