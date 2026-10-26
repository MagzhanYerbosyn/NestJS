import { Controller, Get, Query } from '@nestjs/common';

@Controller({
  path: 'movies',
})
export class MovieController {
  @Get()
  findAll(@Query('genre') genre: string) {
    return genre
      ? `Фильмы в жанре ${genre}`
      : [
          {
            title: 'Fight Club',
          },
          {
            title: 'Pulp Fiction',
          },
        ];
  }
}
