import { styled } from "styled-components";

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

export const Button = styled.a`
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
`;

export const ButtonLocation = styled(Button)`
  background: ${props=> props.theme['purple-light']};
  color: ${props=> props.theme['purple-dark']};
`;

export const ButtonShoppingCart = styled(Button)`
  background: ${props=> props.theme['yellow-light']};
  color: ${props=> props.theme['yellow-dark']};
`;