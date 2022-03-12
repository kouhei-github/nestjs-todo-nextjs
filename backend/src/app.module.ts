import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      "type": "mysql",
      "host": "db",
      "port": 3306,
      "username": "todo-user",
      "password": "todo",
      "database": "nestjs-todo-nextjs",
      "synchronize": false, //trueにするとDB接続時に自動マイグレーションが行われる
      "entities": ["dist/entity/*.entity.{ts,js}"],
      "migrations": ["dist/migration/*.ts"],
      "cli": {
        "entitiesDir": "dist/entity",
        "migrationsDir": "dist/migration/"
      }
    }),
    TasksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}