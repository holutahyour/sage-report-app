import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Package } from "lucide-react"
import { cn } from "@/lib/utils"
import { MoreHorizontal } from "lucide-react" // Added for menu icon

interface DashboardInventoryManagementProps extends React.ComponentProps<typeof Card> {
  className?: string
}

export function DashboardInventoryManagement({ className, ...props }: DashboardInventoryManagementProps) {
  return (
    <Card className={cn("rounded-xl shadow-md p-4 bg-white", className)} {...props}>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-sm font-bold">Inventory Management</CardTitle>
        <div className="flex items-center gap-2">
          <Package className="h-4 w-4 text-muted-foreground" />
          <MoreHorizontal className="h-4 w-4 text-muted-foreground" /> {/* Menu icon */}
        </div>
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
