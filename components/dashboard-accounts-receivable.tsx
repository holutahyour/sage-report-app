import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { MoreHorizontal, TrendingUp } from "lucide-react"
import { DateRange } from "react-day-picker"

interface DashboardAccountsReceivableProps extends React.ComponentProps<typeof Card> {
  className?: string
  selectedDateRange?: DateRange
}

export function DashboardAccountsReceivable({ className, selectedDateRange, ...props }: DashboardAccountsReceivableProps) {
  // In a real application, you would fetch data based on the selectedDateRange
  console.log("Filtering DashboardAccountsReceivable by date range:", selectedDateRange)

  return (
    <Card className={cn("rounded-xl shadow-md bg-white h-32", className)} {...props}>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-sm font-bold">Accounts Receivable</CardTitle>
        <div className="flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-muted-foreground" />
          <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <div className="h-[calc(100%-56px)] overflow-y-auto">
        <CardContent className="pt-0">
          <div className="grid grid-cols-3 gap-1 text-xs text-center">
            <div className="bg-green-100 text-green-800 p-1 rounded-md">
              <p className="font-medium">94.2%</p>
              <p>Collection</p>
            </div>
            <div className="bg-blue-100 text-blue-800 p-1 rounded-md">
              <p className="font-medium">28d</p>
              <p>Avg DSO</p>
            </div>
            <div className="bg-purple-100 text-purple-800 p-1 rounded-md">
              <p className="font-medium">152</p>
              <p>Customers</p>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  )
}
