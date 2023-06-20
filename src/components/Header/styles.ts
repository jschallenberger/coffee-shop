import { css, styled } from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 2rem 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  flex-direction: row;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

interface ButtonProps{
  variant: "purple" | "yellow"
}

export const Button = styled.a<ButtonProps>`
  padding: 8px;
  border-radius: 6px;
  gap:4px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover{
    opacity: 0.8;
    cursor: pointer;
  }

  ${(props) => {
    if (props.variant === "purple"){
    return css`
    background: ${props=> props.theme['purple-light']};
    color: ${props=> props.theme['purple-dark']};`
    }
    if (props.variant === "yellow"){
      return css`
      background: ${props=> props.theme['yellow-light']};
      color: ${props=> props.theme['yellow-dark']};`
    }
  }
 } 
`;