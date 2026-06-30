import type {
  LoopcheckAppApi,
  LoopcheckRecordStatus,
} from '../loopcheck-status-board/loopcheck-status-board.types';

/**
 * Factory for updating a record's status from the status board.
 */
export function makeUpdateRecordStatusAction(
  app: LoopcheckAppApi,
): (id: string, status: LoopcheckRecordStatus) => void {
  return (id: string, status: LoopcheckRecordStatus) => {
    if (!id) return;
    app.setRecordStatus(id, status);
  };
}

export default makeUpdateRecordStatusAction;
