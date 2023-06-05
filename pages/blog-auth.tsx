import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { Session } from 'next-auth';
import { getSession, useSession } from 'next-auth/react';

interface BlogAuthProps {
  session: Session | null;
  data: string;
}

const BlogAuth = ({ data }: BlogAuthProps) => {
  const { data: session, status } = useSession();
  console.log('session, status', session, status);
  return <h1>Blog Auth Page - {data}</h1>;
};

export default BlogAuth;

export const getServerSideProps: GetServerSideProps<BlogAuthProps> = async (
  context: GetServerSidePropsContext
) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: `/api/auth/signin?callbackUrl=http://localhost:3000/blog-auth`,
        permanent: false,
      },
    };
  } else {
    return {
      props: {
        session,
        data: session ? 'List of 100 personalized blogs' : 'List of free blogs',
      },
    };
  }
};
