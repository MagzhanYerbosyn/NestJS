import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActorEntity } from '../actor/entities/actor.entity.js';
import { MovieEntity } from '../movie/entities/movie.entity.js';
import { MovieService } from '../movie/movie.service.js';
import { ReviewEntity } from './entities/review.entity.js';
import { ReviewController } from './review.controller.js';
import { ReviewService } from './review.service.js';

@Module({
  imports: [TypeOrmModule.forFeature([ReviewEntity, MovieEntity, ActorEntity])],
  controllers: [ReviewController],
  providers: [ReviewService, MovieService],
})
export class ReviewModule {}
