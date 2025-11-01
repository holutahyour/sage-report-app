import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign } from "lucide-react"

interface AgingBreakdownItem {
  period: string
  invoices: number
  amount: string
  percentage: string
}

interface AgingBreakdownListProps {
  data: AgingBreakdownItem[]
}

export function AgingBreakdownList({ data }: AgingBreakdownListProps) {
  return (
    <div className="flex flex-col gap-4">
      {data.map((item, index) => (
        <div key={index} className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
              <DollarSign className="h-4 w-4 text-green-500" />
            </div>
            <div>
              <p className="text-sm font-medium">{item.period}</p>
              <p className="text-xs text-muted-foreground">{item.invoices} invoices</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium">{item.amount}</p>
            <p className="text-xs text-muted-foreground">{item.percentage}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
