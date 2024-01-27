import React from "react";
import HomeBg from "../components/HomeBg";
import { client } from "@/sanity/lib/client";
import { Post } from "../utils/interface";
import PostComponent from "../components/PostComponent";
import Header from "../components/Header";

async function getPosts() {
  const query = `*[_type == "post"]{
    title,
    slug,
    publishedAt,
    excerpt,
    tags[]-> {
      _id,
      slug,
      name
    }
  }`;
  const data = await client.fetch(query);
  return data;
}

export const revalidate = 60;

export default async function Home() {
  const posts: Post[] = await getPosts();
  console.log(posts, "posts");
  return (
    <>
      <Header title={posts[0].title} tags={true} />
      <div>
        {posts?.length > 0 &&
          posts?.map((post) => <PostComponent key={post?._id} post={post} />)}
      </div>
      <HomeBg title="articles" tags={false} />
    </>
  );
}
