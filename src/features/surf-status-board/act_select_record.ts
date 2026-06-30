import type { LoopcheckAppApi } from '../loopcheck-status-board/loopcheck-status-board.types';

/**
 * Factory for selecting a record from the status board.
 *
 * The selected record id is kept in app state so that detail panels and
 * status transitions can operate on the correct record.
 */
export function makeSelectRecordAction(app: LoopcheckAppApi): (id: string | null) => void {
  return (id: string | null) => {
    app.selectRecord(id);
  };
}

export default makeSelectRecordAction;
