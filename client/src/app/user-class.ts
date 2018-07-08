export class User {
  _id: string
  userName: string
  firstName: string
  lastName: string
  password: string
  image: string
  email: string
  city: string
  groups: string[]
  delegate: string[]
  tasks: string[]
  karmas: {
    group: string,
    karmaPoint: number,
    _id: string
  }[]

}