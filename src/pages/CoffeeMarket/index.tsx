import { CoffeeList } from "../../components/CoffeeList";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";

export function CoffeeMarket(){
  return (
    <div>
      <Header/>
      <Summary/>
      <CoffeeList/>
    </div>
  )
}