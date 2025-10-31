import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Banknote } from "lucide-react"
import { cn } from "@/lib/utils"
import { MoreHorizontal } from "lucide-react" // Added for menu icon

interface DashboardBankBalancesProps extends React.ComponentProps<typeof Card> {
  className?: string
}

export function DashboardBankBalances({ className, ...props }: DashboardBankBalancesProps) {
  return (
    <Card className={cn("rounded-xl shadow-md p-4 bg-white", className)} {...props}>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-sm font-bold">Bank Balances</CardTitle>
        <div className="flex items-center gap-2">
          <Banknote className="h-4 w-4 text-muted-foreground" />
          <MoreHorizontal className="h-4 w-4 text-muted-foreground" /> {/* Menu icon */}
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Operating Cash</p>
            <div className="text-2xl font-bold">$145K</div>
            <p className="text-xs text-green-500">+5.2%</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Reserved Funds</p>
            <div className="text-2xl font-bold">$89K</div>
            <p className="text-xs text-red-500">-2.1%</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Loan Bank Balances 1</p>
            <div className="text-2xl font-bold">$68K</div>
            <p className="text-xs text-green-500">+8.4%</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Loan Bank Balances 2</p>
            <div className="text-2xl font-bold">$15K</div>
            <p className="text-xs text-green-500">0%</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
