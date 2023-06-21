import { styled } from "styled-components";
import background from "../../assets/background.svg"
export const SummaryContainer = styled.section`
  width: 100%;
  padding: 5rem 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('${background}');
  box-shadow: 0 0 8px 8px #FAFAFA inset;
`;

export const SummaryContent = styled.div`
  width: 100%;
  max-width: 1120px;

  display: flex;
  align-items: flex-start;
  justify-content: center;

  flex-direction: row;

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