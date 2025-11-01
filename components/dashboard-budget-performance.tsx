import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart } from "lucide-react"
import { cn } from "@/lib/utils"
import { MoreHorizontal } from "lucide-react" // Added for menu icon
import { DateRange } from "react-day-picker"

interface DashboardBudgetPerformanceProps extends React.ComponentProps<typeof Card> {
  className?: string
  selectedDateRange?: DateRange
}

export function DashboardBudgetPerformance({ className, selectedDateRange, ...props }: DashboardBudgetPerformanceProps) {
  // In a real application, you would fetch data based on the selectedDateRange
  console.log("Filtering DashboardBudgetPerformance by date range:", selectedDateRange)

  return (
    <Card className={cn("rounded-xl shadow-md bg-white h-32", className)} {...props}>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-sm font-bold">Budget Performance</CardTitle>
        <div className="flex items-center gap-2">
          <PieChart className="h-4 w-4 text-muted-foreground" />
          <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <div className="h-[calc(100%-56px)] overflow-y-auto">
        <CardContent className="pt-0">
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div>
              <p className="text-muted-foreground">Budget Accuracy</p>
              <div className="text-lg font-bold">94.2%</div>
              <p className="text-green-500">+2.1%</p>
            </div>
            <div>
              <p className="text-muted-foreground">Total Variance</p>
              <div className="text-lg font-bold">$18.5K</div>
              <p className="text-red-500">+5.2K</p>
            </div>
            <div>
              <p className="text-muted-foreground">Forecast Error</p>
              <div className="text-lg font-bold">0.8%</div>
              <p className="text-green-500">-0.1%</p>
            </div>
            <div>
              <p className="text-muted-foreground">Alerts</p>
              <div className="text-lg font-bold">3</div>
              <p className="text-red-500">+1</p>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  )
}
