import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Diploma extends Document {
  
  @Prop({ default: Date })
  date: Date;
  @Prop()
  photo: string;
}

export const DiplomaSchema = SchemaFactory.createForClass(Diploma);
