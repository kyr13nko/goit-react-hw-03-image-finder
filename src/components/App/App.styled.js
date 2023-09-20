import { styled } from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
`;

export const Image = styled.img`
  width: 100%;
  height: calc(100% - 20px);
`;
