import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUserParamDto } from './dtos/get-user-param.dto';

//http://localhost:3000/users
@Controller('users')
export class UsersController {
  @Get('{:isMarried}')
  getUsers(
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Param() param: GetUserParamDto,
  ) {
    const usersService = new UserService();
    console.log(param);
    return usersService.getAllUsers();
  }

  //   @Get(':id/:name{/:gender}')   // With optional parameter
  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    const usersService = new UserService();
    return usersService.getUserById(id);
  }

  @Post()
  createUsers(@Body() user: CreateUserDto) {
    // const usersService = new UserService();
    // usersService.createUser(user);
    console.log(user);
    return 'A new user with id has been created';
  }
}
