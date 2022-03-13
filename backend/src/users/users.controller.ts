import {Body, Controller, Get, Param, ParseIntPipe, Post, Put, UsePipes, ValidationPipe} from '@nestjs/common';
import { UserTodoApp } from "./tags/custom-header.tags";
import {User} from "./users.entity";
import {UserPropertyDto} from "./dto/users-property.dto";
import {UsersService} from "./users.service";
import {Task} from "../tasks/tasks.entity";

@Controller('users')
export class UsersController {

    constructor(
        private userService: UsersService
    ) {}

    @Get()
    getUsers(): Promise<User[]> {
        return this.userService.getUsers();
    }

    @Get('/:id')
    getUserById(
        @Param('id', ParseIntPipe) id: number
    ): Promise<User> {
        return this.userService.getUserById(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    createUser(
        @Body() userPropertyDto: UserPropertyDto,
    ): Promise<User> {
        return this.userService.create(userPropertyDto)
    }

    @Put()
    getTaskById(
        @UserTodoApp('email') email: string): string {
        return `this is ${email}`;
    }

    // @UserTodoApp
}
