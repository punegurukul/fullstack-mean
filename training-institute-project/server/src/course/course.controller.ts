import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { CreateCourseDto } from 'src/dto/course';
import { Course } from 'src/schemas/course.schema';
import { CourseService } from './course.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('course')
export class CourseController {
    constructor(private service: CourseService){}
    @Get()
    async get(): Promise<Course[]> {
        return await this.service.findAll();
    }

    @UseGuards(AuthGuard)
    @Post()
    async post(@Body() course: CreateCourseDto): Promise<Course> {
        return await this.service.create(course);
    }

    @UseGuards(AuthGuard)
    @Delete('/:id')
    async delete(@Param() id: string ): Promise<Course> {
        console.log("ID", id);
        return await this.service.delete(id);
    }
}
