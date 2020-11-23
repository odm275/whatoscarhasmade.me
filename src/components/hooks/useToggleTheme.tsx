import { useEffect, useState } from "react"

/* 
    1) check local storage to see if dark or light theme is on
    2) Set initial state
    3) 
*/
export enum COLOR {
  DARK = "dark",
  LIGHT = "light",
}

export function useToggleTheme(color: COLOR) {
  useEffect(() => {
    const checkHTMLElement = document.querySelector("html")
    if (checkHTMLElement === null) {
      throw new Error("html tags were not found")
    }
    if (color === COLOR.DARK) {
      checkHTMLElement.classList.add(color)
    } else {
      checkHTMLElement.classList.remove(color)
    }
    localStorage.theme = color
  }, [color])
}
