import { BadRequestException } from "@nestjs/common";
import { MES_ERROR, MES_SUCCESS, METHOD } from "src/constants/message";

export const successResponse = (type: string, data: any) => {
  let response = {};
  switch (type) {
    case METHOD.LIST :
      response = {
        message: MES_SUCCESS.LIST_CAR,
        status: true,
        data: data,
      };
      break;
    case METHOD.DETAIL:
      response = {
        message: MES_SUCCESS.DETAIL_CAR,
        status: true,
        data: data,
      };
      break;
    case METHOD.CREATE:
      response = {
        message: MES_SUCCESS.CREATE_CAR,
        status: true,
        data: data,
      };
      break;
    case METHOD.MODIFY:
      response = {
        message: MES_SUCCESS.MODIFY_CAR,
        status: true,
        data: data,
      };
      break;
    default:
      response = {
        message: MES_SUCCESS.COMMON,
        status: true,
      };
      break;
  }
  return response;
};

export const errorResponse = (type: string) => {
  switch (type) {
    case METHOD.LIST:
      throw new BadRequestException(MES_ERROR.LIST_CAR);
    case METHOD.LIST:
      throw new BadRequestException(MES_ERROR.DETAIL_CAR);
    case METHOD.CREATE:
      throw new BadRequestException(MES_ERROR.CREATE_CAR);
    case METHOD.MODIFY:
      throw new BadRequestException(MES_ERROR.MODIFY_CAR);
    default:
      throw new BadRequestException(MES_ERROR.COMMON);
  }
};