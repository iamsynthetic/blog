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
      <div>tags</div>
      <div>
        {tags?.length > 0 &&
          tags?.map((tag) => (
            <Link key={tag?._id} href={`/tag/${tag?.slug?.current}`}>
              <div className="mb-2 p-2 text-sm lowercase border ">
                {tag?.name} ({tag?.postCount})
              </div>
            </Link>
          ))}
      </div>
    </>
  );
};

export default page;
