import { DashboardAccountsPayable } from "@/components/dashboard-accounts-payable"
import { DashboardAccountsReceivable } from "@/components/dashboard-accounts-receivable"
import { DashboardBankBalances } from "@/components/dashboard-bank-balances"
import { DashboardBudgetPerformance } from "@/components/dashboard-budget-performance"
import { DashboardFilters } from "@/components/dashboard-filters"
import { DashboardInventoryManagement } from "@/components/dashboard-inventory-management"
import { DashboardSummaryCards } from "@/components/dashboard-summary-cards"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import { useState } from "react"
import { DateRange } from "react-day-picker"

export default function FavoritesPage() {
  const [selectedDateRange, setSelectedDateRange] = useState<DateRange | undefined>(undefined)
  const [visibleCards, setVisibleCards] = useState<string[]>([
    "ap",
    "ar",
    "bank-balances",
    "budget-performance",
    "inventory-management",
  ])

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Favorites Dashboard</h1>
        <Button variant="outline" size="sm">
          <Star className="mr-2 h-4 w-4" />
          Customize
        </Button>
      </div>

      <div className="grid grid-cols-12 gap-4">
        {/* Top row: 4 equal cards */}
        <div className="col-span-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <DashboardSummaryCards selectedDateRange={selectedDateRange} />
        </div>

        {/* Middle row: 3 cards spanning full width */}
        <div className="col-span-12 grid gap-4 md:grid-cols-2 lg:grid-cols-12">
          {visibleCards.includes("ap") && (
            <DashboardAccountsPayable className="lg:col-span-4" selectedDateRange={selectedDateRange} />
          )}
          {visibleCards.includes("ar") && (
            <DashboardAccountsReceivable className="lg:col-span-4" selectedDateRange={selectedDateRange} />
          )}
          {visibleCards.includes("bank-balances") && (
            <DashboardBankBalances className="lg:col-span-4" selectedDateRange={selectedDateRange} />
          )}
        </div>

        {/* Bottom row: 2 cards side-by-side (Budget Performance + Inventory Management) */}
        <div className="col-span-12 grid gap-4 md:grid-cols-2 lg:grid-cols-12">
          {visibleCards.includes("budget-performance") && (
            <DashboardBudgetPerformance className="lg:col-span-6" selectedDateRange={selectedDateRange} />
          )}
          {visibleCards.includes("inventory-management") && (
            <DashboardInventoryManagement className="lg:col-span-6" selectedDateRange={selectedDateRange} />
          )}
        </div>
      </div>

      {/* Right sidebar: sticky metric selector panel */}
      <div className="lg:col-span-3 lg:sticky lg:top-0">
        <DashboardFilters
          selectedDateRange={selectedDateRange}
          setSelectedDateRange={setSelectedDateRange}
          visibleCards={visibleCards}
          setVisibleCards={setVisibleCards}
        />
      </div>
    </div>
  )
}
