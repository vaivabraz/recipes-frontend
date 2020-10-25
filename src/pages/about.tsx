import Head from "next/head";
import { Layout } from "../components";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Welcome to ABOUT page</h1>
      </main>

      <footer></footer>
    </Layout>
  );
}
