import { styled } from "styled-components";

export const SummaryContainer = styled.section`
  width: 100%;
  padding: 5rem 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SummaryContent = styled.div`
  width: 100%;
  max-width: 1120px;

  display: flex;
  align-items: flex-start;
  justify-content: center;

  flex-direction: row;

  h1{
    color: ${props => props.theme["base-title"]};
    font-size: 3.3rem;
    line-height: 4rem;
    font-family: "Baloo 2";
  }

  span{
    display: block;
    margin-top: 1rem;
    font-size: 1.4rem;
    color: ${props => props.theme["base-subtitle"]};
  }

  ul{
    margin-top: 4rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    list-style-type: none;
    gap: 20px;

    li{
      display: flex;
      align-items: center;
      gap: 6px;
    }
  }
  
`;

interface BulletProps{
  variant: "yellow-dark" | "yellow" | "purple" | "base-text"
}

export const Bullet = styled.div<BulletProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
    width: 2rem;
    border-radius: 100%;
    color: ${props => props.theme["white"]};

    background: ${props => props.theme[props.variant]};
`;