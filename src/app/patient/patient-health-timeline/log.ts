import { ChiefComplaint, Examination, Vitals, SystemicExamination } from '../patient-diagnosis-form/diagnosis';
import { Prescription } from '../patient-prescription-form/prescription';
export enum LogType {
  diagnosis,
  prescription,
  investigations
}
export interface Log {
  id: number,
  type: LogType,
  dateTime: string
}
export interface IDiagnosisLog {
  id: number,
  type: LogType,
  dateTime: string,
  chiefComplaints: Array<ChiefComplaint>,
  examination: Examination,
  vitals: Vitals,
  systemicExamination: SystemicExamination,
  finalDiagnosis: string,
  followUpDate: string,
  le: string
}
export class DiagnosisLog implements Log {
  public id: number;
  public type: LogType;
  public dateTime: string;
  public chiefComplaints: Array<ChiefComplaint>;
  public examination: Examination;
  public vitals: Vitals;
  public systemicExamination: SystemicExamination;
  public finalDiagnosis: string;
  public followUpDate: string;
  public le: string;
  constructor(obj?: IDiagnosisLog){
    this.id = obj && obj.id || null;
    this.type = obj && obj.type || LogType.diagnosis;
    this.dateTime = obj && obj.dateTime || null;
    this.chiefComplaints = obj && obj.chiefComplaints || null;
    this.examination = obj && obj.examination || null;
    this.vitals = obj && obj.vitals || null;
    this.systemicExamination = obj && obj.systemicExamination || null;
    this.finalDiagnosis = obj && obj.finalDiagnosis || null;
    this.followUpDate = obj && obj.followUpDate || null;
    this.le = obj && obj.le || null;
  }
}
export interface IPrescriptionLog {
  id: number,
  type: LogType.prescription,
  dateTime: string,
  prescriptions: Array<Prescription>;
}
export class PrescriptionLog implements Log {
  public id: number;
  public type: LogType.prescription;
  public dateTime: string;
  public prescriptions: Array<Prescription>;
  constructor(obj?: IPrescriptionLog) {
    this.id = obj && obj.id || null;
    this.type = obj && obj.type || null;
    this.dateTime = obj && obj.dateTime || null;
    this.prescriptions = obj && obj.prescriptions || null;
  }
}
