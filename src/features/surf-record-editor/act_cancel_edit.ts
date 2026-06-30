import type { LoopcheckAppApi, LoopcheckScreen } from '../loopcheck-status-board/loopcheck-status-board.types';

export interface CancelEditActionOptions {
  /** Screen to return to when the user cancels editing. */
  fallback?: LoopcheckScreen;
}

/**
 * Factory for the record editor "Cancel" action.
 *
 * Discards the editing context by clearing the selected record and returning
 * to the configured fallback screen.
 */
export function makeCancelEditAction(
  app: LoopcheckAppApi,
  options?: CancelEditActionOptions,
): () => void {
  const fallback = options?.fallback ?? 'status-board';
  return () => {
    app.selectRecord(null);
    app.navigateTo(fallback);
  };
}

export default makeCancelEditAction;
