/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 96rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 3rem;
`;

export const Grid = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Category = styled.div`
  ${({ theme }) => css`
    text-align: center;
    font-size: ${theme.font.sizes.large};
    padding: ${theme.spacings.medium} 0;
    font-weight: bold;
  `}
`;

export const AllPostsLinks = styled.a`
  display: block;
  text-align: center;
  margin: ${({ theme }) => theme.spacings.large} 0;
`;