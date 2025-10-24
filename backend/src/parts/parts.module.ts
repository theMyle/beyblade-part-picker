import { Module } from '@nestjs/common';
import { PartsController } from './parts.controller';
import { PartsService } from './parts.service';
import { BitDb, MockBitsDb } from './db/bit.db';
import { MockRatchetDb, RatchetDb } from './db/ratchet.db';
import { BladeDb, MockBladeDb } from './db/blade.db';

@Module({
  controllers: [PartsController],
  providers: [PartsService,
    {
      provide: BitDb,
      useValue: MockBitsDb,
    },
    {
      provide: RatchetDb,
      useValue: MockRatchetDb,
    },
    {
      provide: BladeDb,
      useValue: MockBladeDb,
    },
  ]
})
export class PartsModule { }
