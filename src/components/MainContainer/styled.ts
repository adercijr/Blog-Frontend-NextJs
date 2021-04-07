import styled, { css } from 'styled-components';

export const Container = styled.main`
  width: 100%;
  height: 100%;
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    margin: 0 auto;
    padding: ${theme.spacings.medium};
  `};
`;
