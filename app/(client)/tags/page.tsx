import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { Tag } from "@/app/utils/interface";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import React from "react";

async function getAllTags() {
  const query = `*[_type == "tag"]{
    name,
    _id,
    slug,
    "postCount":count(*[_type == "post" && references("tags", ^._id)])
}`;

  const tags = await client.fetch(query);
  return tags;
}

export const revalidate = 60;

const page = async () => {
  const tags: Tag[] = await getAllTags();
  console.log(tags, "tags");
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="w-9/12 max-w-[1200px] section-minheight">
          <Header title="#tags" tags={true} />
          {tags?.length > 0 &&
            tags?.map((tag) => (
              <Link key={tag?._id} href={`/tag/${tag?.slug?.current}`}>
                <div className="lekton700 text-sm txt-link-tag p-4 text-center">
                  #{tag?.name} ({tag?.postCount})
                </div>
              </Link>
            ))}
        </div>
        <div className="thefooter">
          <Footer title="FOOTER" tags={true} />
        </div>
      </div>
    </>
  );
};

export default page;
