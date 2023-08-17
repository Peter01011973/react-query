import React, { FC, useCallback, useRef } from "react";
import Post from "../Post";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getPostsPage } from "../../APIServices";

const Example2: FC = () => {
  const {
    fetchNextPage, //function
    hasNextPage, // boolean
    isFetchingNextPage, // boolean
    data,
    status,
    error,
  } = useInfiniteQuery({
    queryKey: ["infinityPosts2"],
    queryFn: ({ pageParam = 1 }) => getPostsPage(pageParam),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length ? allPages.length + 1 : undefined;
    },
  });

  console.log("Hi");

  const intObserver = useRef<IntersectionObserver | null>(null);
  const lastPostRef = useCallback(
    (elementDOM: Element) => {
      if (isFetchingNextPage) return;

      if (intObserver.current) intObserver.current.disconnect();

      intObserver.current = new IntersectionObserver((postEntries) => {
        console.log(postEntries);
        if (postEntries[0].isIntersecting && hasNextPage) {
          console.log("We are near the last post!");
          void fetchNextPage();
        }
      });

      if (elementDOM) intObserver.current.observe(elementDOM);
    },
    [isFetchingNextPage, hasNextPage, fetchNextPage],
  );

  if (status === "error")
    return <p className="center">Error: {(error as Error).message}</p>;

  return (
    <div className="scroll-smooth text-center">
      <h1 id="top">
        &infin; Infinite Query &amp; Scroll
        <br />
        &infin; Ex. 2 - React-Query
      </h1>
      {data?.pages.map((page) =>
        page.map((post, i) => {
          if (page.length === i + 1)
            return <Post key={post.id} post={post} ref={lastPostRef} />;

          return <Post key={post.id} post={post} />;
        }),
      )}

      <div className="center">
        {isFetchingNextPage ? (
          <p className="center">Loading More Posts...</p>
        ) : (
          <a href="#top">Back to Top</a>
        )}
      </div>
    </div>
  );
};

export default Example2;
