import type { LoopcheckPersistedState, LoopcheckRecord, LoopcheckStorageResult } from './loopcheck-status-board.types';

export const LOOPCHECK_STORAGE_KEY = 'loopcheck-status-board:v1';
export const LOOPCHECK_STORAGE_VERSION = 1;

function isRecord(value: unknown): value is LoopcheckRecord {
  if (typeof value !== 'object' || value === null) return false;
  const r = value as Record<string, unknown>;
  return (
    typeof r.id === 'string' &&
    typeof r.identifier === 'string' &&
    typeof r.context === 'string' &&
    (r.status === 'running' || r.status === 'paused' || r.status === 'completed') &&
    Array.isArray(r.tags) &&
    r.tags.every((t) => typeof t === 'string') &&
    typeof r.updatedAt === 'string'
  );
}

function isPersistedState(value: unknown): value is LoopcheckPersistedState {
  if (typeof value !== 'object' || value === null) return false;
  const s = value as Record<string, unknown>;
  return (
    s.version === LOOPCHECK_STORAGE_VERSION &&
    Array.isArray(s.records) &&
    s.records.every(isRecord) &&
    typeof s.preferences === 'object' &&
    s.preferences !== null &&
    ((s.preferences as Record<string, unknown>).viewMode === 'board' ||
      (s.preferences as Record<string, unknown>).viewMode === 'list') &&
    ((s.preferences as Record<string, unknown>).activePanel === 'board' ||
      (s.preferences as Record<string, unknown>).activePanel === 'list' ||
      (s.preferences as Record<string, unknown>).activePanel === null)
  );
}

export function createLoopcheckRepo(storage: Storage = localStorage) {
  function load(): LoopcheckStorageResult {
    try {
      const raw = storage.getItem(LOOPCHECK_STORAGE_KEY);
      if (raw === null) {
        return { data: null, error: null };
      }
      const parsed = JSON.parse(raw) as unknown;
      if (!isPersistedState(parsed)) {
        return { data: null, error: 'Persisted data is malformed; reset to defaults.' };
      }
      return { data: parsed, error: null };
    } catch (err) {
      return {
        data: null,
        error: err instanceof Error ? err.message : 'Failed to read persisted data.',
      };
    }
  }

  function save(state: LoopcheckPersistedState): { ok: boolean; error: string | null } {
    try {
      storage.setItem(LOOPCHECK_STORAGE_KEY, JSON.stringify(state));
      return { ok: true, error: null };
    } catch (err) {
      return {
        ok: false,
        error: err instanceof Error ? err.message : 'Failed to write persisted data.',
      };
    }
  }

  function clear(): { ok: boolean; error: string | null } {
    try {
      storage.removeItem(LOOPCHECK_STORAGE_KEY);
      return { ok: true, error: null };
    } catch (err) {
      return {
        ok: false,
        error: err instanceof Error ? err.message : 'Failed to clear persisted data.',
      };
    }
  }

  return { load, save, clear };
}

export type LoopcheckRepo = ReturnType<typeof createLoopcheckRepo>;
