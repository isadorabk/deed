export class Group {
  _id: string
  name: string
  type: string
  users: string[]
  delegates: string[]
  tasks: string[]
  messages: {
    author: string
    text: string
  }[]
  icon: string
  coverPhoto: string
}
