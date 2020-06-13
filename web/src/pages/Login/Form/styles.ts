import styled from 'styled-components';
import {
  Input as BInput,
  Button as BButton
} from "reactstrap";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Input = styled(BInput)``;

export const Button = styled(BButton)`
  border: 1px solid #fff;
  background: linear-gradient(#FFAF5D, #FE845D);
  width: 100%;
`;
