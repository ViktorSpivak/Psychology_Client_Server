import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User_Message extends Document {
  @Prop()
  name: string;

  @Prop()
  phone: string;

  @Prop()
  text: string;

  @Prop()
  email: string;
}

export const UserMessageSchema = SchemaFactory.createForClass(User_Message);
