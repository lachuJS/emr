export interface DosageInstruction {
  morning: boolean;
  afternoon: boolean;
  night: boolean;
  beforeFood: boolean;
  tillDate: Date;
  vernacularNote: string;
}
export interface Prescription {
  drug: string,
  quantity: number,
  dosageInstruction: DosageInstruction,
}
