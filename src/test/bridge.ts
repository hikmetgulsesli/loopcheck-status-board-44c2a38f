import type { LoopcheckAppApi } from '../features/loopcheck-status-board/loopcheck-status-board.types';

declare global {
  interface Window {
    app?: {
      activeScreen: LoopcheckAppApi['activeScreen'];
      selectedRecord: LoopcheckAppApi['selectedRecordId'];
      counts: LoopcheckAppApi['counts'];
      storageStatus: LoopcheckAppApi['storageStatus'];
      lastError: LoopcheckAppApi['lastError'];
      activePanel: LoopcheckAppApi['activePanel'];
      records: LoopcheckAppApi['records'];
      preferences: LoopcheckAppApi['preferences'];
      navigateTo: LoopcheckAppApi['navigateTo'];
      selectRecord: LoopcheckAppApi['selectRecord'];
      setActivePanel: LoopcheckAppApi['setActivePanel'];
      createRecord: LoopcheckAppApi['createRecord'];
      updateRecord: LoopcheckAppApi['updateRecord'];
      deleteRecord: LoopcheckAppApi['deleteRecord'];
      setRecordStatus: LoopcheckAppApi['setRecordStatus'];
      clearError: LoopcheckAppApi['clearError'];
      refreshStorage: LoopcheckAppApi['refreshStorage'];
    };
  }
}

let currentAppApi: LoopcheckAppApi | null = null;

export function registerAppApi(api: LoopcheckAppApi): void {
  currentAppApi = api;
  window.app = {
    get activeScreen() {
      return api.activeScreen;
    },
    get selectedRecord() {
      return api.selectedRecordId;
    },
    get counts() {
      return api.counts;
    },
    get storageStatus() {
      return api.storageStatus;
    },
    get lastError() {
      return api.lastError;
    },
    get activePanel() {
      return api.activePanel;
    },
    get records() {
      return api.records;
    },
    get preferences() {
      return api.preferences;
    },
    navigateTo: (...args) => api.navigateTo(...args),
    selectRecord: (...args) => api.selectRecord(...args),
    setActivePanel: (...args) => api.setActivePanel(...args),
    createRecord: (...args) => api.createRecord(...args),
    updateRecord: (...args) => api.updateRecord(...args),
    deleteRecord: (...args) => api.deleteRecord(...args),
    setRecordStatus: (...args) => api.setRecordStatus(...args),
    clearError: (...args) => api.clearError(...args),
    refreshStorage: (...args) => api.refreshStorage(...args),
  };
}

export function getRegisteredAppApi(): LoopcheckAppApi | null {
  return currentAppApi;
}

export function unregisterAppApi(): void {
  currentAppApi = null;
  if (typeof window !== 'undefined') {
    window.app = undefined;
  }
}