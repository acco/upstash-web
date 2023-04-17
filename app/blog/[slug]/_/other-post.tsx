import NextLink from "next/link";
import type { Post } from "contentlayer/generated";
import cx from "@/utils/cx";
import Balancer from "react-wrap-balancer";

type Props = {
  post?: Post;
  align?: "left" | "right";
};

export default function OtherPostCard({ post, align = "left" }: Props) {
  return post ? (
    <NextLink
      href={`/blog/${post.slug}`}
      className={cx(
        "flex flex-col px-6 py-5 text-left",
        "cursor-pointer rounded-xl bg-zinc-800",
        "hover:bg-emerald-950 hover:text-emerald-200",
        align === "right" && "text-right"
      )}
    >
      <span className="text-sm uppercase opacity-40">
        {align === "left" ? "Previous post" : "Next post"}
      </span>
      <h4 className="mt-1 font-display text-2xl font-medium leading-snug">
        <Balancer>{post.title}</Balancer>
      </h4>
    </NextLink>
  ) : (
    <div className="flex rounded-xl bg-zinc-900" />
  );
}
