import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task-dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

@Injectable()
export class TasksService {
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
    return this.tasks.find((task) => {
      return task.id === id;
    });
  }

  public deleteTaskById(id: string): string {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    return id;
  }

  public updateTaskStatusById(id: string, status: TaskStatus): Task {
    var task = this.tasks.find((task) => task.id === id);
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
