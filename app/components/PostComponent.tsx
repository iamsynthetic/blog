import Link from "next/link";
import React from "react";
import { Post } from "../utils/interface";

interface Props {
  post: Post;
}

const PostComponent = ({ post }: Props) => {
  return (
    <div className="pb-5 pt-5 post-divider">
      <Link href={`/posts/${post?.slug?.current}`}>
        <h2 className="poppins700 text-2xl uppercase pb-2">{post?.title}</h2>
        <p className="lekton400">
          {new Date(post?.publishedAt).toDateString()}
        </p>
        <p className="lekton400 mb-3">{post?.excerpt}</p>
      </Link>
      <div className="flex justify-between items-center">
        <div className="flex space-between">
          {post?.tags?.map((tag) => (
            <Link key={tag?._id} href={`/tags/${tag?.slug?.current}`}>
              <div className="lekton700 text-sm txt-link-tag pr-4">
                #{tag?.name}
              </div>
            </Link>
          ))}
        </div>
        <Link className="" href={`/posts/${post?.slug?.current}`}>
          <div className="lekton700 text-sm txt-link">read this</div>
        </Link>
      </div>
    </div>
  );
};

export default PostComponent;

const cardStyle = `
mb-8 
p-4 
border 
border-gray-900 
rounded-md 
shadow-sm 
hover:shadow-md
hover:bg-purpl-500 
hover:text-white
hover:dark:bg-gray-950`;
