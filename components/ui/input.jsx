import * as React from "react"

import { cn } from "@/lib/utils"

function Input({
  className,
  type,
  ...props
}) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-[48px] w-full rounded-md border border-white/10 focus:border-accent font-light px-4 py-5 text-base focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 outline-none",
        className
      )}
      {...props} />
  );
}

export { Input }
