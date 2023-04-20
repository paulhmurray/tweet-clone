import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import { type NextPage } from "next";
import Head from "next/head";

import { api } from "~/utils/api";

const CreatePostWizard = () => {
  const { user } = useUser();
  console.log(user);
  if (!user) return null;

  return (
    <div className="flex w-full gap-4">
      <img
        src={user.profileImageUrl}
        alt="Profile Image"
        className="h-16 w-16 rounded-full"
      />
      <input
        placeholder="What's on your mind?"
        className="ml-4 grow border-none bg-transparent outline-none"
      />
      <div>
        <SignOutButton />
      </div>
    </div>
  );
};

const Home: NextPage = () => {
  const user = useUser();

  const { data, isLoading } = api.posts.getAll.useQuery();

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>Something went wrong</div>;

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen justify-center">
        <div className="h-full w-full border-x border-slate-400 md:max-w-2xl">
          <div className="flex border-b border-slate-400 p-4">
            {!user.isSignedIn && (
              <div className="flex justify-center">
                <SignInButton />
              </div>
            )}
            {!!user.isSignedIn && <CreatePostWizard />}
          </div>
          <div className="flex flex-col">
            {data?.map((post) => (
              <div key={post.id} className="border-b border-slate-400 p-8">
                {post.content}
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
