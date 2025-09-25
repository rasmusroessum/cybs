"use client"

import * as React from "react"
import {
  Binary,
  BriefcaseBusiness,
  CodeXml,
  Computer,
  GlobeLock,
  Cpu,
  Fan,
  Zap,
  MemoryStick,
  CircuitBoard,
  TrendingUp,
  BarChart3,
  Target,
  ChevronRight,
  File,
  Database,
  Settings,
  Code,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Loader2
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarHeader
} from "@/components/ui/sidebar"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"

interface SidebarItem {
  title: string
  url?: string
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
  children?: SidebarItem[]
}

const items = [
  {
    title: "Programming",
    url: "#",
    icon: CodeXml,
    children: [
      {
        title: "Python",
        url: "#",
        icon: CodeXml,
        children: [
          {
            title: "Basic Stuff",
            url: "#",
            icon: File,
            children: [
              {
                title: "Variables",
                url: "#",
                icon: Code
              },
              {
                title: "Functions",
                url: "#",
                icon: Code
              },
              {
                title: "Classes",
                url: "#",
                icon: Code,
                children: [
                  {
                    title: "Inheritance",
                    url: "#",
                    icon: BookOpen
                  },
                  {
                    title: "Polymorphism",
                    url: "#",
                    icon: BookOpen
                  }
                ]
              }
            ]
          },
          {
            title: "Advanced Topics",
            url: "#",
            icon: Settings,
            children: [
              {
                title: "Decorators",
                url: "#",
                icon: Code
              },
              {
                title: "Generators",
                url: "#",
                icon: Code
              }
            ]
          }
        ]
      },
      {
        title: "JavaScript",
        url: "#",
        icon: CodeXml,
        children: [
          {
            title: "ES6 Features",
            url: "#",
            icon: File
          },
          {
            title: "React",
            url: "#",
            icon: File
          }
        ]
      }
    ]
  },
  {
    title: "Business Analysis",
    url: "#",
    icon: BriefcaseBusiness,
    children: [
      {
        title: "SWOT Analysis",
        url: "#",
        icon: TrendingUp,
        children: [
          {
            title: "Strengths",
            url: "#",
            icon: Target
          },
          {
            title: "Weaknesses",
            url: "#",
            icon: Target
          },
          {
            title: "Opportunities",
            url: "#",
            icon: Target
          },
          {
            title: "Threats",
            url: "#",
            icon: Target
          }
        ]
      },
      {
        title: "TOWS Matrix",
        url: "#",
        icon: BarChart3,
        children: [
          {
            title: "SO Strategies",
            url: "#",
            icon: Target
          },
          {
            title: "WO Strategies",
            url: "#",
            icon: Target
          }
        ]
      },
      {
        title: "RICA Framework",
        url: "#",
        icon: Target,
        children: [
          {
            title: "Responsibility",
            url: "#",
            icon: File
          },
          {
            title: "Information",
            url: "#",
            icon: File
          },
          {
            title: "Consultation",
            url: "#",
            icon: File
          },
          {
            title: "Accountability",
            url: "#",
            icon: File
          }
        ]
      }
    ]
  },
  {
    title: "Hardware Components",
    url: "#",
    icon: Computer,
    children: [
      {
        title: "CPU",
        url: "#",
        icon: Cpu,
        children: [
          {
            title: "Intel",
            url: "#",
            icon: Cpu,
            children: [
              {
                title: "Core i3",
                url: "#",
                icon: File
              },
              {
                title: "Core i5",
                url: "#",
                icon: File
              },
              {
                title: "Core i7",
                url: "#",
                icon: File
              },
              {
                title: "Core i9",
                url: "#",
                icon: File
              }
            ]
          },
          {
            title: "AMD",
            url: "#",
            icon: Cpu,
            children: [
              {
                title: "Ryzen 3",
                url: "#",
                icon: File
              },
              {
                title: "Ryzen 5",
                url: "#",
                icon: File
              },
              {
                title: "Ryzen 7",
                url: "#",
                icon: File
              },
              {
                title: "Ryzen 9",
                url: "#",
                icon: File
              }
            ]
          }
        ]
      },
      {
        title: "Fans",
        url: "#",
        icon: Fan,
        children: [
          {
            title: "Case Fans",
            url: "#",
            icon: Fan
          },
          {
            title: "CPU Coolers",
            url: "#",
            icon: Fan
          }
        ]
      },
      {
        title: "Power Supply",
        url: "#",
        icon: Zap,
        children: [
          {
            title: "Modular PSU",
            url: "#",
            icon: Zap
          },
          {
            title: "Non-Modular PSU",
            url: "#",
            icon: Zap
          }
        ]
      },
      {
        title: "RAM",
        url: "#",
        icon: MemoryStick,
        children: [
          {
            title: "DDR4",
            url: "#",
            icon: MemoryStick,
            children: [
              {
                title: "8GB",
                url: "#",
                icon: Database
              },
              {
                title: "16GB",
                url: "#",
                icon: Database
              },
              {
                title: "32GB",
                url: "#",
                icon: Database
              }
            ]
          },
          {
            title: "DDR5",
            url: "#",
            icon: MemoryStick,
            children: [
              {
                title: "16GB",
                url: "#",
                icon: Database
              },
              {
                title: "32GB",
                url: "#",
                icon: Database
              },
              {
                title: "64GB",
                url: "#",
                icon: Database
              }
            ]
          }
        ]
      },
      {
        title: "Motherboard",
        url: "#",
        icon: CircuitBoard,
        children: [
          {
            title: "ATX",
            url: "#",
            icon: CircuitBoard
          },
          {
            title: "Micro-ATX",
            url: "#",
            icon: CircuitBoard
          },
          {
            title: "Mini-ITX",
            url: "#",
            icon: CircuitBoard
          }
        ]
      }
    ]
  },
  {
    title: "Computer Architecture",
    url: "#",
    icon: Binary
  }
]

const EXPANDED_ITEMS_KEY = "sidebar-expanded-items"

function saveExpandedState(itemPath: string, isExpanded: boolean) {
  if (typeof window === "undefined") return

  try {
    const saved = localStorage.getItem(EXPANDED_ITEMS_KEY)
    const expandedItems = saved ? JSON.parse(saved) : {}
    expandedItems[itemPath] = isExpanded
    localStorage.setItem(EXPANDED_ITEMS_KEY, JSON.stringify(expandedItems))
  } catch (error) {
    console.error("Failed to save expanded state:", error)
  }
}

function loadExpandedState(itemPath: string): boolean {
  if (typeof window === "undefined") return true

  try {
    const saved = localStorage.getItem(EXPANDED_ITEMS_KEY)
    const expandedItems = saved ? JSON.parse(saved) : {}
    return expandedItems[itemPath] !== undefined
      ? expandedItems[itemPath]
      : true
  } catch (error) {
    console.error("Failed to load expanded state:", error)
    return true
  }
}

const SidebarControlContext = React.createContext<{
  expandAll: () => void
  collapseAll: () => void
} | null>(null)

function NavItem({
  item,
  level = 0,
  parentPath = ""
}: {
  item: SidebarItem
  level?: number
  parentPath?: string
}) {
  const itemPath = parentPath ? `${parentPath}.${item.title}` : item.title
  const [isLoading, setIsLoading] = React.useState(true)
  const [isOpen, setIsOpen] = React.useState(true)
  const hasChildren = item.children && item.children.length > 0

  React.useEffect(() => {
    const loadedState = loadExpandedState(itemPath)
    setIsOpen(loadedState)
    setIsLoading(false)
  }, [itemPath])

  React.useEffect(() => {
    if (!isLoading) {
      saveExpandedState(itemPath, isOpen)
    }
  }, [isOpen, itemPath, isLoading])

  const handleToggle = (newState: boolean) => {
    setIsOpen(newState)
  }

  const controlContext = React.useContext(SidebarControlContext)

  React.useEffect(() => {
    if (controlContext) {
      const originalExpandAll = controlContext.expandAll
      const originalCollapseAll = controlContext.collapseAll

      controlContext.expandAll = () => {
        setIsOpen(true)
        originalExpandAll()
      }

      controlContext.collapseAll = () => {
        setIsOpen(false)
        originalCollapseAll()
      }
    }
  }, [controlContext])

  if (isLoading && hasChildren) {
    return (
      <SidebarMenuItem>
        <SidebarMenuButton className="w-full whitespace-nowrap min-w-0">
          {item.icon && <item.icon className="size-4 flex-shrink-0" />}
          <span className="truncate flex-1 min-w-0">{item.title}</span>
          <Loader2 className="ml-auto size-4 flex-shrink-0 animate-spin" />
        </SidebarMenuButton>
      </SidebarMenuItem>
    )
  }

  if (!hasChildren) {
    return (
      <SidebarMenuItem>
        <SidebarMenuButton asChild>
          <a
            href={item.url}
            className="flex items-center gap-2 whitespace-nowrap min-w-0"
          >
            {item.icon && <item.icon className="size-4 flex-shrink-0" />}
            <span className="truncate flex-1 min-w-0">{item.title}</span>
          </a>
        </SidebarMenuButton>
      </SidebarMenuItem>
    )
  }

  if (level === 0) {
    return (
      <Collapsible open={isOpen} onOpenChange={handleToggle}>
        <SidebarMenuItem>
          <CollapsibleTrigger asChild>
            <SidebarMenuButton className="w-full whitespace-nowrap min-w-0">
              {item.icon && <item.icon className="size-4 flex-shrink-0" />}
              <span className="truncate flex-1 min-w-0">{item.title}</span>
              <ChevronRight
                className={`ml-auto size-4 flex-shrink-0 transition-transform ${
                  isOpen ? "rotate-90" : ""
                }`}
              />
            </SidebarMenuButton>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="overflow-x-auto">
              <SidebarMenuSub className="min-w-max">
                {item.children?.map((child: SidebarItem) => (
                  <NavNestedItem
                    key={child.title}
                    item={child}
                    level={level + 1}
                    parentPath={itemPath}
                  />
                ))}
              </SidebarMenuSub>
            </div>
          </CollapsibleContent>
        </SidebarMenuItem>
      </Collapsible>
    )
  }

  return (
    <Collapsible open={isOpen} onOpenChange={handleToggle}>
      <SidebarMenuSubItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuSubButton className="w-full whitespace-nowrap min-w-0">
            {item.icon && <item.icon className="size-4 flex-shrink-0" />}
            <span className="truncate flex-1 min-w-0">{item.title}</span>
            <ChevronRight
              className={`ml-auto size-4 flex-shrink-0 transition-transform ${
                isOpen ? "rotate-90" : ""
              }`}
            />
          </SidebarMenuSubButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="ml-4 border-l border-sidebar-border pl-4 space-y-1 overflow-x-auto min-w-max">
            <div className="flex flex-col space-y-1 min-w-max">
              {item.children?.map((child: SidebarItem) => (
                <NavNestedItem
                  key={child.title}
                  item={child}
                  level={level + 1}
                  parentPath={itemPath}
                />
              ))}
            </div>
          </div>
        </CollapsibleContent>
      </SidebarMenuSubItem>
    </Collapsible>
  )
}

function NavNestedItem({
  item,
  level,
  parentPath
}: {
  item: SidebarItem
  level: number
  parentPath: string
}) {
  const itemPath = `${parentPath}.${item.title}`
  const [isLoading, setIsLoading] = React.useState(true)
  const [isOpen, setIsOpen] = React.useState(true)
  const hasChildren = item.children && item.children.length > 0

  React.useEffect(() => {
    const loadedState = loadExpandedState(itemPath)
    setIsOpen(loadedState)
    setIsLoading(false)
  }, [itemPath])

  React.useEffect(() => {
    if (!isLoading) {
      saveExpandedState(itemPath, isOpen)
    }
  }, [isOpen, itemPath, isLoading])

  const handleToggle = (newState: boolean) => {
    setIsOpen(newState)
  }

  const controlContext = React.useContext(SidebarControlContext)

  React.useEffect(() => {
    if (controlContext) {
      const originalExpandAll = controlContext.expandAll
      const originalCollapseAll = controlContext.collapseAll

      controlContext.expandAll = () => {
        setIsOpen(true)
        originalExpandAll()
      }

      controlContext.collapseAll = () => {
        setIsOpen(false)
        originalCollapseAll()
      }
    }
  }, [controlContext])

  if (isLoading && hasChildren) {
    return (
      <div className="group/menu-sub-item relative">
        <div className="flex items-center gap-2 whitespace-nowrap min-w-0 w-full px-2 py-1.5 text-sm rounded-md">
          {item.icon && <item.icon className="size-4 flex-shrink-0" />}
          <span className="truncate flex-1 min-w-0">{item.title}</span>
          <Loader2 className="ml-auto size-4 flex-shrink-0 animate-spin" />
        </div>
      </div>
    )
  }

  if (!hasChildren) {
    return (
      <div className="group/menu-sub-item relative">
        <a
          href={item.url}
          className="flex items-center gap-2 whitespace-nowrap min-w-0 w-full px-2 py-1.5 text-sm rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
        >
          {item.icon && <item.icon className="size-4 flex-shrink-0" />}
          <span className="truncate flex-1 min-w-0">{item.title}</span>
        </a>
      </div>
    )
  }

  return (
    <Collapsible open={isOpen} onOpenChange={handleToggle}>
      <div className="group/menu-sub-item relative">
        <CollapsibleTrigger asChild>
          <button className="flex items-center gap-2 whitespace-nowrap min-w-0 w-full px-2 py-1.5 text-sm rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors">
            {item.icon && <item.icon className="size-4 flex-shrink-0" />}
            <span className="truncate flex-1 min-w-0">{item.title}</span>
            <ChevronRight
              className={`ml-auto size-4 flex-shrink-0 transition-transform ${
                isOpen ? "rotate-90" : ""
              }`}
            />
          </button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="ml-4 border-l border-sidebar-border pl-4 space-y-1 overflow-x-auto min-w-max">
            <div className="flex flex-col space-y-1 min-w-max">
              {item.children?.map((child: SidebarItem) => (
                <NavNestedItem
                  key={child.title}
                  item={child}
                  level={level + 1}
                  parentPath={itemPath}
                />
              ))}
            </div>
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  )
}

export function AppSidebar() {
  const [expandAllTrigger, setExpandAllTrigger] = React.useState(0)
  const [collapseAllTrigger, setCollapseAllTrigger] = React.useState(0)

  const expandAll = React.useCallback(() => {
    setExpandAllTrigger((prev) => prev + 1)
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem(EXPANDED_ITEMS_KEY)
        const expandedItems = saved ? JSON.parse(saved) : {}

        Object.keys(expandedItems).forEach((key) => {
          expandedItems[key] = true
        })

        localStorage.setItem(EXPANDED_ITEMS_KEY, JSON.stringify(expandedItems))
      } catch (error) {
        console.error("Failed to expand all:", error)
      }
    }
  }, [])

  const collapseAll = React.useCallback(() => {
    setCollapseAllTrigger((prev) => prev + 1)
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem(EXPANDED_ITEMS_KEY)
        const expandedItems = saved ? JSON.parse(saved) : {}

        Object.keys(expandedItems).forEach((key) => {
          expandedItems[key] = false
        })

        localStorage.setItem(EXPANDED_ITEMS_KEY, JSON.stringify(expandedItems))
      } catch (error) {
        console.error("Failed to collapse all:", error)
      }
    }
  }, [])

  const contextValue = React.useMemo(
    () => ({
      expandAll,
      collapseAll
    }),
    [expandAll, collapseAll]
  )

  return (
    <SidebarControlContext.Provider value={contextValue}>
      <Sidebar className="overflow-hidden h-full">
        <SidebarHeader>
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 whitespace-nowrap flex-shrink-0">
              <GlobeLock className="flex-shrink-0" />
              <span className="font-semibold">Learning Hub</span>
            </div>
            <div className="flex gap-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={expandAll}
                className="h-6 px-2 text-xs"
                title="Expand All"
              >
                <ChevronDown className="size-3" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={collapseAll}
                className="h-6 px-2 text-xs"
                title="Collapse All"
              >
                <ChevronUp className="size-3" />
              </Button>
            </div>
          </div>
        </SidebarHeader>
        <SidebarContent className="overflow-x-auto overflow-y-auto h-full flex-1">
          <SidebarGroup className="h-full">
            <SidebarGroupContent className="overflow-x-auto h-full">
              <SidebarMenu
                className="min-w-max h-full"
                key={`${expandAllTrigger}-${collapseAllTrigger}`}
              >
                {items.map((item) => (
                  <NavItem key={item.title} item={item} />
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </SidebarControlContext.Provider>
  )
}
