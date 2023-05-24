import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';

// nestjs decorator that turns class into module.
@Module({
  imports: [TasksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
