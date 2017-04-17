export interface IDosageInstruction {
  morning: boolean;
  afternoon: boolean;
  night: boolean;
  beforeFood: boolean;
  numberDays: number;
  vernacularNote: string;
}
export class DosageInstruction {
  public morning: boolean;
  public afternoon: boolean;
  public night: boolean;
  public beforeFood: boolean;
  public numberDays: number;
  public vernacularNote: string;
  constructor(obj?: IDosageInstruction) {
    if(obj) {
      this.morning = obj.morning;
      this.afternoon = obj.afternoon;
      this.night = obj.night;
      this.beforeFood = obj.beforeFood;
      this.numberDays = obj.numberDays;
      this.vernacularNote = obj.vernacularNote;
    }
    else {
      this.morning = null;
      this.afternoon = null;
      this.night = null;
      this.beforeFood = null;
      this.numberDays = null;
      this.vernacularNote = null;
    }
  }
}
export interface IPrescription {
  drug: string,
  quantity: number,
  dosageInstruction: DosageInstruction,
  dateTime?: string
}
export class Prescription {
  public drug: string;
  public quantity: number;
  public dosageInstruction: DosageInstruction;
  public dateTime?: string;
  constructor(obj?: IPrescription) {
    if(obj) {
      this.drug = obj.drug;
      this.quantity = obj.quantity;
      this.dosageInstruction = obj.dosageInstruction;
      this.dateTime = obj.dateTime;
    }
    else{
      this.drug = null;
      this.quantity = null;
      this.dosageInstruction = new DosageInstruction();
    }
  }
}
