import { useEffect } from 'react';
import {
  InsightsLoopcheckStatusBoard,
  RecordEditorLoopcheckStatusBoard,
  RecordOperationsLoopcheckStatusBoard,
  StatusBoardLoopcheckStatusBoard,
} from './screens';
import { LoopcheckAppProvider, useLoopcheckApp } from './features/loopcheck-status-board/loopcheck-status-board.store';
import { registerAppApi, unregisterAppApi } from './test/bridge';

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

  const statusBoardActions = {
    'notifications-1': () => {},
    'account-circle-2': () => {},
    'create-record-3': () => {
      app.selectRecord(null);
      app.navigateTo('record-editor');
    },
    'board-view-4': () => app.setActivePanel('board'),
    'list-view-5': () => app.setActivePanel('list'),
    'filter-6': () => {},
    'sort-7': () => {},
    'play-arrow-8': () => {
      if (app.selectedRecordId) app.setRecordStatus(app.selectedRecordId, 'running');
    },
    'play-arrow-9': () => {
      if (app.selectedRecordId) app.setRecordStatus(app.selectedRecordId, 'running');
    },
    'pause-10': () => {
      if (app.selectedRecordId) app.setRecordStatus(app.selectedRecordId, 'paused');
    },
    'refresh-11': () => app.refreshStorage(),
    ...commonActions,
  };

  const recordEditorActions = {
    'menu-1': () => {},
    'notifications-2': () => {},
    'account-circle-3': () => {},
    'create-record-4': () => {
      app.selectRecord(null);
    },
    'close-5': () => app.navigateTo('status-board'),
    'close-6': () => app.navigateTo('status-board'),
    'cancel-7': () => app.navigateTo('status-board'),
    'save-record-8': () => {
      app.navigateTo('status-board');
    },
    ...commonActions,
  };

  const recordOperationsActions = {
    'notifications-1': () => {},
    'account-circle-2': () => {},
    'create-record-3': () => {
      app.selectRecord(null);
      app.navigateTo('record-editor');
    },
    'filter-list-4': () => {},
    'chevron-left-5': () => {},
    '2-6': () => {},
    'chevron-right-7': () => {},
    'more-vert-8': () => {},
    'pause-9': () => {
      if (app.selectedRecordId) app.setRecordStatus(app.selectedRecordId, 'paused');
    },
    'restart-10': () => {
      if (app.selectedRecordId) app.setRecordStatus(app.selectedRecordId, 'running');
    },
    ...commonActions,
  };

  const insightsActions = {
    'notifications-1': () => {},
    'account-circle-2': () => {},
    'create-record-3': () => {
      app.selectRecord(null);
      app.navigateTo('record-editor');
    },
    'filter-insights-4': () => {},
    'export-summary-5': () => {},
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
