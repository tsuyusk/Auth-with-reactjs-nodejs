import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex: 0.5;
`;

export const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  

  border-radius: 0 49% 49% 0;
  
  background: linear-gradient(#FE845D, #FFAF5D);

  height: 100%;
  width: 100%;

  color: #fff;

  & > h1 {
    font-size: 30px;
  }

  @media screen and (max-width: 585px) {
    border-radius: 0 0 5% 5%;
  }
`;
