import { useEffect, useState } from "react"
import { useChatConfigStore } from "../store/chatConfigStore"

export function useColorMode(): "light" | "dark" {
  const [colorMode, setColorMode] = useState<"light" | "dark">("dark")
  const selectedColorMode = useChatConfigStore((state) => state.config?.colorMode ?? "auto")

  useEffect(() => {
    if (selectedColorMode === "auto") {
      const darkQuery = window.matchMedia("(prefers-color-scheme: dark)")
      const listener = (e: MediaQueryListEvent) => {
        setColorMode(e.matches ? "dark" : "light")
      }

      darkQuery.addEventListener("change", listener)
      setColorMode(darkQuery.matches ? "dark" : "light")

      return () => {
        darkQuery.removeEventListener("change", listener)
      }
    } else {
      setColorMode(selectedColorMode)
    }
  }, [selectedColorMode])

  return colorMode
}