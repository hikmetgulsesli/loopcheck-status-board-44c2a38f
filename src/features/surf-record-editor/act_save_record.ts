import type { LoopcheckAppApi, LoopcheckScreen } from '../loopcheck-status-board/loopcheck-status-board.types';

export interface SaveRecordActionOptions {
  /** Screen to navigate to after the save action is triggered. */
  onSaved?: LoopcheckScreen;
}

/**
 * Factory for the record editor "Save Record" action.
 *
 * The store already persists record changes automatically, so the save
 * action completes the editing flow by navigating back to the status board
 * (or another configured screen).
 */
export function makeSaveRecordAction(
  app: LoopcheckAppApi,
  options?: SaveRecordActionOptions,
): () => void {
  const target = options?.onSaved ?? 'status-board';
  return () => {
    app.navigateTo(target);
  };
}

export default makeSaveRecordAction;
