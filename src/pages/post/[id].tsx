/* eslint-disable @next/next/no-img-element */
import { type NextPage } from "next";
import Head from "next/head";

const SinglePostPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Posts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen justify-center">
        <div>Post View</div>
      </main>
    </>
  );
};

export default SinglePostPage;
