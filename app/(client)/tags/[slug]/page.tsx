import { client } from "@/sanity/lib/client";
import React from "react";
import { usePathname } from "next/navigation";
import { Post } from "../../../utils/interface";
import PostComponent from "@/app/components/PostComponent";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

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

  return (
    <>
      {posts?.length > 0 &&
        posts?.map((post) => (
          <div key={post?._id}>
            <div className="flex flex-col items-center">
              <div className="w-9/12 max-w-[1200px] section-minheight">
                <Header title="" tags={true} />
                <div>
                  {post.title}
                  <PostComponent key={post?._id} post={post} />
                </div>
              </div>
              <div className="thefooter">
                <Footer title="FOOTER" tags={true} />
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default page;
