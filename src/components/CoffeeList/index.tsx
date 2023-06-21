import { CoffeeCard, CoffeeListContent, CoffeeListContainer, CoffeeCategory } from "./styles";
import expresso from '../../assets/coffees/expresso.png'

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
          <p>R$ <strong>9,90</strong></p>
        </CoffeeCard>
        <CoffeeCard>
          <img width={120} height={120} src={expresso} alt="" />
          
          <div>
            <CoffeeCategory>Tradicional</CoffeeCategory>
            <CoffeeCategory>Tradicional</CoffeeCategory>
          </div>

          <h3>Expresso Tradicional</h3>

          <p>O tradicional café feito com água quente e grãos moídos</p>
          <p>R$ <strong>9,90</strong></p>
        </CoffeeCard>
        <CoffeeCard>
          <img width={120} height={120} src={expresso} alt="" />
          
          <div>
            <CoffeeCategory>Tradicional</CoffeeCategory>
            <CoffeeCategory>Tradicional</CoffeeCategory>
          </div>

          <h3>Expresso Tradicional</h3>

          <p>O tradicional café feito com água quente e grãos moídos</p>
          <p>R$ <strong>9,90</strong></p>
        </CoffeeCard>
        <CoffeeCard>
          <img width={120} height={120} src={expresso} alt="" />
          
          <div>
            <CoffeeCategory>Tradicional</CoffeeCategory>
            <CoffeeCategory>Tradicional</CoffeeCategory>
          </div>

          <h3>Expresso Tradicional</h3>

          <p>O tradicional café feito com água quente e grãos moídos</p>
          <p>R$ <strong>9,90</strong></p>
        </CoffeeCard>
        <CoffeeCard>
          <img width={120} height={120} src={expresso} alt="" />
          
          <div>
            <CoffeeCategory>Tradicional</CoffeeCategory>
            <CoffeeCategory>Tradicional</CoffeeCategory>
          </div>

          <h3>Expresso Tradicional</h3>

          <p>O tradicional café feito com água quente e grãos moídos</p>
          <p>R$ <strong>9,90</strong></p>
        </CoffeeCard>
        <CoffeeCard>
          <img width={120} height={120} src={expresso} alt="" />
          
          <div>
            <CoffeeCategory>Tradicional</CoffeeCategory>
            <CoffeeCategory>Tradicional</CoffeeCategory>
          </div>

          <h3>Expresso Tradicional</h3>

          <p>O tradicional café feito com água quente e grãos moídos</p>
          <p>R$ <strong>9,90</strong></p>
        </CoffeeCard>
      </CoffeeListContent>
    </CoffeeListContainer>
  )
}