import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { CalendarDays, Settings } from "lucide-react"
import { cn } from "@/lib/utils"

interface DashboardFiltersProps extends React.ComponentProps<typeof Card> {}

export function DashboardFilters({ className, ...props }: DashboardFiltersProps) {
  return (
    <Card className={cn("lg:col-span-1", className)} {...props}>
      <CardHeader>
        <CardTitle className="text-sm font-medium">Filters</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div>
            <p className="text-sm font-medium flex items-center gap-2">
              <CalendarDays className="h-4 w-4" /> Date Range
            </p>
            <Input
              type="text"
              placeholder="Jan 20 - Feb 20, 2024"
              className="mt-2"
            />
          </div>
          <div>
            <p className="text-sm font-medium flex items-center gap-2">
              <Settings className="h-4 w-4" /> Metrics
            </p>
            <div className="grid gap-2 mt-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="ap" defaultChecked />
                <label htmlFor="ap" className="text-sm font-medium leading-none">
                  AP
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="ar" defaultChecked />
                <label htmlFor="ar" className="text-sm font-medium leading-none">
                  AR
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="bank-balances" defaultChecked />
                <label htmlFor="bank-balances" className="text-sm font-medium leading-none">
                  Bank Balances
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="budget-performance" defaultChecked />
                <label htmlFor="budget-performance" className="text-sm font-medium leading-none">
                  Budget Performance
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="inventory-management" defaultChecked />
                <label htmlFor="inventory-management" className="text-sm font-medium leading-none">
                  Inventory Management
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="drilling-rig-fleet" />
                <label htmlFor="drilling-rig-fleet" className="text-sm font-medium leading-none">
                  Drilling Rig Fleet
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="purchase-orders" />
                <label htmlFor="purchase-orders" className="text-sm font-medium leading-none">
                  Purchase Orders
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="gross-margin" />
                <label htmlFor="gross-margin" className="text-sm font-medium leading-none">
                  Gross Margin
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="revenue" />
                <label htmlFor="revenue" className="text-sm font-medium leading-none">
                  Revenue
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="profit-and-loss" />
                <label htmlFor="profit-and-loss" className="text-sm font-medium leading-none">
                  Profit and Loss
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="operating-expenses" />
                <label htmlFor="operating-expenses" className="text-sm font-medium leading-none">
                  Operating Expenses
                </label>
              </div>
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <Button className="flex-1">Apply Changes</Button>
            <Button variant="outline">Top 5</Button>
            <Button variant="outline">Clear</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
