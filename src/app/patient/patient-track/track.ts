export class Track {
  public bp: boolean;
  public pr: boolean;
  public rr: boolean;
  public temp: boolean;
  public cvs: boolean;
  public rs: boolean;
  public cns: boolean;
  public pa: boolean;
  public finalDiagnosis: boolean;

  constructor() {
    this.clear();
  }
  setQueryParams(query) {
    this.clear();
    Object.getOwnPropertyNames(query).map((key: string) => {
      if(query[key] == 'true') {
        this[key] = true;
      }
    });
  }
  buildQueryParams() {
    let queryParams = new Track();
    Object.getOwnPropertyNames(this).map((key) => {
      if(this[key]){
        queryParams[key] = true;
      }
    });
    return queryParams;
  }
  clear(){
    Object.getOwnPropertyNames(this).map((key) => {
      this[key] = undefined;
    });
  }
  checkAll() {
    this.bp = true;
    this.pr = true;
    this.rr = true;
    this.temp = true;
    this.cvs = true;
    this.rs = true;
    this.cns = true;
    this.pa = true;
    this.finalDiagnosis = true;
  }
}
