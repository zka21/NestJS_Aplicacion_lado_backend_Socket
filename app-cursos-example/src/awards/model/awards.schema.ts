import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type AwardsDocument = HydratedDocument<Awards>;

@Schema({ timestamps: true })
export class Awards {
  @Prop()
  title: string;

  @Prop()
  idUser:mongoose.Types.ObjectId;

  @Prop()
  description: string;
}

export const AwardsSchema = SchemaFactory.createForClass(Awards);
