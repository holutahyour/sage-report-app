"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { DollarSign, Phone, Mail, MapPin, CalendarIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"

interface VendorDetail {
  name: string;
  status: string;
  rank: number;
  netTerms: string;
  lastPaymentDate: string;
  totalOutstanding: number;
  outstandingPercentage: number;
  thisMonthAmount: number;
  invoicesCount: number;
  avgDays: number;
  phone: string;
  email: string;
  address: string;
}

interface VendorDetailsListProps {
  data: VendorDetail[];
}

export function VendorDetailsList({ data }: VendorDetailsListProps) {
  return (
    <div className="grid grid-cols-1 gap-4">
      {data.map((vendor, index) => (
        <Card key={index} className="p-4 shadow-none hover:shadow-lg transition-shadow duration-200">
          <CardContent className="p-0">
            {/* Header Section */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-lg font-medium">{vendor.name}</p>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">{vendor.status}</Badge>
                  <Badge variant="outline" className="text-gray-600">#{vendor.rank}</Badge>
                </div>
                <div className="flex items-center text-sm text-muted-foreground gap-4">
                  <p className="flex items-center gap-1">
                    <DollarSign className="h-3 w-3" /> {vendor.netTerms}
                  </p>
                  <p className="flex items-center gap-1">
                    <CalendarIcon className="h-3 w-3" /> Last payment: {vendor.lastPaymentDate}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold">${vendor.totalOutstanding.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">Total Outstanding</p>
              </div>
            </div>

            {/* Outstanding Amount Progress */}
            <div className="mb-4">
              <div className="flex items-center justify-between text-sm mb-1">
                <p className="font-medium">Outstanding Amount</p>
                <p>{vendor.outstandingPercentage}%</p>
              </div>
              <Progress value={vendor.outstandingPercentage} className="h-2" />
            </div>

            {/* Metric Cards Section */}
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="bg-gray-50 p-3 rounded-md text-center">
                <p className="text-lg font-bold">${vendor.thisMonthAmount.toLocaleString()}</p>
                <p className="text-xs text-muted-foreground">This Month</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-md text-center">
                <p className="text-lg font-bold">{vendor.invoicesCount}</p>
                <p className="text-xs text-muted-foreground">Invoices</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-md text-center">
                <p className="text-lg font-bold">{vendor.avgDays}</p>
                <p className="text-xs text-muted-foreground">Avg Days</p>
              </div>
            </div>

            {/* Contact Information Section */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground mb-6">
              <p className="flex items-center gap-1">
                <Phone className="h-3 w-3" /> {vendor.phone}
              </p>
              <p className="flex items-center gap-1">
                <Mail className="h-3 w-3" /> {vendor.email}
              </p>
              <p className="flex items-center gap-1">
                <MapPin className="h-3 w-3" /> {vendor.address}
              </p>
            </div>

            {/* Action Buttons Section */}
            <div className="flex gap-2">
              <Button variant="outline" size="sm">View Details</Button>
              <Button variant="outline" size="sm">Payment History</Button>
              <Button variant="outline" size="sm">Contact</Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
