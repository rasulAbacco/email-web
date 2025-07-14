import * as React from "react"

import { cn } from "@/lib/utils"

export interface ChartProps extends React.HTMLAttributes<HTMLDivElement> {
  config: Record<
    string,
    {
      label: string
      color: string
    }
  >
}

export const Chart = React.forwardRef<HTMLDivElement, ChartProps>(({ className, config, ...props }, ref) => {
  return (
    <div className={cn("relative", className)} ref={ref} {...props}>
      {Object.entries(config).map(([key, value]) => (
        <div key={key} className="flex items-center space-x-2">
          <span className="block h-2 w-2 rounded-full" style={{ backgroundColor: value.color }} />
          <span className="text-sm font-medium">{value.label}</span>
        </div>
      ))}
    </div>
  )
})
Chart.displayName = "Chart"

export const ChartContainer = ({
  className,
  children,
  config,
}: {
  className?: string
  children: React.ReactNode
  config: Record<
    string,
    {
      label: string
      color: string
    }
  >
}) => {
  return (
    <div className={cn("relative", className)}>
      <Chart config={config} />
      {children}
    </div>
  )
}

export const ChartTooltipContent = ({
  payload,
  label,
  config,
}: {
  payload: any[]
  label: string
  config?: Record<
    string,
    {
      label: string
      color: string
    }
  >
}) => {
  if (!payload || payload.length === 0) {
    return null
  }

  return (
    <Card className="w-[200px]">
      <CardHeader>
        <CardTitle className="text-sm">{label}</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-1 py-2 text-nowrap">
        {payload.map((item, i) => {
          const dataKey = item.dataKey as string
          const value = item.value as string
          const color = item.color as string

          return (
            <div key={i} className="flex items-center gap-2">
              <span className="block h-2 w-2 rounded-full" style={{ backgroundColor: color }} />
              <p className="text-xs">
                {dataKey}: {value}
              </p>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}

export const ChartTooltip = ({ content, ...props }: any) => {
  return <Tooltip {...props} content={content ? content : <ChartTooltipContent />} />
}

import { Tooltip } from "@/components/ui/tooltip"
import { Card, CardContent, CardHeader, CardTitle } from "./card"
