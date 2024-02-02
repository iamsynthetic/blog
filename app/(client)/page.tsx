import React from "react";
import HomeBg from "../components/HomeBg";
import { client } from "@/sanity/lib/client";
import { Post } from "../utils/interface";
import PostComponent from "../components/PostComponent";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
  return (
    <>
      <div className="section-minheight">
        <Header title="AD WORDS" tags={true} />
        <div className="flex flex-col items-center">
          <div className="w-9/12 max-w-[1200px]">
            {posts?.length > 0 &&
              posts?.map((post) => (
                <PostComponent key={post?._id} post={post} />
              ))}
          </div>
        </div>
        {/* <HomeBg title="articles" tags={false} /> */}
      </div>
      <div className="thefooter">
        <Footer title="FOOTER" tags={true} />
      </div>
    </>
  );
}
