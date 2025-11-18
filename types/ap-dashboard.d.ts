export interface ApSummaryDataItem {
  title: string;
  value: string;
  percentage: string;
  percentageColor: string;
  icon: any; // Consider a more specific type if possible, e.g., IconComponent
  iconColor: string;
  id: string;
}

export interface AgingAnalysisDataItem {
  period: string;
  amount: number;
  color: string;
}

export interface AgingBreakdownDataItem {
  period: string;
  invoices: number;
  amount: string;
  percentage: string;
}

export interface DistributionByAmountDataItem {
  name: string;
  value: number;
  color: string;
}

export interface OutstandingAmountsDataItem {
  name: string;
  amount: number;
  color: string;
}

export interface VendorDetailsDataItem {
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
