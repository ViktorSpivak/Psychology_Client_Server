import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop()
  name: string;

  @Prop()
  phone?: string;

  @Prop()
  password: string;

  @Prop({ default: null })
  token: string;

  @Prop()
  email: string;

  @Prop({ default: null })
  role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
