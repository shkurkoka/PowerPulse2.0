import styled from 'styled-components';


export const TimerTitle = styled.p`
font-size: 10px;
height: 14px;
color: var(--color-text);
;`

export const CountdownCircleTimer = styled.p`
font-size: 50px;
` ;

export const TimerButton = styled.button`
    width: 32px;
    height: 32px;
    background: var(--color-main-one);
    color: var(--color-text);
`; 

export const Calories = styled.h2`
font-size: 14px;
line-height: 1.3;
color: var(--color-text);
;`

export const ItemTitle = styled.h3`
font-size: 12px;
line-height: 1.5;
color: var(--color-text);
;`

export const ButtonConteiner = styled.div`
@media screen and (min-width: 768px) {
    grid-area: button;
    display: flex;
    justify-content: flex-end;
    @media screen and (min-width: 768px) {
      margin-right: 32px;
      margin-top: auto;
      margin-bottom: 48px;
    }
  }
`;

export const Button = styled.button`
color: var(--color-text);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  padding: 12px 32px;
  border-radius: 12px;
  background: var(--color-main-one);
  align-self: flex-start;
  &:hover {
    background: var(--color-main-one);
    color: var(--color-text);
  }
  `;
