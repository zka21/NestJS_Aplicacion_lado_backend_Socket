import { Controller, Post, Body, HttpCode, Get, Param } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateCourseDto } from './dto/create-course.dto';
import { SlugPipe } from './pipes/slug.pipe';
@ApiTags('courses')
@Controller('courses') //TODO http://localhost:3000/v1/courses
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Post()
  @HttpCode(201)
  create(@Body() create: CreateCourseDto) {
    return this.coursesService.create(create);
  }

  @Get(':title')
  getDetail(@Param('title', new SlugPipe()) title: string) {
    console.log('-----title-----', title);
    return this.coursesService.findOne(1);
  }
}
