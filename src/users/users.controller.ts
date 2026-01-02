import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUserParamDto } from './dtos/get-user-param.dto';
import { UpdateUserDto } from './dtos/update-user.dto';

//http://localhost:3000/users
@Controller('users')
export class UsersController {
  constructor(private usersService: UserService) {}

  @Get('{/:isMarried}')
  getUsers(
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Param() param: GetUserParamDto,
  ) {
    console.log(param);
    return this.usersService.getAllUsers();
  }

  //   @Get(':id/:name{/:gender}')   // With optional parameter
  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.getUserById(id);
  }

  @Post()
  createUsers(@Body() user: CreateUserDto) {
    // this.usersService.createUser(user);
    console.log(user);
    return 'A new user with id has been created';
  }

  @Patch()
  updateUser(@Body() user: UpdateUserDto) {
    console.log(user);
    return 'User updated successfully';
  }
}
