import {Tva} from "./tva.model";
import {DeclarationIS} from "./declaration-is.model";
import {DeclarationTva} from "./declaration-tva.model";
import {DeclarationIR} from "./declaration-ir.model";
import {TypeFacture} from "./type-facture.model";

export class Facture {
  public id: number;
  public ref: string;
  public montantHorsTaxe: number;
  public dateFacture: string;
  public annee: number;
  public mois: number;
  public trim: number;
  public montantTtc: number;
  public montantTva: number;
  public tva = new Tva;
  public declarationIS =new DeclarationIS();
  public declarationTva =new DeclarationTva();
  public declarationIR =new DeclarationIR();
  public typeFacture =new TypeFacture();

}
