import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto.js';
import { MovieService } from './movie.service.js';

@Controller({
  path: 'movies',
})
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  findAll() {
    return this.movieService.findAll();
  }

  @Post()
  create(@Body() dto: CreateMovieDto) {
    return this.movieService.create(dto);
  }
}
