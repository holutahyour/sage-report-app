import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp } from "lucide-react"
import { cn } from "@/lib/utils"
import { MoreHorizontal } from "lucide-react" // Added for menu icon
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
        <CardContent className="p-4 pt-0">
          <div className="h-24 w-full bg-gray-100 flex items-center justify-center rounded-md">
            Trend Chart
          </div>
          <div className="grid grid-cols-3 gap-2 mt-4 text-center">
            <div className="bg-green-100 text-green-800 p-2 rounded-md">
              <p className="text-sm font-medium">94.2%</p>
              <p className="text-xs">Collection</p>
            </div>
            <div className="bg-blue-100 text-blue-800 p-2 rounded-md">
              <p className="text-sm font-medium">28d</p>
              <p className="text-xs">Avg DSO</p>
            </div>
            <div className="bg-purple-100 text-purple-800 p-2 rounded-md">
              <p className="text-sm font-medium">152</p>
              <p className="text-xs">Customers</p>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-sm font-medium">Top Customer Segments</p>
            <div className="flex justify-between text-sm mt-2">
              <span>Enterprise</span>
              <span>$145K</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Mid-Market</span>
              <span>$98K</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Small Business</span>
              <span>$65K</span>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  )
}
