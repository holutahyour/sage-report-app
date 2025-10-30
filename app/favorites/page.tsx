import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"
import { DashboardSummaryCards } from "@/components/dashboard-summary-cards"
import { DashboardAccountsPayable } from "@/components/dashboard-accounts-payable"
import { DashboardAccountsReceivable } from "@/components/dashboard-accounts-receivable"
import { DashboardBankBalances } from "@/components/dashboard-bank-balances"
import { DashboardBudgetPerformance } from "@/components/dashboard-budget-performance"
import { DashboardInventoryManagement } from "@/components/dashboard-inventory-management"
import { DashboardFilters } from "@/components/dashboard-filters"

export default function FavoritesPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Favorites Dashboard</h1>
        <Button variant="outline" size="sm">
          <Star className="mr-2 h-4 w-4" />
          Customize
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <DashboardSummaryCards />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <DashboardAccountsPayable className="col-span-2" />
        <DashboardAccountsReceivable />
        <DashboardBankBalances />
        <DashboardBudgetPerformance />
        <DashboardInventoryManagement />
      </div>

      {/* Right Sidebar/Filter Section will go here */}
      <DashboardFilters />
    </div>
  )
}
