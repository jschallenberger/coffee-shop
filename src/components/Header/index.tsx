import { ButtonLocation, ButtonShoppingCart, ButtonsContainer, HeaderContainer, HeaderContent } from "./styles";
import logo from "../../assets/logo.svg"
import { ShoppingCart, MapPin } from "@phosphor-icons/react";

export function Header(){
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="" />

        <ButtonsContainer>
          <ButtonLocation>
            <MapPin size={24} weight="fill"/>
            Porto Alegre, RS
          </ButtonLocation>

          <ButtonShoppingCart>
            <ShoppingCart size={24} weight="fill"/>
          </ButtonShoppingCart>
        </ButtonsContainer>
      </HeaderContent>
    </HeaderContainer>
  )
}