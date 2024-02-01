import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CourseModule } from './course/course.module';
import { QueryModule } from './query/query.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/trainingdb'),
  AuthModule, UsersModule, CourseModule, QueryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
