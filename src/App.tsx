import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { CoffeeMarket } from "./pages/CoffeeMarket";
import { GlobalStyle } from "./styles/global";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <CoffeeMarket/>
    </ThemeProvider>
  )
}

