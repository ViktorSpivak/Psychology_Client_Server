import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Post extends Document {
  @Prop()
  photo: string;

  @Prop({ default: Date })
  date: Date;

  @Prop({ required: true })
  text: string;

  @Prop()
  topic: string;

  @Prop({ required: true })
  headline: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);
