import Head from 'next/head';
import { Container, Category, Grid } from './styles';
import { PostData } from '../../domain/posts/post';
import { Header } from '../../components/Header';
import { MainContainer } from '../../components/MainContainer';
import { PostCard } from '../../components/PostCard';
import { Footer } from '../../components/Footer';
import { SITE_NAME } from '../../config/app-config';

export type HomePageProps = {
  posts: PostData[];
  category?: string;
};

export default function HomePage({ posts, category }: HomePageProps) {
  return (
    <Grid>
      <Head>
        <title>{SITE_NAME}</title>
        <meta name="description" content="Blog pessoal de tecnologia" />
      </Head>
      <Header />
      {category && <Category> Categoria: {category}</Category>}
      <MainContainer>
        <Container>
          {posts.map((post) => {
            return (
              <PostCard
                cover={post.cover.formats.small.url}
                slug={post.slug}
                title={post.title}
                key={post.id}
              />
            );
          })}
        </Container>
      </MainContainer>
      <Footer />
    </Grid>
  );
}