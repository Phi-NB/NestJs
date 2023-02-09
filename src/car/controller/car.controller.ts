import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CreateCarDto, UpdateCarDto } from '../dto/car.dto';
import { CarService } from '../service/car.service';
import { errorResponse, successResponse } from '../common/response';
import { METHOD } from 'src/constants/message';
import { ROUTE } from 'src/constants/database';

@Controller(ROUTE.CAR)
export class CarController {
  constructor(private readonly service: CarService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(@Body() createCarDto: CreateCarDto) {
    try {
      const result = await this.service.create(createCarDto);

      if (result) {
        return successResponse(METHOD.CREATE, result);
      } else {
        return errorResponse(METHOD.CREATE);
      }
    } catch (error) {
      return errorResponse('error');
    }
  }

  @Put(':id')
  async modify(
    @Param('id')
    id: string,
    @Body() UpdateCarDto: UpdateCarDto,
  ) {
    try {
      const result = await this.service.update(id, UpdateCarDto);

      if (result) {
        return successResponse(METHOD.MODIFY, result);
      } else {
        return errorResponse(METHOD.MODIFY);
      }
    } catch (error) {
      return errorResponse('error');
    }
  }

  @Get(':id')
  async detail(@Param('id') id: string) {
    try {
      const result = await this.service.findOne(id);

      if (result) {
        return successResponse(METHOD.DETAIL, result);
      } else {
        return errorResponse(METHOD.DETAIL);
      }
    } catch (error) {
      return errorResponse('error');
    }
  }

  @Get()
  async list() {
    try {
      const result = await this.service.findAll();

      if (result) {
        return successResponse(METHOD.LIST, result);
      } else {
        return errorResponse(METHOD.LIST);
      }
    } catch (error) {}
  }
}
