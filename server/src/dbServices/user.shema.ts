import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
require('dotenv').config();

@Schema()
export class User extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  phone: string;

  @Prop({ required: true })
  password: string;

  @Prop({ default: false })
  token: string;

  @Prop({ required: true })
  email: string;

  @Prop({ default: 'user' })
  role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
