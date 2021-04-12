import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Program extends Document {
  
  @Prop({ default: Date })
  date: Date;
  @Prop()
  name: string;
  @Prop()
  video: string;
  @Prop()
  target: string;
  @Prop()
  needs: string;
  @Prop()
  content: string;
  @Prop()
  practice: string;
  @Prop()
  how: string;
  @Prop()
  formats: string;
}

export const ProgramSchema = SchemaFactory.createForClass(Program);
