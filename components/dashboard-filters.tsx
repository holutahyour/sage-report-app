import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { CalendarDays, Settings } from "lucide-react"
import { cn } from "@/lib/utils"
import { MoreHorizontal } from "lucide-react" // Added for menu icon
import { DateRange } from "react-day-picker"
import { DatePickerWithRange } from "@/components/ui/date-range-picker"

interface DashboardFiltersProps extends React.ComponentProps<typeof Card> {
  selectedDateRange: DateRange | undefined
  setSelectedDateRange: (date: DateRange | undefined) => void
  visibleCards: string[]
  setVisibleCards: (cards: string[]) => void
}

export function DashboardFilters({
  className,
  selectedDateRange,
  setSelectedDateRange,
  visibleCards,
  setVisibleCards,
  ...props
}: DashboardFiltersProps) {
  const handleCheckboxChange = (cardId: string, checked: boolean) => {
    if (checked) {
      setVisibleCards([...visibleCards, cardId])
    } else {
      setVisibleCards(visibleCards.filter((id) => id !== cardId))
    }
  }

  return (
    <Card className={cn("rounded-xl shadow-md p-2 bg-white", className)} {...props}>
      <CardHeader className="flex flex-row items-center justify-between px-1 py-2">
        <CardTitle className="text-xs font-bold">Filters</CardTitle>
        <MoreHorizontal className="h-3 w-3 text-muted-foreground" />
      </CardHeader>
      <CardContent className="p-1">
        <div className="grid gap-1">
          <div>
            <p className="text-xs font-medium flex items-center gap-1">
              <CalendarDays className="h-3 w-3" /> Date Range
            </p>
            <DatePickerWithRange date={selectedDateRange} setDate={setSelectedDateRange} className="mt-1" />
          </div>
          <div>
            <p className="text-xs font-medium flex items-center gap-1">
              <Settings className="h-3 w-3" /> Metrics
            </p>
            <div className="grid gap-1 mt-1 max-h-[200px] overflow-y-auto text-xs">
              <div className="flex items-center space-x-1">
                <Checkbox
                  id="ap"
                  checked={visibleCards.includes("ap")}
                  onCheckedChange={(checked) => handleCheckboxChange("ap", checked as boolean)}
                />
                <label htmlFor="ap" className="text-xs font-medium leading-none">
                  AP
                </label>
              </div>
              <div className="flex items-center space-x-1">
                <Checkbox
                  id="ar"
                  checked={visibleCards.includes("ar")}
                  onCheckedChange={(checked) => handleCheckboxChange("ar", checked as boolean)}
                />
                <label htmlFor="ar" className="text-xs font-medium leading-none">
                  AR
                </label>
              </div>
              <div className="flex items-center space-x-1">
                <Checkbox
                  id="bank-balances"
                  checked={visibleCards.includes("bank-balances")}
                  onCheckedChange={(checked) => handleCheckboxChange("bank-balances", checked as boolean)}
                />
                <label htmlFor="bank-balances" className="text-xs font-medium leading-none">
                  Bank Balances
                </label>
              </div>
              <div className="flex items-center space-x-1">
                <Checkbox
                  id="budget-performance"
                  checked={visibleCards.includes("budget-performance")}
                  onCheckedChange={(checked) => handleCheckboxChange("budget-performance", checked as boolean)}
                />
                <label htmlFor="budget-performance" className="text-xs font-medium leading-none">
                  Budget Performance
                </label>
              </div>
              <div className="flex items-center space-x-1">
                <Checkbox
                  id="inventory-management"
                  checked={visibleCards.includes("inventory-management")}
                  onCheckedChange={(checked) => handleCheckboxChange("inventory-management", checked as boolean)}
                />
                <label htmlFor="inventory-management" className="text-xs font-medium leading-none">
                  Inventory Management
                </label>
              </div>
              <div className="flex items-center space-x-1">
                <Checkbox
                  id="drilling-rig-fleet"
                  checked={visibleCards.includes("drilling-rig-fleet")}
                  onCheckedChange={(checked) => handleCheckboxChange("drilling-rig-fleet", checked as boolean)}
                />
                <label htmlFor="drilling-rig-fleet" className="text-xs font-medium leading-none">
                  Drilling Rig Fleet
                </label>
              </div>
              <div className="flex items-center space-x-1">
                <Checkbox
                  id="purchase-orders"
                  checked={visibleCards.includes("purchase-orders")}
                  onCheckedChange={(checked) => handleCheckboxChange("purchase-orders", checked as boolean)}
                />
                <label htmlFor="purchase-orders" className="text-xs font-medium leading-none">
                  Purchase Orders
                </label>
              </div>
              <div className="flex items-center space-x-1">
                <Checkbox
                  id="gross-margin"
                  checked={visibleCards.includes("gross-margin")}
                  onCheckedChange={(checked) => handleCheckboxChange("gross-margin", checked as boolean)}
                />
                <label htmlFor="gross-margin" className="text-xs font-medium leading-none">
                  Gross Margin
                </label>
              </div>
              <div className="flex items-center space-x-1">
                <Checkbox
                  id="revenue"
                  checked={visibleCards.includes("revenue")}
                  onCheckedChange={(checked) => handleCheckboxChange("revenue", checked as boolean)}
                />
                <label htmlFor="revenue" className="text-xs font-medium leading-none">
                  Revenue
                </label>
              </div>
              <div className="flex items-center space-x-1">
                <Checkbox
                  id="profit-and-loss"
                  checked={visibleCards.includes("profit-and-loss")}
                  onCheckedChange={(checked) => handleCheckboxChange("profit-and-loss", checked as boolean)}
                />
                <label htmlFor="profit-and-loss" className="text-xs font-medium leading-none">
                  Profit and Loss
                </label>
              </div>
              <div className="flex items-center space-x-1">
                <Checkbox
                  id="operating-expenses"
                  checked={visibleCards.includes("operating-expenses")}
                  onCheckedChange={(checked) => handleCheckboxChange("operating-expenses", checked as boolean)}
                />
                <label htmlFor="operating-expenses" className="text-xs font-medium leading-none">
                  Operating Expenses
                </label>
              </div>
            </div>
          </div>
          <div className="flex gap-0.5 mt-1">
            <Button className="flex-1 text-xs h-7">Apply Changes</Button>
            <Button variant="outline" className="text-xs h-7">Top 5</Button>
            <Button variant="outline" className="text-xs h-7">Clear</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
