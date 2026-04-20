"use client"

import * as React from "react"
import * as ToastPrimitive from "@radix-ui/react-toast"
import { useToast } from "../../hooks/use-toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastPrimitive.Provider>
      {toasts.map(({ id, title, description }) => (
        <ToastPrimitive.Root key={id} className="p-4 shadow rounded bg-green-600 ">
          <div>
            <h4 className="font-bold">{title}</h4>
            <p>{description}</p>
          </div>
        </ToastPrimitive.Root>
      ))}
      <ToastPrimitive.Viewport className="fixed bottom-5 right-5 z-50" />
    </ToastPrimitive.Provider>
  )
}
