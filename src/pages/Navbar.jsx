import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../redux';
import { HomeIcon, Info, Zap, FolderOpen, Send, MoonStar, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Dock, DockIcon } from "@/components/magicui/dock";
import Particles from "@/components/magicui/particles";

const Navbar = () => {

  const isDarkMode = useSelector(state => state.isDarkMode)
  const dispatch = useDispatch()

  // Darkmode logic
  if (isDarkMode) {
    document.body.classList.add("dark", "bg-black", "text-white")
  } else {
    document.body.classList.remove("dark", "bg-black", "text-white")
  }

  // Navbar items
  const DATA = [
    { href: "#", icon: HomeIcon, label: "Home" },
    { href: "#", icon: Info, label: "About" },
    { href: "#", icon: Zap, label: "Skills" },
    { href: "#", icon: FolderOpen, label: "Projects" },
    { href: "#", icon: Send, label: "Contact" },
  ]

  return (
    <>
      <div className="fixed z-50 bottom-4 flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
        <TooltipProvider>
          <Dock direction="middle" className="bg-white dark:bg-black">
            {DATA.map((item) => (
              <DockIcon key={item.label}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href={item.href}
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "icon" }),
                        "size-12 rounded-full",
                      )}
                    >
                      <item.icon className="size-4" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{item.label}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            ))}
            <Separator orientation="vertical" className="h-full" />
            <DockIcon>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={() => dispatch(toggleTheme())}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full",
                    )}
                  >
                    {isDarkMode ? <MoonStar className="size-4" /> : <Sun className="size-4" />}
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Theme</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          </Dock>
        </TooltipProvider>
      </div>


      {/* Background of page */}
      <Particles
        className="absolute -z-10 inset-0"
        quantity={100}
        ease={80}
        color={isDarkMode ? "#ffffff" : "#000000"}
        refresh
      />

    </>
  )
}

export default Navbar
