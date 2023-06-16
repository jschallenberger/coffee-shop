import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
     <h1>Coffee Sho</h1>
    </ThemeProvider>
  )
}

