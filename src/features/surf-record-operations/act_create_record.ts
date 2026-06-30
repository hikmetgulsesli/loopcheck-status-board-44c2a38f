import type { LoopcheckAppApi } from '../loopcheck-status-board/loopcheck-status-board.types';

/**
 * Factory for the "Create Record" action used in the record operations surface.
 *
 * Clears the current selection and opens the record editor so the user can
 * enter a new record.
 */
export function makeCreateRecordAction(app: LoopcheckAppApi): () => void {
  return () => {
    app.selectRecord(null);
    app.navigateTo('record-editor');
  };
}

export default makeCreateRecordAction;
