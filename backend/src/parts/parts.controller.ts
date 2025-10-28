import { Controller, Get } from '@nestjs/common';
import { PartsService } from './parts.service';

@Controller('parts')
export class PartsController {
  constructor(private readonly PartsService: PartsService) { }

  @Get('blade')
  getBlades() {
    return this.PartsService.getBlades();
  }

  @Get('ratchet')
  getRatchets() {
    return this.PartsService.getRatchets();
  }

  @Get('bit')
  getBits() {
    return this.PartsService.getBits();
  }
}
