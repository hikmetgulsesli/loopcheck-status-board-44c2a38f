import type {
  LoopcheckCounts,
  LoopcheckPersistedState,
  LoopcheckPreferences,
  LoopcheckRecord,
} from '../features/loopcheck-status-board/loopcheck-status-board.types';

export const DEFAULT_PREFERENCES: LoopcheckPreferences = {
  activePanel: 'board',
  viewMode: 'board',
};

export const SAMPLE_RECORDS: LoopcheckRecord[] = [
  {
    id: 'rec-001',
    identifier: 'LC-2024-001',
    context: 'Primary cooling loop quarterly inspection',
    status: 'running',
    tags: ['critical', 'quarterly'],
    updatedAt: '2024-06-01T08:00:00.000Z',
  },
  {
    id: 'rec-002',
    identifier: 'LC-2024-002',
    context: 'Secondary loop pressure test follow-up',
    status: 'paused',
    tags: ['follow-up'],
    updatedAt: '2024-06-02T10:30:00.000Z',
  },
  {
    id: 'rec-003',
    identifier: 'LC-2024-003',
    context: 'Tertiary loop flow calibration',
    status: 'completed',
    tags: ['calibration'],
    updatedAt: '2024-06-03T14:15:00.000Z',
  },
  {
    id: 'rec-004',
    identifier: 'LC-2024-004',
    context: 'Emergency shutdown valve verification',
    status: 'running',
    tags: ['critical', 'safety'],
    updatedAt: '2024-06-04T09:45:00.000Z',
  },
];

export function buildCounts(records: LoopcheckRecord[]): LoopcheckCounts {
  return records.reduce(
    (acc, record) => {
      acc.total += 1;
      if (record.status === 'running') acc.running += 1;
      if (record.status === 'paused') acc.paused += 1;
      if (record.status === 'completed') acc.completed += 1;
      return acc;
    },
    { total: 0, running: 0, paused: 0, completed: 0 },
  );
}

export function buildDefaultPersistedState(): LoopcheckPersistedState {
  return {
    version: 1,
    records: SAMPLE_RECORDS,
    preferences: DEFAULT_PREFERENCES,
  };
}

export const INITIAL_COUNTS: LoopcheckCounts = buildCounts(SAMPLE_RECORDS);
