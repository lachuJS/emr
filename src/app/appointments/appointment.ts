export interface Appointment {
    aid: number,
    patient: {
      hid: number,
      name: string
    },
    dateTimeCreated: string
}
