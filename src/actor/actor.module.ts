import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActorController } from './actor.controller.js';
import { ActorService } from './actor.service.js';
import { ActorEntity } from './entities/actor.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([ActorEntity])],
  controllers: [ActorController],
  providers: [ActorService],
})
export class ActorModule {}
