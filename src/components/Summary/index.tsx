import { Bullet, SummaryContainer, SummaryContent } from "./styles";
import summaryLogo from "../../assets/summarylogo.svg"
import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";

export function Summary(){
  return (
   <SummaryContainer>
    <SummaryContent>
      <div>   

        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <span>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>

        <ul>
          <li>
            <Bullet variant="yellow-dark">
              <ShoppingCart size={16} weight="fill" />
            </Bullet>
            Compra simples e segura
          </li>
          <li>
            <Bullet variant="yellow">
              <Package size={16} weight="fill"/>
            </Bullet>
            Entrega rápida e rastreada
          </li>
          <li>
            <Bullet variant="base-text">
              <Timer size={16} weight="fill"/>
            </Bullet>
            O café chega fresquinho até você
          </li>
          <li>
            <Bullet variant="purple">
              <Coffee size={16} weight="fill"/>
            </Bullet>
            Embalagem mantém o café intacto
          </li>
        </ul>

      </div>

      <img src={summaryLogo} alt="" />
    </SummaryContent>
   </SummaryContainer> 
  )
}