import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 100vh;

  @media screen and (max-width: 585px) {
    display: flex;
    flex-direction: column;
  }
`;
