import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import type {
  LoopcheckAppApi,
  LoopcheckAppState,
  LoopcheckScreen,
  LoopcheckRecord,
  LoopcheckRecordStatus,
} from './loopcheck-status-board.types';
import { createLoopcheckRepo } from './loopcheck-status-board.repo';
import {
  buildCounts,
  buildDefaultPersistedState,
  DEFAULT_PREFERENCES,
} from '../../__fixtures__/loopcheck-status-board.fixture';

const defaultState: LoopcheckAppState = {
  activeScreen: 'status-board',
  selectedRecordId: null,
  activePanel: 'board',
  storageStatus: 'loading',
  lastError: null,
  counts: buildCounts(buildDefaultPersistedState().records),
  records: buildDefaultPersistedState().records,
  preferences: DEFAULT_PREFERENCES,
};

const LoopcheckAppContext = createContext<LoopcheckAppApi | null>(null);

export function useLoopcheckApp(): LoopcheckAppApi {
  const ctx = useContext(LoopcheckAppContext);
  if (ctx === null) {
    throw new Error('useLoopcheckApp must be used within a LoopcheckAppProvider');
  }
  return ctx;
}

export interface LoopcheckAppProviderProps {
  children: ReactNode;
  initialState?: Partial<LoopcheckAppState>;
}

export function LoopcheckAppProvider({ children, initialState }: LoopcheckAppProviderProps) {
  const repo = useMemo(() => createLoopcheckRepo(), []);
  const [state, setState] = useState<LoopcheckAppState>({
    ...defaultState,
    ...initialState,
  });

  // Synchronize persisted records and preferences to localStorage whenever
  // the ready-state changes. Keeping this side effect outside of setState
  // updaters keeps state updates pure.
  useEffect(() => {
    if (state.storageStatus !== 'ready') {
      return;
    }
    const result = repo.save({
      version: 1,
      records: state.records,
      preferences: state.preferences,
    });
    if (!result.ok) {
      setState((prev) =>
        prev.lastError === result.error ? prev : { ...prev, lastError: result.error ?? 'Save failed.' },
      );
    }
  }, [state.records, state.preferences, state.storageStatus, repo]);

  const refreshStorage = useCallback(() => {
    const result = repo.load();
    const loaded = result.data ?? buildDefaultPersistedState();
    setState((prev) => ({
      ...prev,
      records: loaded.records,
      preferences: loaded.preferences,
      counts: buildCounts(loaded.records),
      storageStatus: 'ready',
      lastError: result.error,
    }));
  }, [repo]);

  useEffect(() => {
    refreshStorage();
  }, [refreshStorage]);

  const navigateTo = useCallback((screen: LoopcheckScreen) => {
    setState((prev) => ({ ...prev, activeScreen: screen }));
  }, []);

  const selectRecord = useCallback((id: string | null) => {
    setState((prev) => ({ ...prev, selectedRecordId: id }));
  }, []);

  const setActivePanel = useCallback((panel: 'board' | 'list' | null) => {
    setState((prev) => ({
      ...prev,
      activePanel: panel,
      preferences: {
        ...prev.preferences,
        activePanel: panel,
        viewMode: panel ?? prev.preferences.viewMode,
      },
    }));
  }, []);

  const updateDerived = useCallback((records: LoopcheckRecord[], prevState: LoopcheckAppState) => {
    const counts = buildCounts(records);
    const selectedExists = records.some((r) => r.id === prevState.selectedRecordId);
    return {
      ...prevState,
      records,
      counts,
      selectedRecordId: selectedExists ? prevState.selectedRecordId : null,
    };
  }, []);

  const createRecord = useCallback(
    (draft: Omit<LoopcheckRecord, 'id' | 'updatedAt'>) => {
      setState((prev) => {
        const newRecord: LoopcheckRecord = {
          ...draft,
          id: `rec-${Date.now()}-${Math.random().toString(36).slice(2, 11)}`,
          updatedAt: new Date().toISOString(),
        };
        return updateDerived([newRecord, ...prev.records], prev);
      });
    },
    [updateDerived],
  );

  const updateRecord = useCallback(
    (id: string, patch: Partial<Omit<LoopcheckRecord, 'id'>>) => {
      setState((prev) => {
        const updated = prev.records.map((record) =>
          record.id === id
            ? { ...record, ...patch, updatedAt: new Date().toISOString() }
            : record,
        );
        return updateDerived(updated, prev);
      });
    },
    [updateDerived],
  );

  const setRecordStatus = useCallback(
    (id: string, status: LoopcheckRecordStatus) => {
      updateRecord(id, { status });
    },
    [updateRecord],
  );

  const deleteRecord = useCallback(
    (id: string) => {
      setState((prev) => {
        const filtered = prev.records.filter((record) => record.id !== id);
        return updateDerived(filtered, prev);
      });
    },
    [updateDerived],
  );

  const clearError = useCallback(() => {
    setState((prev) => ({ ...prev, lastError: null }));
  }, []);

  const value = useMemo<LoopcheckAppApi>(
    () => ({
      ...state,
      navigateTo,
      selectRecord,
      setActivePanel,
      createRecord,
      updateRecord,
      deleteRecord,
      setRecordStatus,
      clearError,
      refreshStorage,
    }),
    [
      state,
      navigateTo,
      selectRecord,
      setActivePanel,
      createRecord,
      updateRecord,
      deleteRecord,
      setRecordStatus,
      clearError,
      refreshStorage,
    ],
  );

  return <LoopcheckAppContext.Provider value={value}>{children}</LoopcheckAppContext.Provider>;
}
