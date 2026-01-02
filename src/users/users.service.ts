import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  users: {
    id: number;
    name: string;
    email: string;
    gender: string;
    isMarried: boolean;
  }[] = [
    {
      id: 1,
      name: 'John',
      email: 'john@gmail.com',
      gender: 'male',
      isMarried: false,
    },
    {
      id: 2,
      name: 'Mark',
      email: 'mark@gmail.com',
      gender: 'male',
      isMarried: true,
    },
    {
      id: 3,
      name: 'Sarah',
      email: 'sarah@gmail.com',
      gender: 'female',
      isMarried: true,
    },
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
    email: string;
    gender: string;
    isMarried: boolean;
  }) {
    this.users.push(user);
  }
}
