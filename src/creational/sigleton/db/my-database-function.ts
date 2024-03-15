import { User } from '../interfaces/user';

export const MyDatabaseFunction = (function () {
  const users: User[] = [];

  return {
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
})();