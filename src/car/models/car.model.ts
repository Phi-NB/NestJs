import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CarDocument = Car & Document;

@Schema({ versionKey: false })
export class Car {
  @Prop({ required: true })
  price: number;

  @Prop({ required: true, index: { unique: true } })
  name: string;

  @Prop({ required: true })
  company: string;

  @Prop({ required: true })
  type_of_car: string;

  @Prop()
  created_at: Date;

  @Prop()
  update_at?: Date;
}

export const CarSchema = SchemaFactory.createForClass(Car);
