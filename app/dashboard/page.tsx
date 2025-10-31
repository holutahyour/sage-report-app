"use client"

import { useState } from "react"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { DashboardAccountsPayable } from "@/components/dashboard-accounts-payable"
import { DashboardAccountsReceivable } from "@/components/dashboard-accounts-receivable"
import { DashboardBankBalances } from "@/components/dashboard-bank-balances"
import { DashboardBudgetPerformance } from "@/components/dashboard-budget-performance"
import { DashboardInventoryManagement } from "@/components/dashboard-inventory-management"
import { DashboardSummaryCards } from "@/components/dashboard-summary-cards"
import { DashboardFilters } from "@/components/dashboard-filters"
import { DashboardFilterDisplay } from "@/components/dashboard-filter-display"

import data from "./data.json"
import { DateRange } from "react-day-picker"

export default function Page() {
  const [selectedDateRange, setSelectedDateRange] = useState<DateRange | undefined>(undefined)
  const [visibleCards, setVisibleCards] = useState<string[]>([
    "cash-on-hand",
    "outstanding-ar",
    "outstanding-ap",
    "net-income",
    "ap",
    "ar",
    "bank-balances",
    "budget-performance",
    "inventory-management",
  ])

  const allCards = [
    { id: "cash-on-hand", component: <DashboardSummaryCards selectedDateRange={selectedDateRange} /> },
    { id: "outstanding-ar", component: <DashboardSummaryCards selectedDateRange={selectedDateRange} /> },
    { id: "outstanding-ap", component: <DashboardSummaryCards selectedDateRange={selectedDateRange} /> },
    { id: "net-income", component: <DashboardSummaryCards selectedDateRange={selectedDateRange} /> },
    { id: "ap", component: <DashboardAccountsPayable selectedDateRange={selectedDateRange} /> },
    { id: "ar", component: <DashboardAccountsReceivable selectedDateRange={selectedDateRange} /> },
    { id: "bank-balances", component: <DashboardBankBalances selectedDateRange={selectedDateRange} /> },
    { id: "budget-performance", component: <DashboardBudgetPerformance selectedDateRange={selectedDateRange} /> },
    { id: "inventory-management", component: <DashboardInventoryManagement selectedDateRange={selectedDateRange} /> },
  ]

  const filteredCards = allCards.filter(card => visibleCards.includes(card.id))

  return (
    <div className="@container/main flex flex-1 flex-col gap-2">
      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
        <div className="grid grid-cols-1 gap-4 px-4 lg:grid-cols-3 lg:px-6">
          <div className="lg:col-span-2 grid grid-cols-1 @xl/main:grid-cols-2 @5xl/main:grid-cols-3 gap-4">
            {filteredCards.map((card, index) => (
              <div key={card.id} className="h-32">
                {card.component}
              </div>
            ))}
          </div>
          <div className="lg:col-span-1">
            <DashboardFilters
              selectedDateRange={selectedDateRange}
              setSelectedDateRange={setSelectedDateRange}
              visibleCards={visibleCards}
              setVisibleCards={setVisibleCards}
            />
            <DashboardFilterDisplay
              visibleCards={visibleCards}
              setVisibleCards={setVisibleCards}
              className="mt-4"
            />
          </div>
        </div>
        <div className="px-4 lg:px-6">
          <ChartAreaInteractive />
        </div>
        <DataTable data={data} />
      </div>
    </div>
  )
}
