import { useEffect } from 'react';
import {
  InsightsLoopcheckStatusBoard,
  RecordEditorLoopcheckStatusBoard,
  RecordOperationsLoopcheckStatusBoard,
  StatusBoardLoopcheckStatusBoard,
} from './screens';
import { LoopcheckAppProvider, useLoopcheckApp } from './features/loopcheck-status-board/loopcheck-status-board.store';
import { registerAppApi, unregisterAppApi } from './test/bridge';
import { makeSaveRecordAction } from './features/surf-record-editor/act_save_record';
import { makeCancelEditAction } from './features/surf-record-editor/act_cancel_edit';
import { makeUpdateRecordStatusAction as makeStatusBoardUpdateRecordStatusAction } from './features/surf-status-board/act_update_record_status';
import { makeCreateRecordAction } from './features/surf-record-operations/act_create_record';
import { makeUpdateRecordStatusAction as makeOperationsUpdateRecordStatusAction } from './features/surf-record-operations/act_update_record_status';
import { makeFilterInsightsAction } from './features/surf-status-board/act_filter_insights';
import { makeExportSummaryAction } from './features/surf-status-board/act_export_summary';

function AppShell() {
  const app = useLoopcheckApp();

  useEffect(() => {
    registerAppApi(app);
    return () => {
      unregisterAppApi();
    };
  }, [app]);

  const commonActions = {
    'operations-1': () => app.navigateTo('record-operations'),
    'status-board-2': () => app.navigateTo('status-board'),
    'insights-3': () => app.navigateTo('insights'),
    'settings-4': () => app.navigateTo('status-board'),
  } as const;

  const createRecord = makeCreateRecordAction(app);
  const saveRecord = makeSaveRecordAction(app, { onSaved: 'status-board', refresh: true });
  const cancelEdit = makeCancelEditAction(app, { fallback: 'status-board' });
  const statusBoardUpdateStatus = makeStatusBoardUpdateRecordStatusAction(app);
  const operationsUpdateStatus = makeOperationsUpdateRecordStatusAction(app);
  const filterInsights = makeFilterInsightsAction(app);
  const exportSummary = makeExportSummaryAction(app);

  const statusBoardActions = {
    'notifications-1': () => {},
    'account-circle-2': () => {},
    'create-record-3': createRecord,
    'board-view-4': () => app.setActivePanel('board'),
    'list-view-5': () => app.setActivePanel('list'),
    'filter-6': () => {},
    'sort-7': () => {},
    'play-arrow-8': () => {
      if (app.selectedRecordId) statusBoardUpdateStatus(app.selectedRecordId, 'running');
    },
    'play-arrow-9': () => {
      if (app.selectedRecordId) statusBoardUpdateStatus(app.selectedRecordId, 'running');
    },
    'pause-10': () => {
      if (app.selectedRecordId) statusBoardUpdateStatus(app.selectedRecordId, 'paused');
    },
    'refresh-11': () => app.refreshStorage(),
    ...commonActions,
  };

  const recordEditorActions = {
    'menu-1': () => {},
    'notifications-2': () => {},
    'account-circle-3': () => {},
    'create-record-4': createRecord,
    'close-5': () => app.navigateTo('status-board'),
    'close-6': () => app.navigateTo('status-board'),
    'cancel-7': cancelEdit,
    'save-record-8': saveRecord,
    ...commonActions,
  };

  const recordOperationsActions = {
    'notifications-1': () => {},
    'account-circle-2': () => {},
    'create-record-3': createRecord,
    'filter-list-4': () => {},
    'chevron-left-5': () => {},
    '2-6': () => {},
    'chevron-right-7': () => {},
    'more-vert-8': () => {},
    'pause-9': () => {
      if (app.selectedRecordId) operationsUpdateStatus(app.selectedRecordId, 'paused');
    },
    'restart-10': () => {
      if (app.selectedRecordId) operationsUpdateStatus(app.selectedRecordId, 'running');
    },
    ...commonActions,
  };

  const insightsActions = {
    'notifications-1': () => {},
    'account-circle-2': () => {},
    'create-record-3': createRecord,
    'filter-insights-4': filterInsights,
    'export-summary-5': exportSummary,
    'more-horiz-6': () => {},
    'review-queue-7': () => app.navigateTo('record-operations'),
    ...commonActions,
  };

  return (
    <div
      data-setfarm-root="baseline"
      data-testid="setfarm-app-root"
      className="relative flex min-h-screen w-full overflow-hidden bg-slate-50 text-slate-950"
    >
      {app.activeScreen === 'status-board' && (
        <StatusBoardLoopcheckStatusBoard actions={statusBoardActions} />
      )}
      {app.activeScreen === 'record-editor' && (
        <RecordEditorLoopcheckStatusBoard actions={recordEditorActions} />
      )}
      {app.activeScreen === 'record-operations' && (
        <RecordOperationsLoopcheckStatusBoard actions={recordOperationsActions} />
      )}
      {app.activeScreen === 'insights' && (
        <InsightsLoopcheckStatusBoard actions={insightsActions} />
      )}
    </div>
  );
}

export default function App() {
  return (
    <LoopcheckAppProvider>
      <AppShell />
    </LoopcheckAppProvider>
  );
}
