import { Articles } from '@/types';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { ParsedUrlQuery } from 'querystring';

interface ArticleListByCategoryProps {
  articles: Articles;
  category: string;
}

const ArticleListByCategory = ({
  articles,
  category,
}: ArticleListByCategoryProps) => {
  return (
    <div>
      <Link href="/news">Back to news</Link>
      <h1>
        News for category <i>{category}</i>
      </h1>
      {articles.map((article) => (
        <div key={article.id}>
          <h2>
            {article.id} - {article.title} - {article.category}
          </h2>
          <p>{article.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ArticleListByCategory;

interface Params extends ParsedUrlQuery {
  category: string;
}

export const getServerSideProps: GetServerSideProps<
  ArticleListByCategoryProps,
  Params
> = async ({ params }) => {
  try {
    const { category } = params!;
    const response = await fetch(
      `http://localhost:4000/news?category=${category}`
    );
    const articles = (await response.json()) as Articles;
    return articles.length > 0
      ? {
          props: {
            category,
            articles,
          },
        }
      : { notFound: true };
  } catch (error: any) {
    console.error(error as Error);
    return { notFound: true };
  }
};
