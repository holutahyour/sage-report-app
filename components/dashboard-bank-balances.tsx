import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Banknote } from "lucide-react"
import { cn } from "@/lib/utils"
import { MoreHorizontal } from "lucide-react" // Added for menu icon
import { DateRange } from "react-day-picker"

interface DashboardBankBalancesProps extends React.ComponentProps<typeof Card> {
  className?: string
  selectedDateRange?: DateRange
}

export function DashboardBankBalances({ className, selectedDateRange, ...props }: DashboardBankBalancesProps) {
  // In a real application, you would fetch data based on the selectedDateRange
  console.log("Filtering DashboardBankBalances by date range:", selectedDateRange)

  return (
    <Card className={cn("rounded-xl shadow-md bg-white h-32", className)} {...props}>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-sm font-bold">Bank Balances</CardTitle>
        <div className="flex items-center gap-2">
          <Banknote className="h-4 w-4 text-muted-foreground" />
          <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <div className="h-[calc(100%-56px)] overflow-y-auto">
        <CardContent className="pt-0">
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div>
              <p className="text-muted-foreground">Operating Cash</p>
              <div className="text-lg font-bold">$145K</div>
              <p className="text-green-500">+5.2%</p>
            </div>
            <div>
              <p className="text-muted-foreground">Reserved Funds</p>
              <div className="text-lg font-bold">$89K</div>
              <p className="text-red-500">-2.1%</p>
            </div>
            <div>
              <p className="text-muted-foreground">Loan Bank Balances 1</p>
              <div className="text-lg font-bold">$68K</div>
              <p className="text-green-500">+8.4%</p>
            </div>
            <div>
              <p className="text-muted-foreground">Loan Bank Balances 2</p>
              <div className="text-lg font-bold">$15K</div>
              <p className="text-green-500">0%</p>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  )
}
