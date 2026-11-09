import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActorEntity } from '../actor/entities/actor.entity.js';
import { MovieEntity } from './entities/movie.entity.js';
import { MovieController } from './movie.controller.js';
import { MovieService } from './movie.service.js';

@Module({
  imports: [TypeOrmModule.forFeature([MovieEntity, ActorEntity])],
  controllers: [MovieController],
  providers: [MovieService],
  exports: [MovieService],
})
export class MovieModule {}
