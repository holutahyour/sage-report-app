import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign } from "lucide-react"
import { cn } from "@/lib/utils"

interface SummaryCardProps extends React.ComponentProps<typeof Card> {
  title: string
  value: string
  percentage: string
  percentageColor: string
  icon?: React.ElementType
  iconColor?: string
}

function SummaryCard({
  title,
  value,
  percentage,
  percentageColor,
  icon: Icon,
  iconColor,
  className,
  ...props
}: SummaryCardProps) {
  return (
    <Card className={cn("rounded-xl shadow-md p-4 bg-white", className)} {...props}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-bold">{title}</CardTitle>
        {Icon && <Icon className={`h-4 w-4 text-muted-foreground ${iconColor}`} />}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className={`text-xs ${percentageColor}`}>{percentage}</p>
      </CardContent>
    </Card>
  )
}

export function DashboardSummaryCards() {
  const summaryData = [
    {
      title: "Cash on Hand",
      value: "$145,320",
      percentage: "+5.2%",
      percentageColor: "text-green-500",
      icon: DollarSign,
      iconColor: "text-blue-500",
    },
    {
      title: "Outstanding AR",
      value: "$89,450",
      percentage: "-12.1%",
      percentageColor: "text-red-500",
      icon: DollarSign,
      iconColor: "text-green-500",
    },
    {
      title: "Outstanding AP",
      value: "$34,780",
      percentage: "+8.4%",
      percentageColor: "text-green-500",
      icon: DollarSign,
      iconColor: "text-yellow-500",
    },
    {
      title: "Net Income",
      value: "$67,890",
      percentage: "+15.3%",
      percentageColor: "text-green-500",
      icon: DollarSign,
      iconColor: "text-purple-500",
    },
  ]

  return (
    <>
      {summaryData.map((card, index) => (
        <SummaryCard key={index} {...card} />
      ))}
    </>
  )
}
