import { cn } from "@/lib/utils"
import { X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface DashboardFilterDisplayProps extends React.ComponentPropsWithoutRef<"div"> {
  visibleCards: string[]
  setVisibleCards: (cards: string[]) => void
}

const cardNameMap: { [key: string]: string } = {
  ap: "Accounts Payable",
  ar: "Accounts Receivable",
  "bank-balances": "Bank Balances",
  "budget-performance": "Budget Performance",
  "inventory-management": "Inventory Management",
  "drilling-rig-fleet": "Drilling Rig Fleet",
  "purchase-orders": "Purchase Orders",
  "gross-margin": "Gross Margin",
  revenue: "Revenue",
  "profit-and-loss": "Profit and Loss",
  "operating-expenses": "Operating Expenses",
}

export function DashboardFilterDisplay({ visibleCards, setVisibleCards, className, ...props }: DashboardFilterDisplayProps) {
  const maxFilterSlots = 6
  const activeFilters = visibleCards.map(id => ({ id, name: cardNameMap[id] || id }))
  const placeholderSlots = Array(Math.max(0, maxFilterSlots - activeFilters.length)).fill(0)

  const handleRemoveFilter = (id: string) => {
    setVisibleCards(visibleCards.filter(cardId => cardId !== id))
  }

  return (
    <div className={cn("flex flex-wrap gap-2", className)} {...props}>
      {activeFilters.map(filter => (
        <Badge key={filter.id} variant="secondary" className="flex items-center gap-1 pr-1">
          {filter.name}
          <Button
            variant="ghost"
            size="icon"
            className="h-4 w-4 p-0 hover:bg-transparent"
            onClick={() => handleRemoveFilter(filter.id)}
          >
            <X className="h-3 w-3" />
          </Button>
        </Badge>
      ))}
      {placeholderSlots.map((_, index) => (
        <div key={`placeholder-${index}`} className="flex items-center justify-center rounded-md border border-dashed px-3 py-1.5 text-sm text-muted-foreground h-32">
          Select a metric to fill this slot
        </div>
      ))}
    </div>
  )
}
