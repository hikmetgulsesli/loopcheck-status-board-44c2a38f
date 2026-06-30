// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Status Board - LoopCheck Status Board
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowUpDown, BadgeHelp, BarChart3, Bell, CircleUserRound, LayoutDashboard, ListFilter, Network, Pause, Play, Plus, RefreshCw, Search, Settings, TriangleAlert } from "lucide-react";


export type StatusBoardLoopcheckStatusBoardActionId = "notifications-1" | "account-circle-2" | "create-record-3" | "board-view-4" | "list-view-5" | "filter-6" | "sort-7" | "play-arrow-8" | "play-arrow-9" | "pause-10" | "refresh-11" | "operations-1" | "status-board-2" | "insights-3" | "settings-4";

export interface StatusBoardLoopcheckStatusBoardProps {
  actions?: Partial<Record<StatusBoardLoopcheckStatusBoardActionId, () => void>>;

}

export function StatusBoardLoopcheckStatusBoard({ actions }: StatusBoardLoopcheckStatusBoardProps) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="bg-surface-container-low h-screen w-64 fixed left-0 top-0 border-r border-outline-variant flex flex-col h-full py-lg z-20 shadow-none">
      <div className="px-md mb-xl flex items-center gap-md">
      <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center shrink-0">
      <Network className="text-on-primary-container text-[20px]" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <h1 className="font-headline-md text-headline-md text-primary">LoopCheck</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Operational Hub</p>
      </div>
      </div>
      <div className="flex-1 px-sm space-y-xs overflow-y-auto">
      <a className="flex items-center gap-md px-md py-sm rounded text-on-surface-variant hover:bg-surface-container-high transition-colors active:scale-95 transition-transform group" href="#" data-action-id="operations-1" onClick={(event) => { event.preventDefault(); actions?.["operations-1"]?.(); }}>
      <BadgeHelp className="text-[20px] group-hover:text-primary transition-colors" aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Operations</span>
      </a>
      <a className="flex items-center gap-md px-md py-sm rounded text-primary font-bold border-r-2 border-primary bg-surface-container-high hover:bg-surface-container-high transition-colors active:scale-95 transition-transform group" href="#" data-action-id="status-board-2" onClick={(event) => { event.preventDefault(); actions?.["status-board-2"]?.(); }}>
      <LayoutDashboard className="text-[20px]" aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Status Board</span>
      </a>
      <a className="flex items-center gap-md px-md py-sm rounded text-on-surface-variant hover:bg-surface-container-high transition-colors active:scale-95 transition-transform group" href="#" data-action-id="insights-3" onClick={(event) => { event.preventDefault(); actions?.["insights-3"]?.(); }}>
      <BarChart3 className="text-[20px] group-hover:text-primary transition-colors" aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Insights</span>
      </a>
      </div>
      <div className="mt-auto px-sm pt-md border-t border-outline-variant/50">
      <a className="flex items-center gap-md px-md py-sm rounded text-on-surface-variant hover:bg-surface-container-high transition-colors active:scale-95 transition-transform group" href="#" data-action-id="settings-4" onClick={(event) => { event.preventDefault(); actions?.["settings-4"]?.(); }}>
      <Settings className="text-[20px] group-hover:text-primary transition-colors" aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Settings</span>
      </a>
      </div>
      </nav>
      {/* TopNavBar */}
      <header className="bg-surface fixed top-0 right-0 left-64 h-14 border-b border-outline-variant flex justify-between items-center px-lg h-full z-10 shadow-none">
      <div className="flex items-center">
      <h2 className="font-headline-lg text-headline-lg text-on-background">LoopCheck Status Board</h2>
      </div>
      <div className="flex items-center gap-lg">
      <div className="relative w-64 group">
      <Search className="absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]" aria-hidden={true} focusable="false" />
      <input className="w-full bg-surface-container-low border border-outline-variant rounded h-8 pl-8 pr-sm text-body-sm font-body-sm text-on-background placeholder:text-on-surface-variant focus:border-primary focus:ring-0 transition-colors" placeholder="Search records..." type="text" />
      </div>
      <div className="flex items-center gap-sm">
      <button className="w-8 h-8 rounded flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-colors cursor-pointer" type="button" aria-label="Notifications" data-action-id="notifications-1" onClick={actions?.["notifications-1"]}>
      <Bell className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="w-8 h-8 rounded flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-colors cursor-pointer" type="button" aria-label="Account Circle" data-action-id="account-circle-2" onClick={actions?.["account-circle-2"]}>
      <CircleUserRound className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      <button className="bg-primary-container text-on-primary-container font-label-md text-label-md px-md h-8 rounded hover:bg-primary transition-colors cursor-pointer flex items-center gap-xs" type="button" data-action-id="create-record-3" onClick={actions?.["create-record-3"]}>
      <Plus className="text-[16px]" aria-hidden={true} focusable="false" />
                      Create Record
                  </button>
      </div>
      </header>
      {/* Main Content Canvas */}
      <main className="ml-64 mt-14 p-lg h-[calc(100vh-56px)] overflow-hidden flex flex-col bg-surface-container-lowest">
      {/* Board Toolbar */}
      <div className="flex items-center justify-between mb-lg shrink-0">
      <div className="flex items-center gap-md">
      <div className="flex items-center gap-xs bg-surface-container-low rounded border border-outline-variant p-[2px]">
      <button className="px-md py-xs rounded bg-surface-container-high text-on-surface font-label-md text-label-md shadow-sm" type="button" data-action-id="board-view-4" onClick={actions?.["board-view-4"]}>Board View</button>
      <button className="px-md py-xs rounded text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors" type="button" data-action-id="list-view-5" onClick={actions?.["list-view-5"]}>List View</button>
      </div>
      <div className="h-6 w-[1px] bg-outline-variant"></div>
      <div className="flex gap-sm">
      <button className="flex items-center gap-xs px-sm py-xs rounded border border-outline-variant text-on-surface-variant hover:border-outline hover:text-on-surface transition-colors font-body-sm text-body-sm" type="button" data-action-id="filter-6" onClick={actions?.["filter-6"]}>
      <ListFilter className="text-[16px]" aria-hidden={true} focusable="false" /> Filter
                          </button>
      <button className="flex items-center gap-xs px-sm py-xs rounded border border-outline-variant text-on-surface-variant hover:border-outline hover:text-on-surface transition-colors font-body-sm text-body-sm" type="button" data-action-id="sort-7" onClick={actions?.["sort-7"]}>
      <ArrowUpDown className="text-[16px]" aria-hidden={true} focusable="false" /> Sort
                          </button>
      </div>
      </div>
      <div className="flex items-center gap-md text-on-surface-variant font-mono-data text-mono-data">
      <span>Total: 42</span>
      <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
      <span>Active: <span className="text-primary">18</span></span>
      <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
      <span>Errors: <span className="text-error">3</span></span>
      </div>
      </div>
      {/* Kanban Grid */}
      <div className="flex-1 grid grid-cols-4 gap-gutter min-w-[1000px] overflow-x-auto pb-sm">
      {/* Ready Column */}
      <div className="flex flex-col bg-surface-container rounded-lg border border-outline-variant overflow-hidden">
      <div className="p-sm border-b border-outline-variant flex items-center justify-between bg-surface-container-low shrink-0">
      <div className="flex items-center gap-sm">
      <div className="w-2 h-2 rounded-full bg-primary status-pip"></div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface">Ready</h3>
      </div>
      <span className="bg-surface-variant px-2 py-0.5 rounded text-on-surface-variant font-mono-data text-mono-data text-[10px]">12</span>
      </div>
      <div className="flex-1 p-sm space-y-sm overflow-y-auto kanban-col-scroll">
      {/* Card 1 */}
      <div className="bg-surface rounded border border-outline-variant p-sm hover:border-primary transition-colors cursor-pointer group">
      <div className="flex justify-between items-start mb-sm">
      <span className="font-mono-data text-mono-data text-on-surface-variant text-[10px]">REC-8492</span>
      <span className="bg-surface-variant text-on-surface font-label-caps text-label-caps px-1.5 py-0.5 rounded border border-outline-variant">P0</span>
      </div>
      <h4 className="font-headline-sm text-headline-sm text-on-surface mb-xs leading-tight">Data Sync Normalization</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-md line-clamp-2">Awaiting final validation before pipeline integration.</p>
      <div className="flex items-center justify-between mt-auto">
      <div className="flex items-center gap-xs">
      <img className="w-5 h-5 rounded-full object-cover border border-outline-variant" data-alt="A small, professional corporate headshot of a software engineer in a dimly lit, high-tech server room with blue LED accents, modern minimal aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB62B0zZaqR_pLgzE0HXwo4rCFNds43LeUJYPqUoqF7pRhkwAfYtxYCvIH-oMjgtkD5oV9wkHCfzzLSC1Ej9K-77FtXjNl9KZ1ItBS6jphCqM75EVsSu1Vcy-kYk8bN_P_2slLlvGAy91xSdL0odsohPVSIN5IG-C66Qt-W24ncPxnPHZS4ExcDuQH8kV5nSBCBVpVrAAwDEBltShi5O1tvMKSHON93MkgmwBo3snm2ViO0ta80uFHadstMhxDJJOLyAXZ7KY00hms" />
      <span className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">2h idle</span>
      </div>
      <button className="w-6 h-6 rounded flex items-center justify-center border border-outline-variant text-on-surface-variant hover:bg-primary-container hover:text-on-primary-container hover:border-primary-container transition-colors opacity-0 group-hover:opacity-100" type="button" aria-label="Play Arrow" data-action-id="play-arrow-8" onClick={actions?.["play-arrow-8"]}>
      <Play className="text-[14px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      {/* Card 2 */}
      <div className="bg-surface rounded border border-outline-variant p-sm hover:border-primary transition-colors cursor-pointer group">
      <div className="flex justify-between items-start mb-sm">
      <span className="font-mono-data text-mono-data text-on-surface-variant text-[10px]">REC-8490</span>
      <span className="bg-surface-variant text-on-surface font-label-caps text-label-caps px-1.5 py-0.5 rounded border border-outline-variant">P2</span>
      </div>
      <h4 className="font-headline-sm text-headline-sm text-on-surface mb-xs leading-tight">Client Auth Token Refresh</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-md line-clamp-2">Scheduled automated rotation.</p>
      <div className="flex items-center justify-between mt-auto">
      <div className="flex items-center gap-xs">
      <div className="w-5 h-5 rounded-full bg-secondary-container flex items-center justify-center text-on-surface font-label-caps text-[9px]">JS</div>
      <span className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">1d idle</span>
      </div>
      <button className="w-6 h-6 rounded flex items-center justify-center border border-outline-variant text-on-surface-variant hover:bg-primary-container hover:text-on-primary-container hover:border-primary-container transition-colors opacity-0 group-hover:opacity-100" type="button" aria-label="Play Arrow" data-action-id="play-arrow-9" onClick={actions?.["play-arrow-9"]}>
      <Play className="text-[14px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      </div>
      </div>
      {/* In Review Column */}
      <div className="flex flex-col bg-surface-container rounded-lg border border-outline-variant overflow-hidden opacity-90">
      <div className="p-sm border-b border-outline-variant flex items-center justify-between bg-surface-container-low shrink-0">
      <div className="flex items-center gap-sm">
      <div className="w-2 h-2 rounded-full bg-secondary"></div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface">In Review</h3>
      </div>
      <span className="bg-surface-variant px-2 py-0.5 rounded text-on-surface-variant font-mono-data text-mono-data text-[10px]">8</span>
      </div>
      <div className="flex-1 p-sm space-y-sm overflow-y-auto kanban-col-scroll">
      {/* Card 3 */}
      <div className="bg-surface rounded border border-outline-variant p-sm hover:border-secondary transition-colors cursor-pointer group">
      <div className="flex justify-between items-start mb-sm">
      <span className="font-mono-data text-mono-data text-on-surface-variant text-[10px]">REC-8477</span>
      <span className="bg-surface-variant text-on-surface font-label-caps text-label-caps px-1.5 py-0.5 rounded border border-outline-variant">P1</span>
      </div>
      <h4 className="font-headline-sm text-headline-sm text-on-surface mb-xs leading-tight">API Gateway Latency Spike</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-md line-clamp-2">Analyzing logs from US-East region.</p>
      <div className="flex items-center justify-between mt-auto">
      <div className="flex items-center gap-xs">
      <img className="w-5 h-5 rounded-full object-cover border border-outline-variant" data-alt="A small avatar image of a data analyst in a dark control room setting, sharp focus, cinematic lighting, corporate professional style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSYgfOwkYYbBGjBW3h_-wBWoCfLdy46kBBIadkWgKWZx4MtHyQuk7qInjTsJVRMHh0Qre2I4fAgLFmbfgzsQkIK7moz7loXIsY4OAvpqym9OexWwcBgp7n4xFdSBjeOQe72WYWEW-XqChCTwGIm7-wkbolZuN_xT4Wg6CBn7mcEMHXKXDPDoyzuZcBOznkkutfzIEqShx4BSPtWgNLFLEZoAEI63izUTy2FNIg8OXAWbsnwOrhdCpYH5oVyYUmVJxjydEImHInJS4" />
      <span className="font-body-sm text-body-sm text-on-surface-variant text-[11px] text-tertiary">3d idle</span>
      </div>
      <div className="flex gap-1">
      <span className="w-2 h-2 rounded-full bg-secondary-container"></span>
      <span className="w-2 h-2 rounded-full bg-secondary-container"></span>
      <span className="w-2 h-2 rounded-full bg-outline-variant"></span>
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Paused Column */}
      <div className="flex flex-col bg-surface-container rounded-lg border border-outline-variant overflow-hidden opacity-75">
      <div className="p-sm border-b border-outline-variant flex items-center justify-between bg-surface-container-low shrink-0">
      <div className="flex items-center gap-sm">
      <div className="w-2 h-2 rounded-full bg-outline"></div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface">Paused</h3>
      </div>
      <span className="bg-surface-variant px-2 py-0.5 rounded text-on-surface-variant font-mono-data text-mono-data text-[10px]">19</span>
      </div>
      <div className="flex-1 p-sm space-y-sm overflow-y-auto kanban-col-scroll">
      {/* Card 4 */}
      <div className="bg-surface rounded border border-outline-variant border-dashed p-sm hover:border-outline transition-colors cursor-pointer group">
      <div className="flex justify-between items-start mb-sm">
      <span className="font-mono-data text-mono-data text-on-surface-variant text-[10px]">REC-8450</span>
      <span className="bg-surface-variant text-on-surface font-label-caps text-label-caps px-1.5 py-0.5 rounded border border-outline-variant">P2</span>
      </div>
      <h4 className="font-headline-sm text-headline-sm text-on-surface mb-xs leading-tight text-on-surface-variant">Legacy DB Migration</h4>
      <div className="flex items-center gap-xs mb-md mt-xs">
      <TriangleAlert className="text-[14px] text-tertiary" aria-hidden={true} focusable="false" />
      <p className="font-body-sm text-body-sm text-tertiary text-[11px]">Blocked by external vendor</p>
      </div>
      <div className="flex items-center justify-between mt-auto">
      <div className="flex items-center gap-xs">
      <div className="w-5 h-5 rounded-full bg-surface-bright flex items-center justify-center text-on-surface font-label-caps text-[9px]">AL</div>
      <span className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">14d idle</span>
      </div>
      <button className="w-6 h-6 rounded flex items-center justify-center border border-outline-variant text-on-surface-variant hover:bg-surface-variant hover:text-on-surface transition-colors opacity-0 group-hover:opacity-100" type="button" aria-label="Pause" data-action-id="pause-10" onClick={actions?.["pause-10"]}>
      <Pause className="text-[14px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      </div>
      </div>
      {/* Error Column */}
      <div className="flex flex-col bg-surface-container rounded-lg border border-error-container overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-error"></div>
      <div className="p-sm border-b border-error-container flex items-center justify-between bg-error-container/10 shrink-0">
      <div className="flex items-center gap-sm">
      <div className="w-2 h-2 rounded-full bg-error"></div>
      <h3 className="font-headline-sm text-headline-sm text-error">Error</h3>
      </div>
      <span className="bg-error-container/20 px-2 py-0.5 rounded text-error font-mono-data text-mono-data text-[10px] border border-error-container/50">3</span>
      </div>
      <div className="flex-1 p-sm space-y-sm overflow-y-auto kanban-col-scroll">
      {/* Card 5 */}
      <div className="bg-surface rounded border border-error-container p-sm hover:border-error transition-colors cursor-pointer group shadow-[0_0_10px_rgba(255,180,171,0.05)]">
      <div className="flex justify-between items-start mb-sm">
      <span className="font-mono-data text-mono-data text-error/80 text-[10px]">REC-8495</span>
      <span className="bg-error-container text-on-error-container font-label-caps text-label-caps px-1.5 py-0.5 rounded border border-error">P0</span>
      </div>
      <h4 className="font-headline-sm text-headline-sm text-on-surface mb-xs leading-tight">Payment Gateway Timeout</h4>
      <p className="font-mono-data text-mono-data text-error/90 mb-md text-[10px] bg-error-container/10 p-1 rounded">Err 504: Upstream disconnect</p>
      <div className="flex items-center justify-between mt-auto">
      <div className="flex items-center gap-xs">
      <img className="w-5 h-5 rounded-full object-cover border border-error-container" data-alt="A tiny profile picture of a distressed system administrator in a dark server room illuminated by red warning lights, intense cinematic feel." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBY24zvzlmMhCuJcfTuXMeG0Jx6YZL-90-QCI6g_y81Ja1ARpfSwSjnaWXV5YbZdjWGzRcwKd8LHyGB7Cgg_KHn4FK5YYebQ1ehbAb23rWFo13rDFCbE2IdkOLqIW-V8IFjVr08E1-jRyJQMY_GDzLN471HTF7Soy1IJBNMurVhW3XYfx1Rz_rYjnWAi5bdio-4fvY-lvCRDqiZolBXHaOVAYEqIOWoiUypaUaAw-DbYdIXhZCvVx877RHT_g1PT93DjEVyMAXAPbw" />
      <span className="font-body-sm text-body-sm text-error text-[11px] font-bold">15m idle</span>
      </div>
      <button className="w-6 h-6 rounded flex items-center justify-center border border-error-container text-error hover:bg-error-container hover:text-on-error-container transition-colors" type="button" aria-label="Refresh" data-action-id="refresh-11" onClick={actions?.["refresh-11"]}>
      <RefreshCw className="text-[14px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
