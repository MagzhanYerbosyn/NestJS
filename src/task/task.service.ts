import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService {
  private tasks = [
    {
      id: 1,
      title: 'Learn NestJS',
      isCompleted: false,
    },
    {
      id: 2,
      title: 'Build API',
      isCompleted: true,
    },
  ];
  findAll() {
    return this.tasks;
  }

  findById(id: number) {
    return this.tasks.find((task) => task.id === id);
  }
}
