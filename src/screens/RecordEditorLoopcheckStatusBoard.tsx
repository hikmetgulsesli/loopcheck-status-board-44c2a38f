// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Record Editor - LoopCheck Status Board
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { BadgeHelp, BarChart3, Bell, ChevronDown, CircleAlert, CircleUserRound, LayoutDashboard, Menu, RefreshCw, Search, Settings, X } from "lucide-react";


export type RecordEditorLoopcheckStatusBoardActionId = "menu-1" | "notifications-2" | "account-circle-3" | "create-record-4" | "close-5" | "close-6" | "cancel-7" | "save-record-8" | "operations-1" | "status-board-2" | "insights-3" | "settings-4";

export interface RecordEditorLoopcheckStatusBoardProps {
  actions?: Partial<Record<RecordEditorLoopcheckStatusBoardActionId, () => void>>;

}

export function RecordEditorLoopcheckStatusBoard({ actions }: RecordEditorLoopcheckStatusBoardProps) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="bg-surface-container-low dark:bg-surface-container-low h-screen w-64 fixed left-0 top-0 border-r border-outline-variant hidden md:flex flex-col py-lg z-50">
      {/* Header */}
      <div className="px-lg mb-xl">
      <div className="flex items-center gap-md">
      <div className="w-10 h-10 rounded-full bg-surface-container-highest overflow-hidden border border-outline-variant">
      <img alt="System Operator" className="w-full h-full object-cover" data-alt="A futuristic, minimalist avatar representing a system operator in a high-tech control room environment, glowing cyan accents on a dark slate background, highly detailed vector art style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUIQ2_pTSZ_9T0nH9SNU1B9afal8BrutNZ6oYMeN56mFME5hPmwhwVQidwggXdnZQ0U643JC9GINIkp7JepsrA5a6H5nzjvS0VFkNAsUpvMGO3nE95yODOWOVpav625nue44lZVyCTElk-2keCksV3BsK_evicvghJ6CfrL_wBJuC6mIjm-vrHKpR8SgUsNk_VerDl1YJKJSr2i4IKrY4p3RW0NTHcnJMpRQW3XCfu7WE_fpBbc6LwnLhTDe3RGXFcvM1lO-be33A" />
      </div>
      <div>
      <h1 className="font-headline-md text-headline-md text-primary">LoopCheck</h1>
      <p className="font-label-md text-label-md text-on-surface-variant">Operational Hub</p>
      </div>
      </div>
      </div>
      {/* Navigation Links */}
      <div className="flex-grow flex flex-col px-md gap-sm">
      {/* Active Tab: Operations */}
      <a className="flex items-center gap-md px-md py-sm rounded-lg bg-surface-container-high text-primary font-bold border-r-2 border-primary cursor-pointer active:scale-95 transition-transform" href="#" data-action-id="operations-1" onClick={(event) => { event.preventDefault(); actions?.["operations-1"]?.(); }}>
      <BadgeHelp  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Operations</span>
      </a>
      {/* Inactive Tabs */}
      <a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors hover:text-primary cursor-pointer active:scale-95 transition-transform" href="#" data-action-id="status-board-2" onClick={(event) => { event.preventDefault(); actions?.["status-board-2"]?.(); }}>
      <LayoutDashboard aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Status Board</span>
      </a>
      <a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors hover:text-primary cursor-pointer active:scale-95 transition-transform" href="#" data-action-id="insights-3" onClick={(event) => { event.preventDefault(); actions?.["insights-3"]?.(); }}>
      <BarChart3 aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Insights</span>
      </a>
      </div>
      {/* Footer */}
      <div className="px-md mt-auto">
      <a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors hover:text-primary cursor-pointer active:scale-95 transition-transform" href="#" data-action-id="settings-4" onClick={(event) => { event.preventDefault(); actions?.["settings-4"]?.(); }}>
      <Settings aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Settings</span>
      </a>
      </div>
      </nav>
      {/* Main Content Area Wrapper */}
      <div className="md:ml-64 flex flex-col min-h-screen">
      {/* TopNavBar */}
      <header className="bg-surface dark:bg-surface fixed top-0 right-0 left-0 md:left-64 h-14 border-b border-outline-variant z-40 flex justify-between items-center px-lg">
      <div className="flex items-center gap-md">
      {/* Mobile Menu Toggle (Visible only on small screens) */}
      <button className="md:hidden text-on-surface-variant hover:text-primary transition-colors cursor-pointer" type="button" aria-label="Menu" data-action-id="menu-1" onClick={actions?.["menu-1"]}>
      <Menu aria-hidden={true} focusable="false" />
      </button>
      <div className="font-headline-sm text-headline-sm text-on-background">LoopCheck Status Board</div>
      </div>
      <div className="flex items-center gap-lg">
      {/* Search (on_right) */}
      <div className="relative hidden sm:block">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm" aria-hidden={true} focusable="false" />
      <input className="bg-surface-container-lowest border border-outline-variant rounded-full py-1 pl-10 pr-4 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary w-64 text-on-background placeholder-on-surface-variant font-body-sm text-body-sm h-8 transition-colors" placeholder="Search records..." type="text" />
      </div>
      {/* Icons */}
      <div className="flex items-center gap-md">
      <button aria-label="notifications" className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer relative" type="button" data-action-id="notifications-2" onClick={actions?.["notifications-2"]}>
      <Bell aria-hidden={true} focusable="false" />
      <span className="absolute top-0 right-0 w-2 h-2 bg-error rounded-full"></span>
      </button>
      <button aria-label="account_circle" className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer" type="button" data-action-id="account-circle-3" onClick={actions?.["account-circle-3"]}>
      <CircleUserRound aria-hidden={true} focusable="false" />
      </button>
      </div>
      {/* Primary Action */}
      <button className="hidden md:flex items-center justify-center h-8 px-md bg-primary text-on-primary rounded font-label-md text-label-md hover:bg-primary-container hover:text-on-primary-container transition-colors active:scale-95" type="button" data-action-id="create-record-4" onClick={actions?.["create-record-4"]}>
                          Create Record
                      </button>
      </div>
      </header>
      {/* Main Canvas */}
      <main className="flex-grow pt-14 p-lg md:p-margin-desktop overflow-y-auto">
      {/* Bento-style Container for the Form */}
      <div className="max-w-3xl mx-auto w-full">
      {/* Page Header */}
      <div className="mb-lg flex justify-between items-end">
      <div>
      <h2 className="font-headline-lg text-headline-lg text-on-background">Edit Record</h2>
      <p className="font-body-md text-body-md text-on-surface-variant mt-xs">Modify operational parameters and status.</p>
      </div>
      </div>
      {/* Form Card */}
      <div className="bg-surface border border-outline-variant rounded-xl overflow-hidden shadow-lg shadow-black/20">
      <form className="p-lg flex flex-col gap-lg">
      {/* Record Name (Error State Example) */}
      <div className="flex flex-col gap-xs">
      <label className="font-label-md text-label-md text-on-surface flex items-center gap-xs" htmlFor="record_name">
                                      Record Name <span className="text-error">*</span>
      </label>
      <input className="w-full bg-surface-container-lowest border border-error rounded-lg px-md py-sm font-body-md text-body-md text-on-background focus:outline-none focus:ring-1 focus:ring-error transition-colors" id="record_name" placeholder="Enter record identifier" type="text" defaultValue="" />
      <p className="font-body-sm text-body-sm text-error flex items-center gap-xs mt-1">
      <CircleAlert className="text-[14px]" aria-hidden={true} focusable="false" />
                                      Error: name cannot be empty
                                  </p>
      </div>
      {/* Description */}
      <div className="flex flex-col gap-xs">
      <label className="font-label-md text-label-md text-on-surface" htmlFor="description">
                                      Description
                                  </label>
      <textarea className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-md py-sm font-body-md text-body-md text-on-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-y" id="description" placeholder="Describe the operational context..." rows={4}></textarea>
      </div>
      {/* 2-Column Grid for Status and Tags */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
      {/* Operational Status */}
      <div className="flex flex-col gap-xs">
      <label className="font-label-md text-label-md text-on-surface flex items-center gap-xs" htmlFor="status">
                                          Operational Status <span className="text-error">*</span>
      </label>
      <div className="relative">
      <select className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-md py-sm font-body-md text-body-md text-on-background appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" id="status">
      <option value="ready">Ready</option>
      <option selected={true} value="paused">Paused</option>
      <option value="error">Error</option>
      </select>
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none" aria-hidden={true} focusable="false" />
      </div>
      </div>
      {/* System Tags */}
      <div className="flex flex-col gap-xs">
      <label className="font-label-md text-label-md text-on-surface" htmlFor="tags">
                                          System Tags
                                      </label>
      <div className="relative">
      <input className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-md py-sm pl-10 font-body-md text-body-md text-on-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" id="tags" placeholder="Add tags..." type="text" />
      <BadgeHelp className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex flex-wrap gap-xs mt-sm">
      <span className="inline-flex items-center gap-xs px-sm py-0.5 rounded bg-surface-container-high border border-outline-variant font-mono-data text-mono-data text-on-surface-variant">
                                              node-alpha
                                              <button className="hover:text-error transition-colors" type="button" aria-label="Close" data-action-id="close-5" onClick={actions?.["close-5"]}><X className="text-[14px]" aria-hidden={true} focusable="false" /></button>
      </span>
      <span className="inline-flex items-center gap-xs px-sm py-0.5 rounded bg-surface-container-high border border-outline-variant font-mono-data text-mono-data text-on-surface-variant">
                                              maintenance
                                              <button className="hover:text-error transition-colors" type="button" aria-label="Close" data-action-id="close-6" onClick={actions?.["close-6"]}><X className="text-[14px]" aria-hidden={true} focusable="false" /></button>
      </span>
      </div>
      </div>
      </div>
      </form>
      {/* Form Footer / Actions */}
      <div className="bg-surface-container p-lg border-t border-outline-variant flex flex-col sm:flex-row items-center justify-between gap-md">
      <div className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-xs">
      <RefreshCw className="text-[14px]" aria-hidden={true} focusable="false" />
                                  Last auto-saved 2m ago
                              </div>
      <div className="flex items-center gap-md w-full sm:w-auto">
      <button className="flex-1 sm:flex-none h-8 px-lg border border-outline-variant rounded text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors active:scale-95" id="ACT_CANCEL_EDIT" type="button" data-action-id="cancel-7" onClick={actions?.["cancel-7"]}>
                                      Cancel
                                  </button>
      <button className="flex-1 sm:flex-none h-8 px-lg bg-primary text-on-primary rounded font-label-md text-label-md hover:bg-primary-container hover:text-on-primary-container transition-colors active:scale-95 shadow-sm shadow-primary/20" id="ACT_SAVE_RECORD" type="submit" data-action-id="save-record-8" onClick={actions?.["save-record-8"]}>
                                      Save Record
                                  </button>
      </div>
      </div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
