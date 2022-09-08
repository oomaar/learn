import Head from 'next/head';
import ArticleList from '../components/ArticleList';

export default function Home({ articles }) {
  // console.log("🚀 ~ file: index.js ~ line 4 ~ Home ~ articles", articles.news)
  const arr = articles.news;
  // console.log("🚀 ~ file: index.js ~ line 6 ~ Home ~ arr", arr)

  return (
    <div>
      <Head>
        <title>WebDev Newz</title>
        <meta name="keywords" content="Web Dev, NextJS, ReactJS" />
      </Head>

      <h1>next js</h1>
      <ArticleList arr={arr} />
    </div>
  )
}

export const getStaticProps = async () => {
  // const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const res = await fetch(`http://80.240.21.204:1337/news?skip=12&limit=10`);
  const articles = await res.json();

  return {
    props: {
      articles
    }
  }
}