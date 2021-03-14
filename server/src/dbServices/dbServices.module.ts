import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { dbServices } from './dbServices.service';
import { User, UserSchema } from './models/user.schema';
import { User_Message, UserMessageSchema } from './models/userMessage.schema';
import { Post, PostSchema } from './models/post.schema';
import { Feedback, FeedbackSchema } from './models/feedback.schema';
import { Diploma, DiplomaSchema } from './models/diploma.schema';

@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: User_Message.name, schema: UserMessageSchema }],
      'userMessages',
    ),
    MongooseModule.forFeature(
      [{ name: User.name, schema: UserSchema }],
      'users',
    ),
    MongooseModule.forFeature(
      [{ name: Post.name, schema: PostSchema }],
      'posts',
    ),
    MongooseModule.forFeature(
      [{ name: Feedback.name, schema: FeedbackSchema }],
      'feedbacks',
    ),
    MongooseModule.forFeature(
      [{ name: Diploma.name, schema: DiplomaSchema }],
      'diplomas',
    ),
  ],
  providers: [dbServices],
  exports: [dbServices],
})
export class DbServicesModule {}
