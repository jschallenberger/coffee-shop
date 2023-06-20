import { Button, ButtonsContainer, HeaderContainer, HeaderContent } from "./styles";
import logo from "../../assets/logo.svg"
import { ShoppingCart, MapPin } from "@phosphor-icons/react";

export function Header(){
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="" />

        <ButtonsContainer>
          <Button variant="purple" >
            <MapPin size={24} weight="fill"/>
            Porto Alegre, RS
          </Button>

          <Button variant="yellow">
            <ShoppingCart size={24} weight="fill"/>
          </Button>
        </ButtonsContainer>
      </HeaderContent>
    </HeaderContainer>
  )
}