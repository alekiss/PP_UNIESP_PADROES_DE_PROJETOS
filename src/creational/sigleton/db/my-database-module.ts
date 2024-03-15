import { User } from '../interfaces/user';

const users: User[] = [];

export const MyDatabaseModule = {
  add(user: User): void {
    users.push(user);
  },

   //Fazer função para remover usuário


  show(): void {
    for (const user of users) {
      console.log(user);
    }
  },
};