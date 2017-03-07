export class Patient{
  constructor(
    public name: string,
    public hid: number,
    public dob: string,
    public email: string,
    public gender: boolean, //male=true,female=false
    public phone: number,
    public doj: string
  ){}
}
