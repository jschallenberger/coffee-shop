import { CoffeeCard, CoffeeListContent, CoffeeListContainer, CoffeeCategory, BuyButton, Buy, BuyPrice, BuyInput, BuyActions, BuyActionsButton } from "./styles";
import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

 const baseAPIURL = 'https://jschallenberger.github.io';

export function CoffeeList(){
  interface Coffee{
    coffeeName: string;
    coffeeDescription: string;
    imageUrl: string;
    categories:string[];
    price: number;
  }
  const [coffeeList, setCoffeeList] = useState<Coffee[]>([]);

  async function loadCoffeeList(){
    const response = await fetch(baseAPIURL + '/coffees.json');
    const data = await response.json();

    setCoffeeList(data);
  }

  useEffect(()=>{
    loadCoffeeList();
  },[])

  return (
    <CoffeeListContainer>

      <h2>Nossos Cafés</h2>

      <CoffeeListContent>

        {
          coffeeList.map(coffee=>{
            return (
              <CoffeeCard key={coffee.coffeeName}>
                 
                <img width={120} height={120} src={baseAPIURL + coffee.imageUrl} alt="" />

                <div>
                {coffee.categories.map(coffeeCategory=>{
                  return <CoffeeCategory key={coffeeCategory}>{coffeeCategory}</CoffeeCategory>})
                }
                </div>

                <h3>{coffee.coffeeName}</h3>
                <p>{coffee.coffeeDescription}</p>

                <Buy>
                  <BuyPrice>R$&nbsp;
                    <strong>
                      {Intl.NumberFormat('pt-BR',{minimumSignificantDigits: 3}).format(coffee.price)}
                    </strong>
                  </BuyPrice>
                  <BuyActions>
                    <BuyInput>
                      <BuyActionsButton>
                        <Minus weight="bold"/>
                      </BuyActionsButton>
                      <span>0</span>
                      <BuyActionsButton>
                        <Plus weight="bold"/>
                      </BuyActionsButton>
                    </BuyInput>
                    <BuyButton>
                      <ShoppingCart size={ '22px' } weight="fill"/>
                    </BuyButton>
                  </BuyActions>
                </Buy>

              </CoffeeCard>
            )
          })
        }

      </CoffeeListContent>
    </CoffeeListContainer>
  )
}