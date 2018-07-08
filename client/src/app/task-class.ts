export class Task {
  _id: string
  group: string
  title: string
  content: string
  image: string
  status: string
  points: number
  userCompleted: string
  prove: {
    image: string
    text: string
  }
  constructor(group, name, content, karma) {
    this.group = group;
    this.title = name;
    this.content = content;
    this.points = karma;
  }
}