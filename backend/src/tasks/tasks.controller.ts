import { Body, Controller, Post, Delete, Get, Param, ParseIntPipe, Patch, UsePipes, ValidationPipe } from '@nestjs/common';
import { TaskPropertyDto } from './dto/task-property.dto';
import { TaskStatusPipe } from './pipe/task-status.pipe';

@Controller('tasks')
export class TasksController {

    //curl -X GET http://localhost:13000/tasks
    @Get()
    getTasks() {
        return "getTasks Success!"
    }

    // curl -X GET http://localhost:13000/tasks/1
    @Get('/:id')
    getTaskById(
        @Param('id', ParseIntPipe) id: number) {
        return `getTaskById Success! Parameter [id:${id}]`
    }

    // curl -X POST http://localhost:13000/tasks -d 'title=TEST' -d 'description=NestJS'
    @Post()
    @UsePipes(ValidationPipe)
    createTask(
        @Body() taskPropertyDto: TaskPropertyDto) {
        const { title, description } = taskPropertyDto
        return `createTask Success! Prameter [title:${title}, descritpion:${description}]`
    }

    //curl -X DELETE http://localhost:13000/tasks/1
    @Delete('/:id')
    deleteTask(
        @Param('id', ParseIntPipe) id: number) {
        return `deleteTask Success! Prameter [id:${id}]`
    }

    //curl -X PATCH http://localhost:13000/tasks/1 -d 'status=DONE'
    @Patch('/:id')
    updateTask(
        @Param('id', ParseIntPipe) id: number,
        @Body('status',TaskStatusPipe) status: string ) {
        return `updateTask Success! Prameter [id:${id}, status:${status}]`
    }
}
