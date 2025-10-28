import { Injectable } from '@nestjs/common';
import { BitDb } from 'src/parts/db/bit.db';
import { BladeDb } from 'src/parts/db/blade.db';
import { RatchetDb } from 'src/parts/db/ratchet.db';

@Injectable()
export class PartsService {
  constructor(
    private readonly bitDb: BitDb,
    private readonly ratchetDb: RatchetDb,
    private readonly bladesDb: BladeDb,
  ) { }

  getBlades() {
    return this.bladesDb.getAll();
  }

  getRatchets() {
    return this.ratchetDb.getAll();
  }

  getBits() {
    return this.bitDb.getAll();
  }

}
