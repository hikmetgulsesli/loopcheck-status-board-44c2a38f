import type { LoopcheckAppApi } from '../loopcheck-status-board/loopcheck-status-board.types';

export interface ExportSummaryActionOptions {
  /** Optional callback invoked when the export action is triggered. */
  onExport?: () => void;
  /** Filename for the downloaded summary. Defaults to "loopcheck-summary.json". */
  filename?: string;
}

/**
 * Factory for the insights "Export Summary" action.
 *
 * Generates a JSON snapshot of the current records and triggers a browser
 * download. The optional {@link ExportSummaryActionOptions.onExport} callback
 * can be used by the presentation layer to add additional export formatting.
 */
export function makeExportSummaryAction(
  app: LoopcheckAppApi,
  options?: ExportSummaryActionOptions,
): () => void {
  return () => {
    const payload = {
      exportedAt: new Date().toISOString(),
      count: app.counts.total,
      records: app.records,
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = options?.filename || 'loopcheck-summary.json';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    setTimeout(() => URL.revokeObjectURL(url), 100);

    options?.onExport?.();
  };
}

export default makeExportSummaryAction;
