import type { LoopcheckAppApi } from '../loopcheck-status-board/loopcheck-status-board.types';

export interface SearchRecordsActionOptions {
  /** Optional callback invoked with the current search query. */
  onSearch?: (query: string) => void;
}

/**
 * Factory for a status-board search action.
 *
 * Forwards the query to the optional consumer; the status board presentation
 * layer can apply local filtering when a persisted query state is not used.
 */
export function makeSearchRecordsAction(
  _app: LoopcheckAppApi,
  options?: SearchRecordsActionOptions,
): (query: string) => void {
  return (query: string) => {
    options?.onSearch?.(query);
  };
}

export default makeSearchRecordsAction;
