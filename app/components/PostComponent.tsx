import Link from "next/link";
import React from "react";
import { Post } from "../utils/interface";

interface Props {
  post: Post;
}

const PostComponent = ({ post }: Props) => {
  return (
    <div className={cardStyle}>
      <Link href={`/posts/${post?.slug?.current}`}>
        <h2 className="rubik600 text-2xl uppercase txt-title">{post?.title}</h2>
        <p>{new Date(post?.publishedAt).toDateString()}</p>
        <p>{post?.excerpt}</p>
      </Link>

      <div>
        {post?.tags?.map((tag) => (
          <Link key={tag?._id} href={`/tag/${tag?.slug?.current}`}>
            <div className="hover:bg-purple-700 text-white font-bold py-2 rounded">
              {tag?.name}
            </div>
          </Link>
        ))}
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
