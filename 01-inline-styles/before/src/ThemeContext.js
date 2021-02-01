import React from 'react'

export const ThemeContext = React.createContext({ theme: {} })
console.log(ThemeContext)
export function ThemeProvider(props) {
  console.log(props.children)
  return (
    <ThemeContext.Provider value={{ theme: props.theme || {} }}>
      {props.children}
    </ThemeContext.Provider>
  )
}
