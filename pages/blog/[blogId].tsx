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
      <h2>
        Env User {process.env.DB_USER} Password {process.env.DB_PASSWORD}
      </h2>
      <h2>Analytics id: {process.env.NEXT_PUBLIC_ANALYTICS_ID}</h2>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<BlogItemProps> = async (
  context: GetServerSidePropsContext
) => {
  const user = process.env.DB_USER;
  const password = process.env.DB_PASSWORD;
  console.log('user, password', user, password);
  return {
    props: {
      title: 'Article Title',
      description: 'Article Description',
    },
  };
};

export default BlogItem;
