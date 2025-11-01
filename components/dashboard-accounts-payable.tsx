import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { CreditCard, MoreHorizontal } from "lucide-react"
import { DateRange } from "react-day-picker"

interface DashboardAccountsPayableProps extends React.ComponentProps<typeof Card> {
  className?: string
  selectedDateRange?: DateRange
}

export function DashboardAccountsPayable({ className, selectedDateRange, ...props }: DashboardAccountsPayableProps) {
  // In a real application, you would fetch data based on the selectedDateRange
  console.log("Filtering DashboardAccountsPayable by date range:", selectedDateRange)

  return (
    <Card className={cn("rounded-xl shadow-md bg-white h-32", className)} {...props}>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-sm font-bold">Accounts Payable</CardTitle>
        <div className="flex items-center gap-2">
          <CreditCard className="h-4 w-4 text-muted-foreground" />
          <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <div className="h-[calc(100%-56px)] overflow-y-auto">
        <CardContent className="pt-0">
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div>
              <p className="text-muted-foreground">Total Payables</p>
              <div className="text-lg font-bold">$342,150</div>
              <p className="text-green-500">+8.2%</p>
            </div>
            <div>
              <p className="text-muted-foreground">Overdue Amount</p>
              <div className="text-lg font-bold">$45,320</div>
              <p className="text-red-500">-12.5%</p>
            </div>
            <div>
              <p className="text-muted-foreground">Average Days</p>
              <div className="text-lg font-bold">28 days</div>
              <p className="text-red-500">-3 days</p>
            </div>
            <div>
              <p className="text-muted-foreground">Vendors</p>
              <div className="text-lg font-bold">156</div>
              <p className="text-green-500">+5</p>
            </div>
          </div>
          {/* Removed aging analysis for brevity in smaller card */}
        </CardContent>
      </div>
    </Card>
  )
}
