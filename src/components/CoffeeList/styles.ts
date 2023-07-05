import { styled } from "styled-components";

export const CoffeeListContainer = styled.main`
  width: 100%;
  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;  

export const CoffeeListContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin-top: 2rem;
  padding-bottom: 2rem;
  
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
`;

export const CoffeeCard = styled.div`
  width: 256px;
  height: 310px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;

  background-color: ${props => props.theme["base-card"]};
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;

  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;
  padding-left: 20px;
  padding-right: 20px;

  img{
    position:relative;
    margin-top: -30px;
  }

  p{
    text-align: center;
    font-size: 0.9rem;
    line-height: 130%;
    color: ${props=> props.theme["base-label"]};
  }
`;

export const CoffeeCategory = styled.span`
  padding: 0.25rem 0.5rem;
  background-color: ${props => props.theme["yellow-light"]};
  border-radius: 100px;
  font-size: 10px;
  font-weight: bold;
  color: ${props => props.theme["yellow-dark"]};
  margin-left: 4px;

  &:first-child {
    margin-left: 0;
  }
`;

export const Buy = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 24px;
`;

export const BuyButton = styled.a`
  padding: 8px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${props=> props.theme['purple-dark']};
  color: ${props=> props.theme['white']};

  &:hover{
    opacity: 0.8;
    cursor: pointer;
  }
  
  svg{
    line-height: 0;
  }
`;

export const BuyPrice = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme["base-text"]};

  strong{
    font-weight: extrabold;
    font-size: 24px;
    font-family: "Baloo 2";
  }
`;



export const BuyActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 8px;
  `;

export const BuyActionsButton = styled.button`
    text-decoration: none;
    background-color: inherit;
    outline: none;
    line-height: 0;
    border: 0;
    color: ${props => props.theme["purple"]};
    
    &:hover{
      cursor: pointer;
    }
    &:focus{
      box-shadow: 0 0 0 0;
    }
  `;

export const BuyInput = styled.div`
    width: 72px;
    height: 38px;
    background: ${props => props.theme["base-button"]};
  
    border-radius: 6px;
  
    display: flex;
    align-items: center;
    justify-content: space-around;
  `;