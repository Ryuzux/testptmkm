
import { GetStaticProps } from 'next';
import styles from '@/styles/Home.module.css'

interface Article {
  id: number;
  title: string;
  body: string;
}

interface ArticlesProps {
  articles: Article[];
}

export const getStaticProps: GetStaticProps<ArticlesProps> = async () => {

  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const articles: Article[] = await res.json();

  return {
    props: {
      articles,
    },
  };
}

const Articles: React.FC<ArticlesProps> = ({ articles }) => {
  return (
    <div className={styles.container}>
      <h1>Daftar Artikel</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id} className={styles.article}>
            <h2>{article.title}</h2>
            <p>{article.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Articles;
