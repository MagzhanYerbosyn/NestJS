import { Controller, Get } from '@nestjs/common';
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
}
