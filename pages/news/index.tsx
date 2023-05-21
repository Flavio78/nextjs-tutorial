import { Articles } from '@/types';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import Link from 'next/link';

interface Props {
  articles: Articles;
}

const NewsArticleList = ({ articles }: Props) => {
  return (
    <div>
      <Link href="/">Back to home</Link>
      <h1>List of News Articles</h1>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <h2>
              {article.id} - {article.title} - {article.category}
            </h2>
          </div>
        );
      })}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  try {
    const response = await fetch('http://localhost:4000/news');
    const articles = (await response.json()) as Articles;
    return articles.length > 0
      ? {
          props: {
            articles,
          },
        }
      : { notFound: true };
  } catch (error) {
    return { notFound: true };
  }
};

export default NewsArticleList;
