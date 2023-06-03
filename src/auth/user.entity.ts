import { Task } from 'src/tasks/task.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  // one side of a relation can be eager. prefetching.
  @OneToMany((_type) => Task, (task) => task.user, { eager: true })
  tasks: Task[];
}
