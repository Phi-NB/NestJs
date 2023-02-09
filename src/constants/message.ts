export enum MES_COMMON {
  
}

export enum MES_SUCCESS {
  COMMON = 'Action complete successfully',
  DETAIL_CAR = 'Get detail car successfully',
  LIST_CAR = 'Get list cars successfully',
  MODIFY_CAR = 'Modify car successfully',
  CREATE_CAR = 'Create car successfully',
}

export enum MES_ERROR {
  COMMON = 'Action failed',
  DETAIL_CAR = 'Car not found',
  CAR_NOT_FOUND = 'Car not found',
  LIST_CAR = 'Get list cars failed',
  MODIFY_CAR = 'Modify car failed',
  CREATE_CAR = 'Create car failed',
}

export enum METHOD {
  CREATE = 'create',
  MODIFY = 'modify',
  LIST = 'list',
  DETAIL = 'detail',
}