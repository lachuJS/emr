export enum Examination {
  concious,
  oriented
}
//chief complaint
export interface IChiefComplaint {
  complaint: string,
  duration: number
}
export class ChiefComplaint implements IChiefComplaint {
  public complaint: string;
  public duration: number;
  constructor(obj?: IChiefComplaint){
    if(obj){
      this.complaint = obj.complaint;
      this.duration = obj.duration;
    }
    else{
      this.complaint = null;
      this.duration = null;
    }
  }
}
//vitals
export interface IVitals {
    pr: number,
    bp: number,
    rr: number,
    temp: number
}
export class Vitals{
  public pr: number;
  public bp: number;
  public rr: number;
  public temp: number;
  constructor(obj?: IVitals) {
    if(obj) {
      this.pr = obj.pr;
      this.bp = obj.bp;
      this.rr = obj.rr;
      this.temp = obj.temp;
    }
    else{
      this.pr = null;
      this.bp = null;
      this.rr = null;
      this.temp = null;
    }
  }
}
//systemicExamintaion
export interface ISystemicExamination {
  cvs: number,
  rs: number,
  cns: number,
  pa: number
}
export class SystemicExamination {
  public cvs: number;
  public rs: number;
  public cns: number;
  public pa:number;
  constructor(obj?: ISystemicExamination) {
    if(obj){
      this.cvs = obj.cvs;
      this.rs = obj.rs;
      this.cns = obj.cns;
      this.pa = obj.pa;
    }
    else {
      this.cvs = null;
      this.rs = null;
      this.cns = null;
      this.pa = null;
    }
  }
}
export interface IDiagnosis {
  chiefComplaints: Array<ChiefComplaint>;
  examination: Examination;
  vitals: Vitals;
  systemicExamination: SystemicExamination;
  le: string,
  finalDiagnosis: string,
  followUpDate: string
  dateTime?: string
}
export class Diagnosis implements IDiagnosis {
  public chiefComplaints: Array<ChiefComplaint>;
  public examination: Examination;
  public vitals: Vitals;
  public systemicExamination: SystemicExamination;
  public le: string;
  public finalDiagnosis: string;
  public followUpDate: string;
  public dateTime?: string;
  constructor(obj?: IDiagnosis) {
    if(obj){
      this.chiefComplaints = obj.chiefComplaints;
      this.examination = obj.examination;
      this.vitals = obj.vitals;
      this.systemicExamination = obj.systemicExamination;
      this.le = obj.le;
      this.finalDiagnosis = obj.finalDiagnosis;
      this.followUpDate = obj.followUpDate;
      this.dateTime = obj.dateTime;
    }
  }
}
