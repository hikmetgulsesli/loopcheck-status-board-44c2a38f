// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Record Operations - LoopCheck Status Board
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowUp, BadgeAlert, BadgeHelp, BarChart3, Bell, ChevronLeft, ChevronRight, CircleAlert, CircleUserRound, Database, EllipsisVertical, Expand, LayoutDashboard, ListFilter, Pause, Play, Plus, RefreshCw, Search, Settings, TriangleAlert } from "lucide-react";


export type RecordOperationsLoopcheckStatusBoardActionId = "notifications-1" | "account-circle-2" | "create-record-3" | "filter-list-4" | "chevron-left-5" | "2-6" | "chevron-right-7" | "more-vert-8" | "pause-9" | "restart-10" | "operations-1" | "status-board-2" | "insights-3" | "settings-4";

export interface RecordOperationsLoopcheckStatusBoardProps {
  actions?: Partial<Record<RecordOperationsLoopcheckStatusBoardActionId, () => void>>;

}

export function RecordOperationsLoopcheckStatusBoard({ actions }: RecordOperationsLoopcheckStatusBoardProps) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="bg-surface-container-low dark:bg-surface-container-low h-screen w-64 fixed left-0 top-0 border-r border-outline-variant flex flex-col py-lg z-20">
      <div className="px-md mb-xl flex items-center gap-sm">
      <BadgeHelp className="text-primary text-2xl" aria-hidden={true} focusable="false" />
      <div>
      <h1 className="font-headline-md text-headline-md text-primary">LoopCheck</h1>
      <p className="font-label-md text-label-md text-on-surface-variant">Operational Hub</p>
      </div>
      </div>
      <ul className="flex-1 flex flex-col gap-xs px-sm">
      {/* Active: Operations */}
      <li>
      <a className="flex items-center gap-md px-md py-sm rounded-DEFAULT text-primary font-bold border-r-2 border-primary bg-surface-container-high transition-colors" href="#" data-action-id="operations-1" onClick={(event) => { event.preventDefault(); actions?.["operations-1"]?.(); }}>
      <BadgeHelp aria-hidden={true} focusable="false" />
                          Operations
                      </a>
      </li>
      <li>
      <a className="flex items-center gap-md px-md py-sm rounded-DEFAULT text-on-surface-variant hover:bg-surface-container-high transition-colors active:scale-95 transition-transform" href="#" data-action-id="status-board-2" onClick={(event) => { event.preventDefault(); actions?.["status-board-2"]?.(); }}>
      <LayoutDashboard aria-hidden={true} focusable="false" />
                          Status Board
                      </a>
      </li>
      <li>
      <a className="flex items-center gap-md px-md py-sm rounded-DEFAULT text-on-surface-variant hover:bg-surface-container-high transition-colors active:scale-95 transition-transform" href="#" data-action-id="insights-3" onClick={(event) => { event.preventDefault(); actions?.["insights-3"]?.(); }}>
      <BarChart3 aria-hidden={true} focusable="false" />
                          Insights
                      </a>
      </li>
      </ul>
      <div className="mt-auto px-sm">
      <a className="flex items-center gap-md px-md py-sm rounded-DEFAULT text-on-surface-variant hover:bg-surface-container-high transition-colors active:scale-95 transition-transform" href="#" data-action-id="settings-4" onClick={(event) => { event.preventDefault(); actions?.["settings-4"]?.(); }}>
      <Settings aria-hidden={true} focusable="false" />
                      Settings
                  </a>
      </div>
      </nav>
      {/* TopNavBar */}
      <header className="bg-surface dark:bg-surface fixed top-0 right-0 left-64 h-14 border-b border-outline-variant flex justify-between items-center px-lg z-10">
      <div className="flex items-center gap-md">
      <span className="font-headline-sm text-headline-sm font-bold text-on-background">LoopCheck Status Board</span>
      </div>
      <div className="flex items-center gap-lg">
      <div className="relative hidden md:block">
      <Search className="absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant text-sm" aria-hidden={true} focusable="false" />
      <input className="bg-[#020617] border border-outline-variant rounded-DEFAULT py-xs pl-xl pr-sm text-sm focus:ring-1 focus:ring-primary focus:border-primary focus:outline-none w-64 h-8 text-on-surface placeholder:text-on-surface-variant" placeholder="Search records..." type="text" />
      </div>
      <div className="flex items-center gap-sm">
      <button className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer p-xs" type="button" aria-label="Notifications" data-action-id="notifications-1" onClick={actions?.["notifications-1"]}>
      <Bell aria-hidden={true} focusable="false" />
      </button>
      <button className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer p-xs" type="button" aria-label="Account Circle" data-action-id="account-circle-2" onClick={actions?.["account-circle-2"]}>
      <CircleUserRound aria-hidden={true} focusable="false" />
      </button>
      </div>
      <button className="bg-primary text-on-primary font-label-md text-label-md px-md h-[32px] rounded-DEFAULT hover:bg-primary-fixed-dim transition-colors flex items-center gap-xs" id="ACT_CREATE_RECORD" type="button" data-action-id="create-record-3" onClick={actions?.["create-record-3"]}>
      <Plus className="text-[16px]" aria-hidden={true} focusable="false" />
                      Create Record
                  </button>
      </div>
      </header>
      {/* Main Content Area */}
      <main className="ml-64 mt-14 p-lg flex-1 overflow-y-auto w-full h-[calc(100vh-56px)]">
      {/* Summary Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-lg">
      {/* Metric Card 1 */}
      <div className="bg-surface border border-outline-variant rounded-lg p-md flex flex-col gap-xs">
      <div className="flex justify-between items-center">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">Total Records</span>
      <Database className="text-primary text-[16px]" aria-hidden={true} focusable="false" />
      </div>
      <div className="font-headline-lg text-headline-lg text-on-surface mt-sm">24,592</div>
      <div className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-xs">
      <ArrowUp className="text-tertiary-fixed-dim text-[14px]" aria-hidden={true} focusable="false" />
      <span>+12% this week</span>
      </div>
      </div>
      {/* Metric Card 2 */}
      <div className="bg-surface border border-outline-variant rounded-lg p-md flex flex-col gap-xs">
      <div className="flex justify-between items-center">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">Active Tasks</span>
      <BadgeHelp className="text-tertiary text-[16px]" aria-hidden={true} focusable="false" />
      </div>
      <div className="font-headline-lg text-headline-lg text-on-surface mt-sm">1,403</div>
      <div className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-xs">
      <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
      <span>42 tasks running</span>
      </div>
      </div>
      {/* Metric Card 3 */}
      <div className="bg-surface border border-outline-variant rounded-lg p-md flex flex-col gap-xs">
      <div className="flex justify-between items-center">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">Pending Reviews</span>
      <TriangleAlert className="text-error text-[16px]" aria-hidden={true} focusable="false" />
      </div>
      <div className="font-headline-lg text-headline-lg text-on-surface mt-sm">87</div>
      <div className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-xs">
      <BadgeAlert className="text-error text-[14px]" aria-hidden={true} focusable="false" />
      <span className="text-error">12 require immediate action</span>
      </div>
      </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-gutter h-[calc(100%-140px)]">
      {/* Main Data Section (Filters + Table) */}
      <div className="flex-1 flex flex-col gap-gutter min-w-0">
      {/* Filters Bar */}
      <div className="bg-surface border border-outline-variant rounded-lg p-sm flex items-center gap-md overflow-x-visible md:overflow-x-auto flex-col md:flex-row items-stretch md:items-start">
      <div className="font-label-md text-label-md text-on-surface-variant pl-xs whitespace-nowrap">Status:</div>
      <label className="flex items-center gap-xs cursor-pointer">
      <input defaultChecked={true} className="form-checkbox bg-[#020617] border-outline-variant text-primary rounded-sm w-4 h-4 focus:ring-primary focus:ring-offset-0 focus:ring-offset-transparent" type="checkbox" />
      <span className="font-body-sm text-body-sm">Ready</span>
      </label>
      <label className="flex items-center gap-xs cursor-pointer">
      <input defaultChecked={true} className="form-checkbox bg-[#020617] border-outline-variant text-primary rounded-sm w-4 h-4 focus:ring-primary focus:ring-offset-0 focus:ring-offset-transparent" type="checkbox" />
      <span className="font-body-sm text-body-sm">Paused</span>
      </label>
      <label className="flex items-center gap-xs cursor-pointer">
      <input defaultChecked={true} className="form-checkbox bg-[#020617] border-outline-variant text-primary rounded-sm w-4 h-4 focus:ring-primary focus:ring-offset-0 focus:ring-offset-transparent" type="checkbox" />
      <span className="font-body-sm text-body-sm">Error</span>
      </label>
      <div className="w-px h-4 bg-outline-variant mx-sm"></div>
      <div className="font-label-md text-label-md text-on-surface-variant whitespace-nowrap">Priority:</div>
      <select className="bg-[#020617] border border-outline-variant rounded-DEFAULT text-body-sm py-1 px-2 focus:ring-1 focus:ring-primary focus:border-primary focus:outline-none">
      <option>All Priorities</option>
      <option>High</option>
      <option>Medium</option>
      <option>Low</option>
      </select>
      </div>
      {/* Data Table Container */}
      <div className="bg-surface border border-outline-variant rounded-lg flex-1 flex flex-col overflow-hidden">
      <div className="px-md py-sm border-b border-outline-variant flex justify-between items-center bg-surface-container-low">
      <h2 className="font-headline-sm text-headline-sm">System Records</h2>
      <button className="text-on-surface-variant hover:text-primary transition-colors" type="button" aria-label="Filter List" data-action-id="filter-list-4" onClick={actions?.["filter-list-4"]}>
      <ListFilter className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      <div className="flex-1 overflow-auto">
      <table className="w-full text-left border-collapse">
      <thead className="sticky top-0 bg-surface-container-lowest z-10 shadow-sm shadow-[#00000040]">
      <tr>
      <th className="font-label-caps text-label-caps text-on-surface-variant px-md py-sm font-semibold w-24">ID</th>
      <th className="font-label-caps text-label-caps text-on-surface-variant px-md py-sm font-semibold">Record Name</th>
      <th className="font-label-caps text-label-caps text-on-surface-variant px-md py-sm font-semibold w-32">Status</th>
      <th className="font-label-caps text-label-caps text-on-surface-variant px-md py-sm font-semibold w-40">Last Updated</th>
      <th className="font-label-caps text-label-caps text-on-surface-variant px-md py-sm font-semibold w-32">Owner</th>
      </tr>
      </thead>
      <tbody className="font-body-sm text-body-sm">
      {/* Row 1 - Active */}
      <tr className="data-table-row hover:bg-[#1e293b] transition-colors cursor-pointer group bg-[#1e293b]/30"> {/* Selected state simulation */}
      <td className="px-md py-2 font-mono-data text-mono-data text-on-surface-variant">REC-8492</td>
      <td className="px-md py-2 font-medium text-on-surface">Data Pipeline Alpha-1</td>
      <td className="px-md py-2">
      <span className="inline-flex items-center gap-xs px-2 py-0.5 rounded-sm bg-primary/10 text-primary border border-primary/20 text-[10px] font-semibold uppercase">
      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                                                  Ready
                                              </span>
      </td>
      <td className="px-md py-2 text-on-surface-variant">10:42:01 AM PST</td>
      <td className="px-md py-2 text-on-surface-variant">System</td>
      </tr>
      {/* Row 2 - Error */}
      <tr className="data-table-row hover:bg-[#1e293b] transition-colors cursor-pointer group">
      <td className="px-md py-2 font-mono-data text-mono-data text-on-surface-variant">REC-8491</td>
      <td className="px-md py-2 font-medium text-on-surface">ETL Job - User Sync</td>
      <td className="px-md py-2">
      <span className="inline-flex items-center gap-xs px-2 py-0.5 rounded-sm bg-error/10 text-error border border-error/20 text-[10px] font-semibold uppercase">
      <CircleAlert className="text-[12px]" aria-hidden={true} focusable="false" />
                                                  Error
                                              </span>
      </td>
      <td className="px-md py-2 text-on-surface-variant">10:35:12 AM PST</td>
      <td className="px-md py-2 text-on-surface-variant">J. Doe</td>
      </tr>
      {/* Row 3 - Paused */}
      <tr className="data-table-row hover:bg-[#1e293b] transition-colors cursor-pointer group">
      <td className="px-md py-2 font-mono-data text-mono-data text-on-surface-variant">REC-8490</td>
      <td className="px-md py-2 font-medium text-on-surface">Nightly Backup - EU</td>
      <td className="px-md py-2">
      <span className="inline-flex items-center gap-xs px-2 py-0.5 rounded-sm bg-surface-variant text-on-surface border border-outline-variant text-[10px] font-semibold uppercase">
      <Pause className="text-[12px]" aria-hidden={true} focusable="false" />
                                                  Paused
                                              </span>
      </td>
      <td className="px-md py-2 text-on-surface-variant">09:00:00 AM PST</td>
      <td className="px-md py-2 text-on-surface-variant">System</td>
      </tr>
      {/* Row 4 */}
      <tr className="data-table-row hover:bg-[#1e293b] transition-colors cursor-pointer group">
      <td className="px-md py-2 font-mono-data text-mono-data text-on-surface-variant">REC-8489</td>
      <td className="px-md py-2 font-medium text-on-surface">Log Aggregation X</td>
      <td className="px-md py-2">
      <span className="inline-flex items-center gap-xs px-2 py-0.5 rounded-sm bg-primary/10 text-primary border border-primary/20 text-[10px] font-semibold uppercase">
                                                  Ready
                                              </span>
      </td>
      <td className="px-md py-2 text-on-surface-variant">08:15:22 AM PST</td>
      <td className="px-md py-2 text-on-surface-variant">M. Smith</td>
      </tr>
      {/* Row 5 */}
      <tr className="data-table-row hover:bg-[#1e293b] transition-colors cursor-pointer group">
      <td className="px-md py-2 font-mono-data text-mono-data text-on-surface-variant">REC-8488</td>
      <td className="px-md py-2 font-medium text-on-surface">Cache Invalidation</td>
      <td className="px-md py-2">
      <span className="inline-flex items-center gap-xs px-2 py-0.5 rounded-sm bg-primary/10 text-primary border border-primary/20 text-[10px] font-semibold uppercase">
                                                  Ready
                                              </span>
      </td>
      <td className="px-md py-2 text-on-surface-variant">07:42:01 AM PST</td>
      <td className="px-md py-2 text-on-surface-variant">System</td>
      </tr>
      </tbody>
      </table>
      </div>
      {/* Pagination */}
      <div className="px-md py-sm border-t border-outline-variant bg-surface-container-lowest flex justify-between items-center font-body-sm text-body-sm text-on-surface-variant">
      <span>Showing 1-5 of 24,592</span>
      <div className="flex items-center gap-xs">
      <button className="p-1 rounded hover:bg-surface-variant transition-colors disabled:opacity-50" disabled={true} type="button" aria-label="Chevron Left" data-action-id="chevron-left-5" onClick={actions?.["chevron-left-5"]}>
      <ChevronLeft className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      <span className="px-2 py-1 bg-surface-variant rounded text-on-surface">1</span>
      <button className="p-1 rounded hover:bg-surface-variant transition-colors" type="button" data-action-id="2-6" onClick={actions?.["2-6"]}>
      <span className="px-2 py-1">2</span>
      </button>
      <span className="px-1">...</span>
      <button className="p-1 rounded hover:bg-surface-variant transition-colors" type="button" aria-label="Chevron Right" data-action-id="chevron-right-7" onClick={actions?.["chevron-right-7"]}>
      <ChevronRight className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      </div>
      </div>
      {/* Record Details Preview (Right Panel) */}
      <div className="w-full lg:w-80 bg-surface border border-outline-variant rounded-lg flex flex-col h-full overflow-hidden border-primary/50">
      <div className="px-md py-sm border-b border-outline-variant flex justify-between items-start bg-[#1e293b]/30">
      <div>
      <div className="font-mono-data text-mono-data text-primary mb-1">REC-8492</div>
      <h3 className="font-headline-sm text-headline-sm font-semibold">Data Pipeline Alpha-1</h3>
      </div>
      <button className="text-on-surface-variant hover:text-on-surface transition-colors p-1" type="button" aria-label="More Vert" data-action-id="more-vert-8" onClick={actions?.["more-vert-8"]}>
      <EllipsisVertical className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      <div className="p-md flex-1 overflow-y-auto flex flex-col gap-lg">
      {/* Status Section */}
      <div>
      <div className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-sm">Current Status</div>
      <div className="flex items-center gap-sm p-sm bg-[#020617] border border-outline-variant rounded-md">
      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/30">
      <Play className="text-primary text-[20px]" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <div className="font-label-md text-label-md font-bold text-primary">RUNNING (READY)</div>
      <div className="font-body-sm text-body-sm text-on-surface-variant">Uptime: 04:12:08</div>
      </div>
      </div>
      </div>
      {/* Details Section */}
      <div>
      <div className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-sm">Configuration Details</div>
      <dl className="grid grid-cols-2 gap-y-sm gap-x-xs font-body-sm text-body-sm">
      <dt className="text-on-surface-variant">Type:</dt>
      <dd className="text-on-surface text-right">Stream Process</dd>
      <dt className="text-on-surface-variant">Priority:</dt>
      <dd className="text-on-surface text-right">High</dd>
      <dt className="text-on-surface-variant">Target Node:</dt>
      <dd className="text-on-surface text-right font-mono-data">node-us-west-1a</dd>
      <dt className="text-on-surface-variant">Memory Util:</dt>
      <dd className="text-on-surface text-right">4.2 GB / 8.0 GB</dd>
      </dl>
      </div>
      {/* Execution Log Section */}
      <div className="flex-1 flex flex-col min-h-0">
      <div className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-sm flex justify-between items-center">
      <span>Execution Log</span>
      <Expand className="text-[14px] cursor-pointer hover:text-primary" aria-hidden={true} focusable="false" />
      </div>
      <div className="bg-[#020617] border border-outline-variant rounded-md p-sm font-mono-data text-mono-data text-[10px] text-on-surface-variant overflow-y-auto flex-1 leading-relaxed">
      <div className="text-primary">&gt; INIT pipeline [REC-8492]</div>
      <div>[10:42:01] Auth handshake successful.</div>
      <div>[10:42:02] Fetching initial manifest...</div>
      <div>[10:42:02] Manifest loaded. 142 items.</div>
      <div className="text-tertiary">&gt; Processing batch 1/14...</div>
      <div>[10:42:05] Batch 1 complete. (2.4s)</div>
      <div>[10:42:07] Batch 2 complete. (2.1s)</div>
      <div className="text-tertiary">&gt; Processing batch 3/14...</div>
      <div className="animate-pulse">_</div>
      </div>
      </div>
      </div>
      <div className="p-md border-t border-outline-variant bg-surface-container-low flex gap-sm">
      <button className="flex-1 h-[32px] border border-outline-variant text-on-surface font-label-md text-label-md rounded-DEFAULT hover:bg-surface-variant transition-colors flex items-center justify-center gap-xs" type="button" data-action-id="pause-9" onClick={actions?.["pause-9"]}>
      <Pause className="text-[16px]" aria-hidden={true} focusable="false" /> Pause
                          </button>
      <button className="flex-1 h-[32px] bg-secondary-container text-on-primary-container font-label-md text-label-md rounded-DEFAULT hover:bg-surface-variant transition-colors flex items-center justify-center gap-xs" type="button" data-action-id="restart-10" onClick={actions?.["restart-10"]}>
      <RefreshCw className="text-[16px]" aria-hidden={true} focusable="false" /> Restart
                          </button>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
