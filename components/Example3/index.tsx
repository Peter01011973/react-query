import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import Post from "../Post";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getPostsPage } from "../../APIServices";

const Example3: FC = () => {
  const [userId, setUserId] = useState("1");
  const {
    fetchNextPage, //function
    hasNextPage, // boolean
    isFetchingNextPage, // boolean
    data,
    status,
    error,
  } = useInfiniteQuery({
    queryKey: ["infinityPosts3", userId],
    queryFn: ({ pageParam = 1 }) =>
      getPostsPage(pageParam, userId ? { userId } : {}),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length ? allPages.length + 1 : undefined;
    },
  });
  const bottomRef = useRef(null);

  console.log("Hi");

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasNextPage) {
        void fetchNextPage();
      }
    });
    if (bottomRef.current) observer.observe(bottomRef.current);
    return () => {
      observer.disconnect();
    };
  }, [hasNextPage, bottomRef, fetchNextPage]);

  if (status === "error")
    return <p className="center">Error: {(error as Error).message}</p>;

  return (
    <div className="text-center">
      <h1 id="top">
        &infin; Infinite Query &amp; Scroll
        <br />
        &infin; Ex. 3 - React-Query
      </h1>

      <label htmlFor="filter">Filter - UserID:</label>
      <input
        type="number"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        min={1}
        max={10}
      />

      {data?.pages.map((page) =>
        page.map((post, i) => <Post key={post.id} post={post} />),
      )}

      <div className="center" ref={bottomRef}>
        {isFetchingNextPage ? (
          <p className="center">Loading More Posts...</p>
        ) : (
          <a href="#top">Back to Top</a>
        )}
      </div>
    </div>
  );
};

export default Example3;
