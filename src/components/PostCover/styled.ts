import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: ${theme.spacings.medium};
    background: ${theme.colors.lightGray};
  `}
`;
export const Img = styled.img`
  max-width: 100%;
  max-height: 615px;
`;
