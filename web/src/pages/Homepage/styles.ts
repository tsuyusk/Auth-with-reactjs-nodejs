import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 500px;
`;

export const Form = styled.form`
  margin: 10px;
`;

export const CardDeck = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
