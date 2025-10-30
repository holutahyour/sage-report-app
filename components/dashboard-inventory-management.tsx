import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Package } from "lucide-react"
import { cn } from "@/lib/utils"

interface DashboardInventoryManagementProps extends React.ComponentProps<typeof Card> {}

export function DashboardInventoryManagement({ className, ...props }: DashboardInventoryManagementProps) {
  return (
    <Card className={cn("", className)} {...props}>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-sm font-medium">Inventory Management</CardTitle>
        <Package className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Total Stock Value</p>
            <div className="text-2xl font-bold">$2.4M</div>
            <p className="text-xs text-green-500">+8.2%</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Total Items</p>
            <div className="text-2xl font-bold">12,847</div>
            <p className="text-xs text-green-500">+234</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Low Stock Items</p>
            <div className="text-2xl font-bold">15</div>
            <p className="text-xs text-red-500">+3</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Out of Stock</p>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-green-500">-1</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
