import type { LoopcheckAppApi } from '../loopcheck-status-board/loopcheck-status-board.types';

export interface SearchRecordsActionOptions {
  /** Optional callback invoked with the current search query. */
  onSearch?: (query: string) => void;
}

/**
 * Factory for a search-records action.
 *
 * The current app state does not include a persisted search query, so the
 * action forwards the query to the optional consumer. The returned handler
 * can be wired to search inputs or left as a no-op when only filtering is
 * needed at the presentation layer.
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
