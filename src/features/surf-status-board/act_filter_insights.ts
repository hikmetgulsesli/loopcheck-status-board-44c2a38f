import type { LoopcheckAppApi } from '../loopcheck-status-board/loopcheck-status-board.types';

export interface FilterInsightsActionOptions {
  /** Optional callback invoked when the filter action is triggered. */
  onFilter?: () => void;
}

/**
 * Factory for the insights "Filter Insights" action.
 *
 * Triggers the optional consumer callback. The insights surface can apply
 * local filtering behavior as needed.
 */
export function makeFilterInsightsAction(
  _app: LoopcheckAppApi,
  options?: FilterInsightsActionOptions,
): () => void {
  return () => {
    options?.onFilter?.();
  };
}

export default makeFilterInsightsAction;
