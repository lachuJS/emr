export class Patient {
  constructor(
    public name: string,
    public hid: number,
    public gender: boolean,
    public dob: string,
    public phone?: number,
    public email?: string,
  ){}
}
