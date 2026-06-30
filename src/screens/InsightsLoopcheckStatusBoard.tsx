// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Insights - LoopCheck Status Board
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { BadgeHelp, BarChart3, Bell, Braces, Check, CheckCircle2, CircleAlert, CircleUserRound, Download, Ellipsis, LayoutDashboard, Lightbulb, ListFilter, Pause, Search, Settings, TrendingUp, User } from "lucide-react";


export type InsightsLoopcheckStatusBoardActionId = "notifications-1" | "account-circle-2" | "create-record-3" | "filter-insights-4" | "export-summary-5" | "more-horiz-6" | "review-queue-7" | "operations-1" | "status-board-2" | "insights-3" | "settings-4";

export interface InsightsLoopcheckStatusBoardProps {
  actions?: Partial<Record<InsightsLoopcheckStatusBoardActionId, () => void>>;

}

export function InsightsLoopcheckStatusBoard({ actions }: InsightsLoopcheckStatusBoardProps) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="bg-surface-container-low dark:bg-surface-container-low h-screen w-64 fixed left-0 top-0 border-r border-outline-variant flex flex-col py-lg z-20">
      <div className="px-md mb-xl flex items-center gap-sm">
      <BadgeHelp  style={{fontSize: "28px"}} className="text-primary" aria-hidden={true} focusable="false" />
      <div>
      <h1 className="font-headline-md text-headline-md text-primary">LoopCheck</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Operational Hub</p>
      </div>
      </div>
      <div className="flex-1 flex flex-col gap-xs px-sm">
      <a className="flex items-center gap-md px-md py-sm rounded text-on-surface-variant hover:bg-surface-container-high transition-colors active:scale-95 transition-transform" href="#" data-action-id="operations-1" onClick={(event) => { event.preventDefault(); actions?.["operations-1"]?.(); }}>
      <BadgeHelp aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Operations</span>
      </a>
      <a className="flex items-center gap-md px-md py-sm rounded text-on-surface-variant hover:bg-surface-container-high transition-colors active:scale-95 transition-transform" href="#" data-action-id="status-board-2" onClick={(event) => { event.preventDefault(); actions?.["status-board-2"]?.(); }}>
      <LayoutDashboard aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Status Board</span>
      </a>
      {/* Active Tab */}
      <a className="flex items-center gap-md px-md py-sm rounded text-primary font-bold border-r-2 border-primary bg-surface-container-high hover:bg-surface-container-high transition-colors active:scale-95 transition-transform" href="#" data-action-id="insights-3" onClick={(event) => { event.preventDefault(); actions?.["insights-3"]?.(); }}>
      <BarChart3 style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Insights</span>
      </a>
      </div>
      <div className="mt-auto px-sm flex flex-col gap-xs">
      <a className="flex items-center gap-md px-md py-sm rounded text-on-surface-variant hover:bg-surface-container-high transition-colors active:scale-95 transition-transform" href="#" data-action-id="settings-4" onClick={(event) => { event.preventDefault(); actions?.["settings-4"]?.(); }}>
      <Settings aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Settings</span>
      </a>
      <div className="mt-md pt-md border-t border-outline-variant px-md flex items-center gap-sm">
      <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center overflow-hidden">
      <User className="text-on-surface-variant text-sm" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex flex-col">
      <span className="font-label-md text-label-md text-on-background">System Operator</span>
      </div>
      </div>
      </div>
      </nav>
      {/* Main Content Wrapper (Accounts for SideNav width) */}
      <div className="flex-1 ml-64 flex flex-col h-full bg-[#020617] relative">
      {/* TopNavBar */}
      <header className="bg-surface dark:bg-surface fixed top-0 right-0 left-64 h-14 border-b border-outline-variant flex justify-between items-center px-lg z-10">
      <div className="font-headline-lg text-headline-lg text-on-background">
                      LoopCheck Status Board
                  </div>
      <div className="flex items-center gap-md">
      <div className="relative hidden lg:block">
      <Search  style={{fontSize: "18px"}} className="absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant" aria-hidden={true} focusable="false" />
      <input className="bg-[#020617] border border-outline-variant rounded h-8 pl-8 pr-sm text-sm text-on-background focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-colors w-64 placeholder-on-surface-variant" placeholder="Search records..." type="text" />
      </div>
      <div className="flex items-center gap-sm border-l border-outline-variant pl-md ml-xs">
      <button className="w-8 h-8 flex items-center justify-center rounded text-on-surface-variant hover:text-primary transition-colors cursor-pointer" type="button" aria-label="Notifications" data-action-id="notifications-1" onClick={actions?.["notifications-1"]}>
      <Bell aria-hidden={true} focusable="false" />
      </button>
      <button className="w-8 h-8 flex items-center justify-center rounded text-on-surface-variant hover:text-primary transition-colors cursor-pointer" type="button" aria-label="Account Circle" data-action-id="account-circle-2" onClick={actions?.["account-circle-2"]}>
      <CircleUserRound aria-hidden={true} focusable="false" />
      </button>
      <button className="bg-primary text-on-primary h-8 px-md rounded font-label-md text-label-md font-medium hover:opacity-90 transition-opacity ml-sm" type="button" data-action-id="create-record-3" onClick={actions?.["create-record-3"]}>
                              Create Record
                          </button>
      </div>
      </div>
      </header>
      {/* Canvas */}
      <main className="flex-1 overflow-y-auto mt-14 p-margin-desktop">
      {/* Page Header & Actions */}
      <div className="flex justify-between items-end mb-lg">
      <div>
      <h2 className="font-headline-lg text-headline-lg text-on-background mb-xs">System Insights</h2>
      <p className="font-body-md text-body-md text-on-surface-variant">Real-time operational analytics and state distributions.</p>
      </div>
      <div className="flex gap-sm">
      <button className="h-8 px-md border border-outline-variant text-on-background rounded font-label-md text-label-md flex items-center gap-xs hover:border-primary hover:text-primary transition-colors bg-surface" id="ACT_FILTER_INSIGHTS" type="button" data-action-id="filter-insights-4" onClick={actions?.["filter-insights-4"]}>
      <ListFilter className="text-[16px]" aria-hidden={true} focusable="false" />
                              Filter Insights
                          </button>
      <button className="h-8 px-md border border-outline-variant text-on-background rounded font-label-md text-label-md flex items-center gap-xs hover:border-primary hover:text-primary transition-colors bg-surface" id="ACT_EXPORT_SUMMARY" type="button" data-action-id="export-summary-5" onClick={actions?.["export-summary-5"]}>
      <Download className="text-[16px]" aria-hidden={true} focusable="false" />
                              Export Summary
                          </button>
      </div>
      </div>
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-12 gap-gutter">
      {/* Metrics Row (Top) */}
      <div className="col-span-12 grid grid-cols-3 gap-gutter">
      {/* Metric 1 */}
      <div className="bg-[#0F172A] border border-[#1E293B] rounded p-md flex flex-col gap-sm relative overflow-hidden">
      <div className="flex justify-between items-center">
      <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Efficiency Rate</span>
      <TrendingUp className="text-primary text-sm" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex items-baseline gap-sm">
      <span className="font-headline-lg text-headline-lg text-on-background text-3xl font-bold">94.2%</span>
      <span className="font-body-sm text-body-sm text-[#10B981]">+1.2%</span>
      </div>
      {/* Mini sparkline mock */}
      <div className="absolute bottom-0 left-0 w-full h-8 opacity-20 bg-gradient-to-t from-primary to-transparent"></div>
      </div>
      {/* Metric 2 */}
      <div className="bg-[#0F172A] border border-[#1E293B] rounded p-md flex flex-col gap-sm relative overflow-hidden">
      <div className="flex justify-between items-center">
      <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Processing Vol</span>
      <BadgeHelp className="text-primary text-sm" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex items-baseline gap-sm">
      <span className="font-headline-lg text-headline-lg text-on-background text-3xl font-bold font-mono-data">14,208</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">/ hr</span>
      </div>
      </div>
      {/* Metric 3 */}
      <div className="bg-[#0F172A] border border-[#1E293B] rounded p-md flex flex-col gap-sm relative overflow-hidden">
      <div className="flex justify-between items-center">
      <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">System Uptime</span>
      <CheckCircle2 className="text-[#10B981] text-sm" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex items-baseline gap-sm">
      <span className="font-headline-lg text-headline-lg text-on-background text-3xl font-bold font-mono-data">99.99%</span>
      </div>
      {/* Status Pip */}
      <div className="absolute top-md right-md w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse"></div>
      </div>
      </div>
      {/* Main Area Left: State Distribution & Hints */}
      <div className="col-span-8 flex flex-col gap-gutter">
      {/* State Distribution */}
      <div className="bg-[#0F172A] border border-[#1E293B] rounded p-md flex-1 flex flex-col">
      <div className="flex justify-between items-center mb-md border-b border-[#1E293B] pb-sm">
      <h3 className="font-headline-sm text-headline-sm text-on-background">State Distribution</h3>
      <button className="text-on-surface-variant hover:text-primary" type="button" aria-label="More Horiz" data-action-id="more-horiz-6" onClick={actions?.["more-horiz-6"]}>
      <Ellipsis className="text-sm" aria-hidden={true} focusable="false" />
      </button>
      </div>
      <div className="flex-1 flex items-center justify-center relative min-h-[200px]">
      {/* Mock Donut Chart using CSS conic-gradient */}
      <div className="w-48 h-48 rounded-full flex items-center justify-center relative" style={{background: "conic-gradient(\n                                    #10B981 0% 65%, \n                                    #F59E0B 65% 85%, \n                                    #EF4444 85% 100%\n                                 )"}}>
      {/* Inner circle to make it a donut */}
      <div className="w-36 h-36 bg-[#0F172A] rounded-full flex flex-col items-center justify-center absolute">
      <span className="font-label-md text-label-md text-on-surface-variant">Total Records</span>
      <span className="font-headline-lg text-headline-lg text-on-background font-mono-data mt-xs">2,405</span>
      </div>
      </div>
      {/* Legend */}
      <div className="ml-xl flex flex-col gap-sm">
      <div className="flex items-center gap-sm">
      <div className="w-3 h-3 rounded bg-[#10B981]"></div>
      <span className="font-label-md text-label-md text-on-background w-16">Ready</span>
      <span className="font-mono-data text-mono-data text-on-surface-variant">65% (1,563)</span>
      </div>
      <div className="flex items-center gap-sm">
      <div className="w-3 h-3 rounded bg-[#F59E0B]"></div>
      <span className="font-label-md text-label-md text-on-background w-16">Paused</span>
      <span className="font-mono-data text-mono-data text-on-surface-variant">20% (481)</span>
      </div>
      <div className="flex items-center gap-sm">
      <div className="w-3 h-3 rounded bg-[#EF4444]"></div>
      <span className="font-label-md text-label-md text-on-background w-16">Error</span>
      <span className="font-mono-data text-mono-data text-on-surface-variant">15% (361)</span>
      </div>
      </div>
      </div>
      </div>
      {/* Actionable Hints */}
      <div className="bg-[#1E293B] border border-primary/30 rounded p-md flex items-start gap-md">
      <div className="mt-xs">
      <Lightbulb className="text-[#F59E0B]" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex-1">
      <h4 className="font-headline-sm text-headline-sm text-on-background mb-xs">Recommendations</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant">
                                      3 records have been stuck in <span className="bg-[#F59E0B]/10 text-[#F59E0B] px-1 rounded">Paused</span> state for &gt;48h. Review queue to prevent processing bottleneck.
                                  </p>
      </div>
      <button className="h-8 px-md bg-surface text-on-background border border-outline-variant hover:border-primary rounded font-label-md text-label-md whitespace-nowrap" type="button" data-action-id="review-queue-7" onClick={actions?.["review-queue-7"]}>
                                  Review Queue
                              </button>
      </div>
      </div>
      {/* Main Area Right: Recent Activity */}
      <div className="col-span-4 bg-[#0F172A] border border-[#1E293B] rounded flex flex-col h-[400px]">
      <div className="p-md border-b border-[#1E293B] flex justify-between items-center">
      <h3 className="font-headline-sm text-headline-sm text-on-background">Recent Activity</h3>
      <span className="font-label-md text-label-md text-on-surface-variant">Live</span>
      </div>
      <div className="flex-1 overflow-y-auto p-md custom-scrollbar relative">
      {/* Timeline Line */}
      <div className="absolute left-6 top-md bottom-md w-px bg-[#1E293B]"></div>
      <div className="flex flex-col gap-lg">
      {/* Event 1 */}
      <div className="flex gap-sm relative z-10">
      <div className="w-6 h-6 rounded-full bg-[#10B981]/20 border border-[#10B981] flex items-center justify-center shrink-0">
      <Check className="text-[12px] text-[#10B981]" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex flex-col gap-xs pt-xs">
      <p className="font-body-sm text-body-sm text-on-background"><span className="font-mono-data text-primary">Record #102</span> status changed to Ready</p>
      <span className="font-label-caps text-label-caps text-on-surface-variant">Just now</span>
      </div>
      </div>
      {/* Event 2 */}
      <div className="flex gap-sm relative z-10">
      <div className="w-6 h-6 rounded-full bg-primary/20 border border-primary flex items-center justify-center shrink-0">
      <User className="text-[12px] text-primary" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex flex-col gap-xs pt-xs">
      <p className="font-body-sm text-body-sm text-on-background">Operator Override on <span className="font-mono-data text-primary">Seq-A</span></p>
      <span className="font-label-caps text-label-caps text-on-surface-variant">2m ago</span>
      </div>
      </div>
      {/* Event 3 */}
      <div className="flex gap-sm relative z-10">
      <div className="w-6 h-6 rounded-full bg-[#EF4444]/20 border border-[#EF4444] flex items-center justify-center shrink-0">
      <CircleAlert className="text-[12px] text-[#EF4444]" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex flex-col gap-xs pt-xs">
      <p className="font-body-sm text-body-sm text-on-background">Processing fault on <span className="font-mono-data text-[#EF4444]">Node 4</span></p>
      <span className="font-label-caps text-label-caps text-on-surface-variant">15m ago</span>
      </div>
      </div>
      {/* Event 4 */}
      <div className="flex gap-sm relative z-10">
      <div className="w-6 h-6 rounded-full bg-[#F59E0B]/20 border border-[#F59E0B] flex items-center justify-center shrink-0">
      <Pause className="text-[12px] text-[#F59E0B]" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex flex-col gap-xs pt-xs">
      <p className="font-body-sm text-body-sm text-on-background">Batch <span className="font-mono-data text-primary">#98</span> paused by system</p>
      <span className="font-label-caps text-label-caps text-on-surface-variant">42m ago</span>
      </div>
      </div>
      {/* Event 5 */}
      <div className="flex gap-sm relative z-10">
      <div className="w-6 h-6 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center shrink-0">
      <Braces className="text-[12px] text-on-surface-variant" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex flex-col gap-xs pt-xs">
      <p className="font-body-sm text-body-sm text-on-background">Routine backup completed</p>
      <span className="font-label-caps text-label-caps text-on-surface-variant">1h ago</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
