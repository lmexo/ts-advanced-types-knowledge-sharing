import { OperationMode } from './types/01-union-types';
import { write, writeLine } from './util';

export class RoomService {
  constructor(public readonly mode: OperationMode) {}

  /**
   * Clean up the room
   */
  clean() {
    write('cleaning room ... ');
    writeLine('done!');
  }

  /**
   * Serve a drink
   */
  serveDrink() {
    console.log('Serving drinks ...');

    // TODO: report done only when in extended operation mode, otherwise report error
    writeLine('done!');
  }
}
