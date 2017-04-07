export enum Examination {
  concious,
  oriented
}
export interface Vitals {
  pr: number,
  bp: number,
  rr: number,
  temp: number
}
export interface SystemicExamination {
  cvs: number,
  rs: number,
  cns: number,
  pa: number
}
export interface ChiefComplaint {
  complaint: string,
  duration: number
}
export interface PrescriptionItem {
  item: string,
  breakfast: boolean,
  lunch: boolean,
  dinner: boolean,
  beforeMeal: boolean
}
export interface HealthLogForm {
  id?:number,
  chiefComplaints?: Array<ChiefComplaint>,
  examination?: Examination,
  vitals?: Vitals,
  systemicExamination?: SystemicExamination,
  le?: string,
  finalDiagnosis?: string,
  nextFollowUp?: string,
  investigations?: string,
  prescription?: Array<PrescriptionItem>
}
export interface PresentingIllness {
  healthLogId: number,
  finalDiagnosis: string,
  medications: Array<string>
}
