import { SetMetadata } from '@nestjs/common';

export const hasPermission = (...permissions: string[]) => SetMetadata('permissions', permissions);