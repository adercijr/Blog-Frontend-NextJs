import Head from 'next/head';
import { Comments } from '../../components/Comments';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Heading } from '../../components/Heading';
import { MainContainer } from '../../components/MainContainer';
import { PostContainer } from '../../components/PostContainer';
import  PostCover from '../../components/PostCover';
import { PostDetails } from '../../components/PostDetails';
import { SITE_NAME } from '../../config/app-config';
import { PostData } from '../../domain/posts/post';
import { removeHtml } from '../../utils/remove-html';
import Container from './styled'

export type PostProps = {
  post: PostData;
};

export const Post = ({ post }: PostProps) => {
  return (
    <>
    <Head>
      <title>
        {post.title} - {SITE_NAME}
      </title>
      <meta
        name="description"
        content={removeHtml(post.content).slice(0, 150)}
      />
    </Head>
    <Header />
    <Container>
      <MainContainer>
        <>
          <Heading>{post.title}</Heading>
          <PostCover
            alt={post.title}
            coverUrl={
              post.cover.formats.large.url ? post.cover.formats.large.url 
              : post.cover.formats.small.url }
          />
          <PostDetails
            date={post.created_at}
            author={post.author.name}
            category={post.category.name}
          />
          <PostContainer content={post.content} />
        </>
      </MainContainer>
      <Comments slug={post.slug} title={post.title} />
    </Container>
    <Footer />
  </>
  );
};
