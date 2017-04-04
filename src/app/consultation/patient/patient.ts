export interface Patient {
    name: string,
    hid: number,
    dob: string,
    gender: boolean,
    location: string,
    email?: string,
    phone?: number
}
