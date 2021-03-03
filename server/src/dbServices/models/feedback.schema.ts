import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Feedback extends Document {
  
  @Prop({ default: Date })
  date: Date;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  name: string;
}

export const FeedbackSchema = SchemaFactory.createForClass(Feedback);
