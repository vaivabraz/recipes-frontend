import Head from "next/head";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";

export default function Recipe() {
  const router = useRouter();
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>Recipe id: {router.query.id}</p>
      </main>

      <footer></footer>
    </Layout>
  );
}

Recipe.getInitialProps = ({ query }) => {
  const posts = [];
  return {
    post: posts[query.id],
  };
};
