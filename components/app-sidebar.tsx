"use client"

import * as React from "react"
import {
  Star,
  CreditCard,
  LayoutDashboard,
  TrendingUp,
  Clock,
  DollarSign,
  Percent,
  FileText,
  Receipt,
  Banknote,
  Package,
  ShoppingCart,
  ClipboardList,
  BarChart,
  Settings,
  Command,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Favorites",
      url: "/favorites",
      icon: Star,
    },
    {
      title: "Accounts Payable",
      url: "#",
      icon: CreditCard,
      items: [
        {
          title: "AP Dashboard",
          url: "/accounts-payable/ap-dashboard",
          isActive: true,
        },
        {
          title: "Vendor Performance",
          url: "/accounts-payable/vendor-performance",
          icon: TrendingUp,
        },
        {
          title: "Payment Aging B",
          url: "/accounts-payable/payment-aging-b",
          icon: Clock,
        },
        {
          title: "Cash Flow Impact",
          url: "/accounts-payable/cash-flow-impact",
          icon: DollarSign,
        },
        {
          title: "Early Discount Op",
          url: "/accounts-payable/early-discount-op",
          icon: Percent,
        },
        {
          title: "Transaction Report",
          url: "/accounts-payable/transaction-report",
          icon: FileText,
        },
      ],
    },
    {
      title: "Accounts Receivable",
      url: "#",
      icon: Receipt,
    },
    {
      title: "Banking & Cash",
      url: "#",
      icon: Banknote,
    },
    {
      title: "Inventory Management",
      url: "#",
      icon: Package,
    },
    {
      title: "Purchase Orders",
      url: "#",
      icon: ShoppingCart,
    },
    {
      title: "Order Entry",
      url: "#",
      icon: ClipboardList,
    },
    {
      title: "Financial Reporting",
      url: "#",
      icon: BarChart,
    },
    {
      title: "System Administration",
      url: "#",
      icon: Settings,
    },
  ],
  navSecondary: [],
  projects: [],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">ERP Financial</span>
                  <span className="truncate text-xs">Accounting System</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
