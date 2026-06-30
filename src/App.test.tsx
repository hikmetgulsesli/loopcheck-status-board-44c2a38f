import { render, screen, waitFor, act } from '@testing-library/react';
import { describe, expect, it, beforeEach } from 'vitest';
import userEvent from '@testing-library/user-event';
import App from './App';
import './test/bridge';
import { LOOPCHECK_STORAGE_KEY } from './features/loopcheck-status-board/loopcheck-status-board.repo';

describe('App', () => {
  beforeEach(() => {
    localStorage.clear();
    if (window.app) {
      window.app = undefined;
    }
  });

  it('renders an application root', () => {
    render(<App />);
    expect(screen.getByTestId('setfarm-app-root')).toBeInTheDocument();
  });

  it('bootstraps app state and exposes it on window.app', async () => {
    render(<App />);
    await waitFor(() => expect(window.app).toBeDefined());
    await waitFor(() => expect(window.app?.storageStatus).toBe('ready'));
    expect(window.app?.activeScreen).toBe('status-board');
    expect(window.app?.counts.total).toBeGreaterThan(0);
    expect(window.app?.activePanel).toBe('board');
  });

  it('navigates between surfaces via navigation links', async () => {
    render(<App />);
    await waitFor(() => expect(window.app?.storageStatus).toBe('ready'));

    const insightsLink = screen.getByRole('link', { name: /insights/i });
    await userEvent.click(insightsLink);
    await waitFor(() => expect(window.app?.activeScreen).toBe('insights'));

    const statusLink = screen.getByRole('link', { name: /status board/i });
    await userEvent.click(statusLink);
    await waitFor(() => expect(window.app?.activeScreen).toBe('status-board'));

    const operationsLink = screen.getByRole('link', { name: /operations/i });
    await userEvent.click(operationsLink);
    await waitFor(() => expect(window.app?.activeScreen).toBe('record-operations'));
  });

  it('persists record changes to localStorage and recovers on refresh', async () => {
    render(<App />);
    await waitFor(() => expect(window.app?.storageStatus).toBe('ready'));

    const before = window.app?.counts.total ?? 0;
    act(() => {
      window.app?.createRecord({
        identifier: 'LC-NEW-001',
        context: 'New record from test',
        status: 'running',
        tags: ['test'],
      });
    });

    await waitFor(() => expect(window.app?.counts.total).toBe(before + 1));
    const raw = localStorage.getItem(LOOPCHECK_STORAGE_KEY);
    expect(raw).toBeTruthy();

    localStorage.setItem(LOOPCHECK_STORAGE_KEY, 'not-json');
    act(() => {
      window.app?.refreshStorage();
    });
    await waitFor(() => expect(window.app?.lastError).toBeTruthy());
  });
});
