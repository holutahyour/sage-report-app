import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CreditCard } from "lucide-react"
import { cn } from "@/lib/utils"

interface DashboardAccountsPayableProps extends React.ComponentProps<typeof Card> {}

export function DashboardAccountsPayable({ className, ...props }: DashboardAccountsPayableProps) {
  return (
    <Card className={cn("", className)} {...props}>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-sm font-medium">Accounts Payable</CardTitle>
        <CreditCard className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Total Payables</p>
            <div className="text-2xl font-bold">$342,150</div>
            <p className="text-xs text-green-500">+8.2%</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Overdue Amount</p>
            <div className="text-2xl font-bold">$45,320</div>
            <p className="text-xs text-red-500">-12.5%</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Average Days</p>
            <div className="text-2xl font-bold">28 days</div>
            <p className="text-xs text-red-500">-3 days</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Vendors</p>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-green-500">+5</p>
          </div>
        </div>
        <div className="mt-6">
          <p className="text-sm font-medium">Aging Analysis & Breakdown</p>
          {/* Donut Chart Placeholder */}
          <div className="h-40 w-full bg-gray-100 flex items-center justify-center rounded-md mt-2">
            Donut Chart
          </div>
          <div className="flex justify-between text-xs mt-2">
            <span>● 0-30 days</span>
            <span>$180K</span>
          </div>
          <div className="flex justify-between text-xs">
            <span>● 31-60 days</span>
            <span>$95K</span>
          </div>
          <div className="flex justify-between text-xs">
            <span>● 61-90 days</span>
            <span>$42K</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
