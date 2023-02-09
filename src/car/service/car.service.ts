import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { isUndefined } from 'lodash';
import { CreateCarDto, UpdateCarDto } from '../dto/car.dto';
import { Car, CarDocument } from '../models/car.model';
import { MES_ERROR } from 'src/constants/message';

@Injectable()
export class CarService {
  constructor(
    @InjectModel(Car.name) private readonly model: Model<CarDocument>,
  ) {}

  async findAll(): Promise<Car[]> {
    return await this.model.find().exec();
  }

  async findOne(id: string): Promise<Car> {
    return await this.model.findOne({ _id: new mongoose.Types.ObjectId(id) });
  }

  async create(createCarDto: CreateCarDto): Promise<Car> {
    return await new this.model({
      name: createCarDto.name,
      price: createCarDto.price,
      type_of_car: createCarDto.typeOfCar,
      company: createCarDto.company,
      created_at: new Date(),
      update_at: new Date(),
    }).save();
  }

  async update(id: string, updateCarDto: UpdateCarDto): Promise<Car> {
    const item = await this.model.findOne({
      _id: new mongoose.Types.ObjectId(id),
    });

    if (!item) {
      throw new BadRequestException(MES_ERROR.CAR_NOT_FOUND);
    }

    item.set({
      ...(!isUndefined(updateCarDto.name) && { name: updateCarDto.name }),
      ...(!isUndefined(updateCarDto.price) && { price: updateCarDto.price }),
      ...(!isUndefined(updateCarDto.typeOfCar) && {
        type_of_car: updateCarDto.typeOfCar,
      }),
      ...(!isUndefined(updateCarDto.company) && {
        company: updateCarDto.company,
      }),
      update_at: new Date(),
    });

    return await item.save();
  }
}
