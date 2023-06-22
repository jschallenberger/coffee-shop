import { CoffeeCard, CoffeeListContent, CoffeeListContainer, CoffeeCategory, BuyButton, Buy, BuyPrice, BuyInput, BuyActions } from "./styles";
import expresso from '../../assets/coffees/expresso.png'
import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";

export function CoffeeList(){
  return (
    <CoffeeListContainer>

      <h2>Nossos Cafés</h2>

      <CoffeeListContent>

        <CoffeeCard>
          <img width={120} height={120} src={expresso} alt="" />
          
          <div>
            <CoffeeCategory>Tradicional</CoffeeCategory>
            <CoffeeCategory>Tradicional</CoffeeCategory>
          </div>

          <h3>Expresso Tradicional</h3>
          <p>O tradicional café feito com água quente e grãos moídos</p>

          <Buy>
            <BuyPrice>R$&nbsp;
              <strong>9,90</strong>
            </BuyPrice>
            <BuyActions>
              <BuyInput>
                <Minus color="#8047F8" weight="bold"/>
                <span>0</span>
                <Plus color="#8047F8" weight="bold"/>
              </BuyInput>
              <BuyButton>
                <ShoppingCart size={ '22px' } weight="fill"/>
              </BuyButton>
            </BuyActions>
          </Buy>

        </CoffeeCard>

      </CoffeeListContent>
    </CoffeeListContainer>
  )
}