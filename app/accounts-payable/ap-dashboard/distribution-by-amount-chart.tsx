"use client"

import * as React from "react"
import { Pie, PieChart, ResponsiveContainer, Tooltip, Cell } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

interface DistributionByAmountChartProps {
  data: { name: string; value: number; color: string }[]
}

const chartConfig = {
  value: {
    label: "Amount",
  },
} satisfies ChartConfig

export function DistributionByAmountChart({ data }: DistributionByAmountChartProps) {
  const totalAmount = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <ChartContainer config={chartConfig} className="h-60 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel formatter={(value, name) => [`$${(value as number).toLocaleString()}`, name as string]} />}
          />
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius={60}
            outerRadius={80}
            strokeWidth={2}
            paddingAngle={5}
            className="fill-current"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
