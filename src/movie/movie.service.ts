import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMovieDto } from './dto/create-movie.dto.js';
import { UpdateMovieDto } from './dto/update-movie.dto.js';
import { MovieEntity } from './entities/movie.entity.js';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(MovieEntity)
    private readonly movieRepository: Repository<MovieEntity>,
  ) {}

  async findAll(): Promise<MovieEntity[]> {
    return await this.movieRepository.find({
      where: {
        isPublic: true,
      },
      order: {
        createdAt: 'desc',
      },
      select: {
        id: true,
        title: true,
      },
    });
  }

  async findById(id: number): Promise<MovieEntity> {
    const movie = await this.movieRepository.findOne({
      where: {
        id,
      },
    });

    if (!movie) throw new NotFoundException('Фильм не найден');

    return movie;
  }

  async create(dto: CreateMovieDto): Promise<MovieEntity> {
    const movie = this.movieRepository.create(dto);

    return this.movieRepository.save(movie);
  }

  async update(id: number, dto: UpdateMovieDto): Promise<boolean> {
    const movie = await this.findById(id);

    Object.assign(movie, dto);

    await this.movieRepository.save(movie);

    return true;
  }
}
