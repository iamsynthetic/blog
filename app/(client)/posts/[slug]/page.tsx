import { urlForImage } from "@/sanity/lib/image";
import { Post } from "../../../utils/interface";
import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

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
      <div className="flex flex-col items-center">
        <div className="w-9/12 max-w-[1200px] section-minheight">
          <Header title={post?.title} tags={true} />
          <div>{new Date(post?.publishedAt).toDateString()}</div>
          <div className="txt-link-tag">
            {post?.tags?.map((tag) => (
              <Link key={tag?._id} href={`/tags/${tag.slug.current}`}>
                <span>#{tag.name} </span>
              </Link>
            ))}
          </div>
          <div className={richTextStyles}>
            <PortableText
              value={post?.body}
              components={myPortableTextComponents}
            />
          </div>
        </div>
        <div className="thefooter">
          <Footer title="FOOTER" tags={true} />
        </div>
      </div>
    </>
  );
};

export default page;

const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <div
        className="relative m-10 mx-auto"
        style={{ position: "relative", height: "500px" }}
      >
        <Image
          src={urlForImage(value)}
          alt="Post"
          quality={100}
          fill
          // width={100}
          // height={100}
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>
    ),
  },
  marks: {
    // Ex. 2: rendering a custom `link` annotation
    link: ({ value, children }: any) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <div className="txt-link underline">
          <a href={value?.href} target={target}>
            {children}
          </a>
        </div>
      );
    },
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
