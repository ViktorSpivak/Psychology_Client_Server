import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User_Request extends Document {
  @Prop()
  name: string;

  @Prop()
  phone: string;

  @Prop()
  text: string;

  @Prop()
  email: string;
}

export const UserRequestSchema = SchemaFactory.createForClass(User_Request);
