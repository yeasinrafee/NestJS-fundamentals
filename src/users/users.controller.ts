import {
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { UserService } from './users.service';

//http://localhost:3000/users
@Controller('users')
export class UsersController {
  @Get()
  getUsers(
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    const usersService = new UserService();
    console.log(limit, page);
    return usersService.getAllUsers();
  }

  //   @Get(':id/:name{/:gender}')   // With optional parameter
  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    const usersService = new UserService();
    return usersService.getUserById(id);
  }

  @Post()
  createUsers() {
    const user = {
      id: 3,
      name: 'Merry',
      email: 'merry@gmail.com',
      gender: 'female',
      isMarried: true,
    };
    const usersService = new UserService();
    usersService.createUser(user);
    return 'A new user has been created';
  }
}
