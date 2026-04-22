import {
  Controller,
  Get,
  Query,
  UseInterceptors,
  ValidationPipe,
} from '@nestjs/common';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { TrainsService } from './trains.service';
import { SearchTrainsDto } from './dto/search-trains.dto';

@Controller('trains')
@UseInterceptors(CacheInterceptor)
export class TrainsController {
  constructor(private readonly trainsService: TrainsService) {}

  @Get()
  async getCheapest(
    @Query(new ValidationPipe({ transform: true, whitelist: true }))
    query: SearchTrainsDto,
  ) {
    return this.trainsService.getCheapestTrips(query);
  }
}
