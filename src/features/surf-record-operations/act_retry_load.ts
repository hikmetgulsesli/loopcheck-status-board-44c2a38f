import type { LoopcheckAppApi } from '../loopcheck-status-board/loopcheck-status-board.types';

/**
 * Factory for the "Retry Load" action used when storage load fails.
 *
 * Clears any previous error and attempts to reload persisted state from the
 * repository.
 */
export function makeRetryLoadAction(app: LoopcheckAppApi): () => void {
  return () => {
    app.clearError();
    app.refreshStorage();
  };
}

export default makeRetryLoadAction;
