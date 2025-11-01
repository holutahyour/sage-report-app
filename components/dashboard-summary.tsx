import { AlertCircle, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function DashboardSummary() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2 mb-6">
      {/* Past Due Amount Card */}
      <Card className="bg-red-50 border-red-200 text-red-800">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-red-700">
            <AlertCircle className="h-4 w-4 text-red-600 inline-block mr-2" />
            Past Due Amount
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold text-red-800">$167,000</div>
          <p className="text-xs text-red-600">43 invoices overdue</p>
        </CardContent>
      </Card>

      {/* Average Days Outstanding Card */}
      <Card className="bg-yellow-50 border-yellow-200 text-yellow-800">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-yellow-700">
            <Clock className="h-4 w-4 text-yellow-600 inline-block mr-2" />
            Average Days Outstanding
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold text-yellow-800">34</div>
          <p className="text-xs text-yellow-600">Days average</p>
        </CardContent>
      </Card>

      {/* Recommended Actions Section */}
      <Card className="md:col-span-2 lg:col-span-2 mt-4">
        <CardHeader>
          <CardTitle className="text-lg font-semibold flex items-center">
            <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
            Recommended Actions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center p-3 rounded-lg bg-red-50 border border-red-200">
              <Badge variant="destructive" className="mr-3 bg-red-600">High Priority</Badge>
              <span className="text-red-800">Follow up on 90+ days overdue ($15,000)</span>
            </div>
            <div className="flex items-center p-3 rounded-lg bg-yellow-50 border border-yellow-200">
              <Badge variant="secondary" className="mr-3 bg-yellow-600 text-white">Medium</Badge>
              <span className="text-yellow-800">Review 61-90 days aging ($22,000)</span>
            </div>
            <div className="flex items-center p-3 rounded-lg bg-blue-50 border border-blue-200">
              <Badge variant="outline" className="mr-3 bg-blue-600 text-white border-blue-600">Info</Badge>
              <span className="text-blue-800">Monitor current aging trends</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
