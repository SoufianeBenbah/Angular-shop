import users from '../users.json'

export class User {
  name: string
  img: string
  birthday: string
  info: string

  constructor() {
    this.name='';
    this.img="";
    this.birthday="";
    this.info="";
  }

  static get getUsers(): User[] {
    return [...users
    ] as User[];
  }
}
