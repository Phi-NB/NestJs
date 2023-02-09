import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { ZodObject } from 'zod';

@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor(private schema: ZodObject<any>) {}

  transform(value: any) {
    const rep = this.schema.safeParse(value) as {
      success: boolean;
      data?: any;
      error?: any;
    };
    
    if (!rep.success) {
      throw new BadRequestException(rep?.error);
    }


    return value;
  }
}
