import { useState } from "react"

let listeners = []
let memoryToasts = []

export function useToast() {
  const [toasts, setToasts] = useState(memoryToasts)

  const toast = ({ title, description }) => {
    const newToast = {
      id: Date.now(),
      title,
      description,
    }

    memoryToasts = [...memoryToasts, newToast]
    listeners.forEach((l) => l(memoryToasts))
  }

  listeners.push(setToasts)

  return { toast, toasts }
}