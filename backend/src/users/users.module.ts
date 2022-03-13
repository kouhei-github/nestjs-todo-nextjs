import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';   // 追加
import { User } from './users.entity';
import {UserFunctionCommon} from "./dto/common/user-function.common";

@Module({
  imports: [
    TypeOrmModule.forFeature([User])   // 追加
  ],
  controllers: [UsersController],
  providers: [UsersService, UserFunctionCommon]
})
export class UsersModule {}
