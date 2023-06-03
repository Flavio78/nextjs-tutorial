import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import Head from 'next/head';

interface BlogItemProps {
  title: string;
  description: string;
}

const BlogItem = ({ title, description }: BlogItemProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <h1 className="content">Article</h1>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<BlogItemProps> = async (
  context: GetServerSidePropsContext
) => {
  return {
    props: {
      title: 'Article Title',
      description: 'Article Description',
    },
  };
};

export default BlogItem;
