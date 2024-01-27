import { urlForImage } from "@/sanity/lib/image";
import { Post } from "../../../utils/interface";
import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

interface Params {
  params: {
    slug: string;
  };
}

async function getPost(slug: string) {
  const query = `*[_type == "post" && slug.current == "${slug}"][0]{
    title,
    slug,
    publishedAt,
    excerpt,
    _id,
    body,
    tags[]-> {
      _id,
      slug,
      name
    }
  }`;

  const post = await client.fetch(query);
  return post;
}

export const revalidate = 60;

const page = async ({ params }: Params) => {
  const post: Post = await getPost(params?.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <div>{post?.title}</div>
      <div>{new Date(post?.publishedAt).toDateString()}</div>
      <div>
        {post?.tags?.map((tag) => (
          <Link key={tag?._id} href={`/tag/${tag.slug.current}`}>
            <span>#{tag.name}</span>
          </Link>
        ))}
      </div>
      <div className={richTextStyles}>
        <PortableText
          value={post?.body}
          components={myPortableTextComponents}
        />
      </div>
    </>
  );
};

export default page;

const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <Image src={urlForImage(value)} alt="Post" width={300} height={300} />
    ),
  },
};

const richTextStyles = `
mt-14
text-justify
mx-w-2xl
m-auto
prose-headings:my-0
prose-heading:text-2xl
prose-p:mb-0
prose-p:leading-7
prose-li:list-disc
prose-li:leading-7
prose-li:ml-4
`;
