import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task, TaskStatus } from './tasks.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task-dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { Repository } from 'typeorm';
import { Task as TaskEntity } from './task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskEntity)
    private taskRepository: Repository<Task>,
  ) {}

  private tasks: Task[] = [];

  public getAllTasks(): Task[] {
    return this.tasks;
  }

  public getTasksWithFilters(filterDto: GetTasksFilterDto): Task[] {
    const { status, search } = filterDto;

    let tasks = this.getAllTasks();

    if (status) {
      tasks = tasks.filter((task) => task.status === status);
    }

    if (search) {
      tasks = tasks.filter((task) => {
        if (task.title.includes(search) || task.description.includes(search))
          return true;
        return false;
      });
    }

    return tasks;
  }

  public createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;

    const task: Task = {
      id: uuid(),
      title: title,
      description: description,
      status: TaskStatus.OPEN,
    };

    this.tasks.push(task);

    return task;
  }

  public getTaskById(id: string): Task {
    const found = this.tasks.find((task) => {
      return task.id === id;
    });

    if (!found) {
      throw new NotFoundException();
    }

    return found;
  }

  public deleteTaskById(id: string): string {
    const found = this.getTaskById(id);
    this.tasks = this.tasks.filter((task) => task.id !== id);
    return id;
  }

  public updateTaskStatusById(id: string, status: TaskStatus): Task {
    var task = this.getTaskById(id); // advantage of outsourcing work to services from controller.
    if (status === 'DONE') {
      task.status = TaskStatus.DONE;
    } else if (status === 'IN_PROGRESS') {
      task.status = TaskStatus.IN_PROGRESS;
    } else if (status === 'OPEN') {
      task.status = TaskStatus.OPEN;
    }
    return task;
  }
}
