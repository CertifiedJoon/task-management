import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/create-task-dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { Repository } from 'typeorm';
import { Task } from './task.entity';
import { User } from 'src/auth/user.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

  async getTasks(filterDto: GetTasksFilterDto): Promise<Task[]> {
    const { status, search } = filterDto;

    const query = this.tasksRepository.createQueryBuilder('task');

    if (status) {
      //:status and status in object are mapped, :hello -> hello
      query.where('task.status = :status', { status });
    }

    if (search) {
      query.andWhere(
        'task.title LIKE :search OR task.description LIKE :search',
        { search: `%${search}%` },
      );
    }

    const tasks = await query.getMany();

    return tasks;
  }

  async createTask(createTaskDto: CreateTaskDto, user: User): Promise<Task> {
    const { title, description } = createTaskDto;

    const task = this.tasksRepository.create({
      title,
      description,
      status: TaskStatus.OPEN,
      user,
    });

    await this.tasksRepository.save(task);
    return task;
  }

  async getTaskById(id: string): Promise<Task> {
    const found = await this.tasksRepository.findOne({
      where: {
        id: id,
      },
    });

    if (!found) {
      throw new NotFoundException(`Task with ID "${id}" not found.`);
    }

    return found;
  }

  async deleteTaskById(id: string): Promise<string> {
    const found = await this.tasksRepository.findOneBy({ id: id });

    if (!found) {
      throw new NotFoundException(`Task with id "${id}" not found.`);
    }

    await this.tasksRepository.remove(found);
    return id;
  }
  // public deleteTaskById(id: string): string {
  //   const found = this.getTaskById(id);
  //   this.tasks = this.tasks.filter((task) => task.id !== id);
  //   return id;
  // }

  async updateTaskStatusById(id: string, status: TaskStatus): Promise<Task> {
    const task = await this.tasksRepository.findOneBy({ id: id });

    if (!task) {
      throw new NotFoundException(`Task with id "${id}" not found.`);
    }

    task.status = status;
    await this.tasksRepository.save(task);
    return task;
  }

  // public updateTaskStatusById(id: string, status: TaskStatus): Task {
  //   var task = this.getTaskById(id); // advantage of outsourcing work to services from controller.
  //   if (status === 'DONE') {
  //     task.status = TaskStatus.DONE;
  //   } else if (status === 'IN_PROGRESS') {
  //     task.status = TaskStatus.IN_PROGRESS;
  //   } else if (status === 'OPEN') {
  //     task.status = TaskStatus.OPEN;
  //   }
  //   return task;
  // }
}
