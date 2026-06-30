import type { LoopcheckAppApi } from '../loopcheck-status-board/loopcheck-status-board.types';

/**
 * Factory for selecting a record from the record operations surface.
 */
export function makeSelectRecordAction(app: LoopcheckAppApi): (id: string | null) => void {
  return (id: string | null) => {
    app.selectRecord(id);
  };
}

export default makeSelectRecordAction;
