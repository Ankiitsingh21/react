import { createContext } from "react"

export const counterContext = createContext({
        count: 0,
  setCount: () => {},
});