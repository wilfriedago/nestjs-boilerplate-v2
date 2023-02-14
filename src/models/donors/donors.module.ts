import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from '@/models/users/entities/user.entity';
import { IsExist } from '@/utils/validators/is-exists.validator';
import { IsNotExist } from '@/utils/validators/is-not-exists.validator';

import { DonorsController } from './donors.controller';
import { DonorsService } from './donors.service';
import { Donor } from './entities/donor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Donor, User])],
  controllers: [DonorsController],
  providers: [DonorsService, IsExist, IsNotExist],
  exports: [DonorsService],
})
export class DonorsModule {}
