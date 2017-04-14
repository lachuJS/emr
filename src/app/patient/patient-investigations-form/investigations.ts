export class Investigations{
  data: string;
  constructor(data?: string){
    if(data){
      this.data = data;
    }
    else{
      this.data = null;
    }
  }
}
