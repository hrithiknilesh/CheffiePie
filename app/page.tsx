import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { 
  AlarmClockIcon,
  Target02Icon,
  Navigation05Icon
 } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react"

import './globals.css'

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    TrackIt
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Home</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <a href="#" className="group relative flex aspect-video flex-col justify-between rounded-xl border bg-muted/50 p-5 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:bg-muted hover:shadow-lg">
              <HugeiconsIcon icon={AlarmClockIcon} className="h-6 w-6 text-muted-foreground" />
              <span className="text-2xl font-semibold text-destructive">
                Cram
              </span>
            </a>
            <a href="#" className="group relative flex aspect-video flex-col justify-between rounded-xl border bg-muted/50 p-5 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:bg-muted hover:shadow-lg">
              <HugeiconsIcon icon={Target02Icon} className="h-6 w-6 text-muted-foreground" />
              <span className="text-2xl font-semibold">
                Strengthen
              </span>
            </a>
            <a href="#" className="group relative flex aspect-video flex-col justify-between rounded-xl border bg-muted/50 p-5 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:bg-muted hover:shadow-lg">
              <HugeiconsIcon icon={Navigation05Icon} className="h-6 w-6 text-muted-foreground" />
              <span className="text-2xl font-semibold">
                Explore
              </span>
            </a>
          </div>
          <div className="bg-muted/50 min-h-screen flex-1 rounded-xl md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
