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
export interface HealthLogForm {
    chiefComplaints: Array<string>,
    examination: Examination,
    vitals?: Vitals,
    systemicExamination?: SystemicExamination,
    le?: string,
    finalDiagnosis: string,
    nextFollowUp?: string,
    prescription: Array<string>
}
