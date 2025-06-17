 "use client"

import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        `
          peer
          inline-flex h-6 w-11 shrink-0 items-center
          rounded-full border border-transparent
          transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50
          disabled:cursor-not-allowed disabled:opacity-50
          data-[state=checked]:bg-blue-500
          data-[state=unchecked]:bg-gray-300
        `,
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          `
            pointer-events-none block h-5 w-5 rounded-full bg-white shadow transition-transform
            data-[state=checked]:translate-x-5
            data-[state=unchecked]:translate-x-1
          `
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
