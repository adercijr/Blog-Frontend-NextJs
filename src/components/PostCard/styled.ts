import styled, { css } from 'styled-components';

export const Container = styled.div`
  transition: opacity 300ms ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

export const PostCardCover = styled.div`
  margin-bottom: ${({ theme }) => theme.spacings.small};
  background: ${({ theme }) => theme.colors.darkGray};
  display: flex;
  justify-content: center;
  height: 200px;
  align-items: center;
  img {
    display: block;
    max-height: 200px;
    max-width: 100%;
  }
`;

export const PostCardHeading = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};

    a {
      color: ${theme.colors.darkGray};
    }
  `}
`;
