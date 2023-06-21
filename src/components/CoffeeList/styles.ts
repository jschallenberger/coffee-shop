import { styled } from "styled-components";

export const CoffeeListContainer = styled.main`
  width: 100%;
  display: flex;
  margin-top: 2rem;
  align-items: center;
  justify-content: center;
`;  

export const CoffeeListContent = styled.div`
  width: 100%;
  max-width: 1120px;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  flex-direction: column;
`;

export const CoffeeCard = styled.div`
  max-width: 256px;
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
    margin-top: -50px;
  }

  p{
    font-size: 0.9rem;
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

  &:first-child{
    margin-left: 0;
  }
`;