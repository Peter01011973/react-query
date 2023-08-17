import React, { forwardRef } from "react";
import { Post } from "../../models/post";

interface PostProps {
  post: Post;
}

const Post = forwardRef<any, PostProps>(({ post }, ref) => {
  const postBody = (
    <>
      <h2 className="text-lg font-bold">{post.title}</h2>
      <p>{post.body}</p>
      <p>Post ID: {post.id}</p>
    </>
  );

  const content = ref ? (
    <div
      className="w-[700px] rounded-20px shadow-2xl bg-red-200 mb-3 p-4 flex flex-col gap-3"
      ref={ref}
    >
      {postBody}
    </div>
  ) : (
    <article className="w-[700px] rounded-20px shadow-2xl bg-red-200 mb-3 p-4 flex flex-col gap-3">
      {postBody}
    </article>
  );

  return content;
});

Post.displayName = "Post;";

export default Post;
