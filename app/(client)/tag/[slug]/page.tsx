import { client } from "@/sanity/lib/client";
import React from "react";
import { Post } from "../../../utils/interface";
import PostComponent from "@/app/components/PostComponent";
import Header from "@/app/components/Header";
interface Params {
  params: {
    slug: string;
  };
}
async function getPostsByTag(tag: string) {
  const query = `
  *[_type == "post" && references(*[_type == "tag" && slug.current == "${tag}"]._id)]{
    title,
    slug,
    publishedAt,
    excerpt,
    tags[]-> {
      _id,
      slug,
      name
    }
  }
  `;
  const posts = await client.fetch(query);
  return posts;
}

export const revalidate = 60;

const page = async ({ params }: Params) => {
  const posts: Array<Post> = await getPostsByTag(params.slug);
  console.log(posts, "posts");
  return (
    <>
    <Header title={posts[0].title} tags={true} />
      <div>
        {posts?.length > 0 &&
          posts?.map((post) => <PostComponent key={post?._id} post={post} />)}
      </div>
    </>
  );
};

export default page;
