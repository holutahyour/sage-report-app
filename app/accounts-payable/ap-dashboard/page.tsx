"use client"

import DashboardSummary from "@/components/dashboard-summary"
import { SummaryCard, SummaryDataItem } from "@/components/dashboard-summary-cards"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, CheckCircle2, Clock } from "lucide-react"; // Import necessary icons

import { AgingAnalysisChart } from "./aging-analysis-chart"

export default function ApDashboardPage() {
  const apSummaryData: SummaryDataItem[] = [
    {
      title: "TOTAL OUTSTANDING",
      value: "$34,700.00",
      percentage: "Live data",
      percentageColor: "text-red-500",
      icon: Clock,
      iconColor: "text-red-500",
      id: "total-outstanding",
    },
    {
      title: "DUE THIS WEEK",
      value: "$21,450.00",
      percentage: "Live data",
      percentageColor: "text-orange-500",
      icon: Clock,
      iconColor: "text-orange-500",
      id: "due-this-week",
    },
    {
      title: "APPROVED FOR PAYMENT",
      value: "$3,200.00",
      percentage: "Live data",
      percentageColor: "text-green-500",
      icon: CheckCircle2,
      iconColor: "text-green-500",
      id: "approved-for-payment",
    },
  ]

  const agingAnalysisData = [
    { period: "Current", amount: 125000, color: "hsl(142.1 76.2% 36.3%)" },
    { period: "1-30 Days", amount: 80000, color: "hsl(200 60% 50%)" },
    { period: "31-60 Days", amount: 50000, color: "hsl(39_100%_50%)" },
    { period: "61-90 Days", amount: 25000, color: "hsl(25_95%_50%)" },
    { period: "90+ Days", amount: 12000, color: "hsl(0_84.2%_60.2%)" },
  ]

  const agingBreakdownData = [
    { period: "Current (0-30 days)", invoices: 24, amount: "$125,000", percentage: "42.5%" },
    { period: "1-30 Days", invoices: 15, amount: "$80,000", percentage: "27.2%" },
    { period: "31-60 Days", invoices: 10, amount: "$50,000", percentage: "17.0%" },
    { period: "61-90 Days", invoices: 5, amount: "$25,000", percentage: "8.5%" },
    { period: "90+ Days", invoices: 3, amount: "$12,000", percentage: "4.1%" },
  ]

  return (
    <div className="flex flex-1 flex-col p-4 md:p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">AP Dashboard</h1>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {/* Main Dashboard Content Area */}
        <div className="grid grid-cols-1 gap-6">
          {/* Summary Cards */}
          <div className="grid gap-4 md:grid-cols-3">
            {apSummaryData.map((card, index) => (
              <SummaryCard
                key={index}
                title={card.title}
                value={card.value}
                percentage={card.percentage}
                percentageColor={card.percentageColor}
                icon={card.icon}
                iconColor={card.iconColor}
                className={
                  card.id === "total-outstanding"
                    ? "bg-red-100/50 border-red-200"
                    : card.id === "due-this-week"
                      ? "bg-orange-100/50 border-orange-200"
                      : "bg-green-100/50 border-green-200"
                }
              />
            ))}
          </div>

          {/* Aging Analysis Chart */}
          <Card className="col-span-full">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 border-b">
              <div className="flex items-center gap-2">
                <CalendarDays className="h-5 w-5 text-orange-500" />
                <div>
                  <CardTitle className="text-lg font-normal">Aging Analysis</CardTitle>
                  <p className="p-0 text-sm text-muted-foreground">
                    Outstanding payables by aging periods • Total: <span className="font-bold text-orange-500">$292,000</span>
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <Card className="shadow-none"> {/* New Card for the chart */}
                <CardContent className="p-4"> {/* Titleless CardContent for the chart */}
                  <AgingAnalysisChart data={agingAnalysisData} />
                </CardContent>
              </Card>
              {/* Aging Breakdown List - Each item in its own card */}
              <div className="grid grid-cols-1 gap-4 mt-4"> {/* Added mt-4 for spacing */}
                <CardHeader className="">
                  <CardTitle className="text-lg font-semibold">Aging Breakdown</CardTitle>
                </CardHeader>
                {agingBreakdownData.map((item, index) => (
                  <Card  key={index} className="p-4 shadow-none hover:shadow-lg transition-shadow duration-200">
                    <CardContent className="flex items-center justify-between p-0">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-md shadow-sm bg-green-100 flex items-center justify-center">
                          <span className="text-green-500 font-bold">$</span>
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
                    </CardContent>
                  </Card>
                ))}
              </div>
              {/* Dashboard Summary */}
              <div className="mt-6">
                <DashboardSummary />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
