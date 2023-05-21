import { Articles } from '@/types';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import Link from 'next/link';

export interface ArticleListProps {
  articles: Articles;
  categories: string[];
}

const NewsArticleList = ({ articles, categories }: ArticleListProps) => {
  return (
    <div>
      <Link href="/">Back to home</Link>
      <h1>List of News Categories</h1>
      {categories.map((category) => (
        <Link key={category} href={`/news/${category}`}>
          {category}
        </Link>
      ))}
      <h1>List of News Articles</h1>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <h2>
              {article.id} - {article.title} - {article.category}
            </h2>
            <p>{article.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<ArticleListProps> = async (
  context: GetServerSidePropsContext
) => {
  try {
    const response = await fetch('http://localhost:4000/news');
    const articles = (await response.json()) as Articles;
    const categories = [
      ...new Set(articles.map((article) => article.category)),
    ];
    return articles.length > 0
      ? {
          props: {
            articles,
            categories,
          },
        }
      : { notFound: true };
  } catch (error) {
    return { notFound: true };
  }
};

export default NewsArticleList;
