import type { LoopcheckAppApi } from '../loopcheck-status-board/loopcheck-status-board.types';

export interface ExportSummaryActionOptions {
  /** Optional callback invoked when the export action is triggered. */
  onExport?: () => void;
}

/**
 * Factory for the insights "Export Summary" action.
 *
 * Triggers the optional consumer callback so the insights surface can
 * implement export formatting (CSV, JSON, clipboard, etc.).
 */
export function makeExportSummaryAction(
  _app: LoopcheckAppApi,
  options?: ExportSummaryActionOptions,
): () => void {
  return () => {
    options?.onExport?.();
  };
}

export default makeExportSummaryAction;
