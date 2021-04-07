import { Container, Img } from './styled';

export interface PostCoverProps {
  coverUrl: string;
  alt: string;
}

export default function PostCover({ coverUrl, alt }: PostCoverProps) {
  return (
    <Container>
      <Img src={coverUrl} alt={alt} />
    </Container>
  );
}