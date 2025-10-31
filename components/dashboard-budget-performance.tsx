import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart } from "lucide-react"
import { cn } from "@/lib/utils"
import { MoreHorizontal } from "lucide-react" // Added for menu icon

interface DashboardBudgetPerformanceProps extends React.ComponentProps<typeof Card> {
  className?: string
}

export function DashboardBudgetPerformance({ className, ...props }: DashboardBudgetPerformanceProps) {
  return (
    <Card className={cn("rounded-xl shadow-md p-4 bg-white", className)} {...props}>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-sm font-bold">Budget Performance</CardTitle>
        <div className="flex items-center gap-2">
          <PieChart className="h-4 w-4 text-muted-foreground" />
          <MoreHorizontal className="h-4 w-4 text-muted-foreground" /> {/* Menu icon */}
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Budget Accuracy</p>
            <div className="text-2xl font-bold">94.2%</div>
            <p className="text-xs text-green-500">+2.1%</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Total Variance</p>
            <div className="text-2xl font-bold">$18.5K</div>
            <p className="text-xs text-red-500">+5.2K</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Forecast Error</p>
            <div className="text-2xl font-bold">0.8%</div>
            <p className="text-xs text-green-500">-0.1%</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Alerts</p>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-red-500">+1</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
