import { GetStaticProps, GetStaticPropsContext } from 'next';
import Link from 'next/link';

interface NewsPreviewProps {
  data: string;
}

const NewsPreview = ({ data }: NewsPreviewProps) => {
  return (
    <div>
      <Link href="/">Back to Home</Link>
      <h2>News Preview Page</h2>
      <h1 className="content">{data}</h1>
    </div>
  );
};

export const getStaticProps: GetStaticProps<NewsPreviewProps> = async (
  context: GetStaticPropsContext
) => {
  console.log('Running getStaticProps', context.previewData);
  return {
    props: {
      data: context.preview
        ? 'List of draft articles'
        : 'List of published articles',
    },
  };
};

export default NewsPreview;
