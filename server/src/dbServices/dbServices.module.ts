import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { dbServices } from './dbServices.service';
import { User, UserSchema } from './models/user.schema';
import { User_Request, UserRequestSchema } from './models/userRequest.schema';
import { Post, PostSchema } from './models/post.schema';

@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: User_Request.name, schema: UserRequestSchema }],
      'userRequests',
    ),
    MongooseModule.forFeature(
      [{ name: User.name, schema: UserSchema }],
      'users',
    ),
    MongooseModule.forFeature(
      [{ name: Post.name, schema: PostSchema }],
      'posts',
    ),
  ],
  providers: [dbServices],
  exports: [dbServices],
})
export class DbServicesModule {}
