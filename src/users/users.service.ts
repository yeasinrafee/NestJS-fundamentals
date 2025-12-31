export class UserService {
  users: {
    id: number;
    name: string;
    age: number;
    gender: string;
    isMarried: boolean;
  }[] = [
    { id: 1, name: 'John', age: 29, gender: 'male', isMarried: false },
    { id: 2, name: 'Mark', age: 30, gender: 'male', isMarried: true },
    { id: 3, name: 'Sarah', age: 20, gender: 'female', isMarried: true },
  ];

  getAllUsers() {
    return this.users;
  }

  getUserById(id: number) {
    return this.users.find((x) => x.id === id);
  }

  createUser(user: {
    id: number;
    name: string;
    age: number;
    gender: string;
    isMarried: boolean;
  }) {
    this.users.push(user);
  }
}
