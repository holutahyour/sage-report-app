"use client"
import { DashboardAccountsPayable } from "@/components/dashboard-accounts-payable"
import { DashboardAccountsReceivable } from "@/components/dashboard-accounts-receivable"
import { DashboardBankBalances } from "@/components/dashboard-bank-balances"
import { DashboardBudgetPerformance } from "@/components/dashboard-budget-performance"
import { DashboardFilters } from "@/components/dashboard-filters"
import { DashboardInventoryManagement } from "@/components/dashboard-inventory-management"
import { SummaryCard, summaryData } from "@/components/dashboard-summary-cards"
import { Button } from "@/components/ui/button"
import { Star, Settings } from "lucide-react"
import { useState } from "react"
import { DateRange } from "react-day-picker"
import { DashboardFilterDisplay } from "@/components/dashboard-filter-display"

export default function FavoritesPage() {
  const [selectedDateRange, setSelectedDateRange] = useState<DateRange | undefined>(undefined)
  const [visibleCards, setVisibleCards] = useState<string[]>([
    "ap",
    "ar",
    "bank-balances",
    "budget-performance",
    "inventory-management",
  ])

  const dashboardCardComponents = [
    { id: "ap", component: DashboardAccountsPayable, type: "payable" },
    { id: "ar", component: DashboardAccountsReceivable, type: "receivable" },
    { id: "bank-balances", component: DashboardBankBalances, type: "bank" },
    { id: "budget-performance", component: DashboardBudgetPerformance, type: "budget" },
    { id: "inventory-management", component: DashboardInventoryManagement, type: "inventory" },
  ]

  const visibleMainCards = dashboardCardComponents.filter(card => visibleCards.includes(card.id))
  const placeholderCount = Math.max(0, 6 - visibleMainCards.length) // Adjusted placeholder count

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <h1 className="text-2xl font-bold">Favorites Dashboard</h1>
          <Button variant="outline" size="sm" className="ml-auto">
            <Star className="mr-2 h-4 w-4" />
            Customize
          </Button>
        </header>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-4 lg:grid-cols-14">
          {/* Summary Cards - Full Width */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 col-span-14">
            {summaryData.map((card) => (
              <SummaryCard key={card.id} {...card} />
            ))}
          </div>

          {/* Filter Display - Full Width */}
          {/* <div className="col-span-12">
            <DashboardFilterDisplay visibleCards={visibleCards} setVisibleCards={setVisibleCards} />
          </div> */}

          {/* Main Dashboard Cards - 2x3 Grid (takes 8 columns) */}
          <div className="grid auto-rows-max items-start gap-4 md:gap-4 lg:col-span-11 xl:col-span-11">
            <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
              {visibleMainCards.map((card) => {
                const Component = card.component;
                return (
                  <div key={card.id} className="h-64">
                    <Component
                      selectedDateRange={selectedDateRange}
                      className="h-full"
                    />
                  </div>
                );
              })}
              {Array.from({ length: placeholderCount }).map((_, index) => (
                <div key={`placeholder-${index}`} className="flex flex-col items-center justify-center rounded-xl border border-dashed p-4 text-center h-64">
                  <Settings className="mb-2 h-8 w-8 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">Select a metric to fill this slot</p>
                </div>
              ))}
            </div>
          </div>

          {/* Dashboard Filters (takes 4 columns) */}
          <div className="lg:col-span-3 xl:col-span-3"> {/* Changed to 4 columns */}
            <DashboardFilters
              className=""
              selectedDateRange={selectedDateRange}
              setSelectedDateRange={setSelectedDateRange}
              visibleCards={visibleCards}
              setVisibleCards={setVisibleCards}
            />
          </div>
        </main>
      </div>
    </div>
  )
}
