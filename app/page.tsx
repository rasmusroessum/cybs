"use client"

import type React from "react"

import { AppSidebar } from "@/components/sidebar"
import {
  SidebarProvider,
  SidebarTrigger,
  useSidebar
} from "@/components/ui/sidebar"
import { useEffect } from "react"

function ClickOutsideHandler({ children }: { children: React.ReactNode }) {
  const { setOpen, setOpenMobile, isMobile } = useSidebar()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element

      if (
        target &&
        !target.closest('[data-sidebar="sidebar"]') &&
        !target.closest('[data-sidebar="trigger"]') &&
        !target.closest('[data-sidebar="rail"]')
      ) {
        if (isMobile) {
          setOpenMobile(false)
        } else {
          setOpen(false)
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [setOpen, setOpenMobile, isMobile])

  return <>{children}</>
}

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <ClickOutsideHandler>
        <main className="flex-1 p-6">
          <div className="flex items-center gap-2 mb-6">
            <SidebarTrigger />
            <h1 className="text-2xl font-bold">Learning Dashboard</h1>
          </div>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Welcome to your learning hub! Use the sidebar to navigate through
              different topics and categories.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Programming</h3>
                <p className="text-sm text-muted-foreground">
                  Learn Python and basic programming concepts
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Business Analysis</h3>
                <p className="text-sm text-muted-foreground">
                  Master SWOT, TOWS, and RICA frameworks
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Hardware Components</h3>
                <p className="text-sm text-muted-foreground">
                  Understand CPU, RAM, motherboards and more
                </p>
              </div>
            </div>
          </div>
        </main>
      </ClickOutsideHandler>
    </SidebarProvider>
  )
}
