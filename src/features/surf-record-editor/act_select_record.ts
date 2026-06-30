import type { LoopcheckAppApi } from '../loopcheck-status-board/loopcheck-status-board.types';

/**
 * Factory for selecting (or clearing) the active record.
 *
 * Passing `null` clears the selection, which is useful when entering the
 * editor to create a new record.
 */
export function makeSelectRecordAction(app: LoopcheckAppApi): (id: string | null) => void {
  return (id: string | null) => {
    app.selectRecord(id);
  };
}

export default makeSelectRecordAction;
