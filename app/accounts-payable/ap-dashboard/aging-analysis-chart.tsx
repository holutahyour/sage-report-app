"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

interface AgingAnalysisChartProps {
  data: { period: string; amount: number; color: string }[]
}

const chartConfig = {
  amount: {
    label: "Amount",
    color: "hsl(var(--chart-1))", // Default color, will be overridden by data
  },
} satisfies ChartConfig

export function AgingAnalysisChart({ data }: AgingAnalysisChartProps) {
  return (
    <ChartContainer config={chartConfig} className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="period"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            className="text-xs"
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value / 1000}K`}
            className="text-xs"
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel formatter={(value) => `$${value.toLocaleString()}`} />}
          />
          <Bar
            dataKey="amount"
            fill="currentColor"
            radius={8}
            className="[&_path]:data-[value=125000]:fill-[hsl(142.1_76.2%_36.3%)] [&_path]:data-[value=80000]:fill-[hsl(200_60%_50%)] [&_path]:data-[value=50000]:fill-[hsl(39_100%_50%)] [&_path]:data-[value=25000]:fill-[hsl(25_95%_50%)] [&_path]:data-[value=12000]:fill-[hsl(0_84.2%_60.2%)]"
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
