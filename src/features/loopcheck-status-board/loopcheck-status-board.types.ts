export type LoopcheckScreen =
  | 'status-board'
  | 'record-editor'
  | 'record-operations'
  | 'insights';

export type LoopcheckRecordStatus = 'running' | 'paused' | 'completed';

export interface LoopcheckRecord {
  id: string;
  identifier: string;
  context: string;
  status: LoopcheckRecordStatus;
  tags: string[];
  updatedAt: string;
}

export interface LoopcheckCounts {
  total: number;
  running: number;
  paused: number;
  completed: number;
}

export interface LoopcheckPreferences {
  activePanel: 'board' | 'list' | null;
  viewMode: 'board' | 'list';
}

export interface LoopcheckPersistedState {
  records: LoopcheckRecord[];
  preferences: LoopcheckPreferences;
  version: number;
}

export interface LoopcheckAppState {
  activeScreen: LoopcheckScreen;
  selectedRecordId: string | null;
  activePanel: 'board' | 'list' | null;
  storageStatus: 'loading' | 'ready' | 'error';
  lastError: string | null;
  counts: LoopcheckCounts;
  records: LoopcheckRecord[];
  preferences: LoopcheckPreferences;
}

export interface LoopcheckAppActions {
  navigateTo: (screen: LoopcheckScreen) => void;
  selectRecord: (id: string | null) => void;
  setActivePanel: (panel: 'board' | 'list' | null) => void;
  createRecord: (draft: Omit<LoopcheckRecord, 'id' | 'updatedAt'>) => void;
  updateRecord: (id: string, patch: Partial<Omit<LoopcheckRecord, 'id'>>) => void;
  deleteRecord: (id: string) => void;
  setRecordStatus: (id: string, status: LoopcheckRecordStatus) => void;
  clearError: () => void;
  refreshStorage: () => void;
}

export type LoopcheckAppApi = LoopcheckAppState & LoopcheckAppActions;

export interface LoopcheckStorageResult {
  data: LoopcheckPersistedState | null;
  error: string | null;
}
