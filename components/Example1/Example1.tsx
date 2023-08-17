import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { usePosts } from "../../hooks/usePosts";
import Post from "../Post";

const Example1: FC = () => {
  const [pageNum, setPageNum] = useState(1);
  const { isLoading, isError, error, results, hasNextPage } = usePosts(pageNum);

  useEffect(() => {
    console.log(1);
  }, []);

  const intObserver = useRef<any>(null);
  const lastPostRef = useCallback(
    (post: Post) => {
      if (isLoading) return;

      if (intObserver.current) intObserver.current.disconnect();

      intObserver.current = new IntersectionObserver((posts) => {
        if (posts[0].isIntersecting && hasNextPage) {
          console.log("We are near the last post!");
          setPageNum((prev) => prev + 1);
        }
      });

      if (post) intObserver.current.observe(post);
    },
    [isLoading, hasNextPage],
  );

  if (isError) return <p className="center">Error: {error.message}</p>;

  return (
    <div className="scroll-smooth text-center">
      <h1 id="top">
        &infin; Infinite Query &amp; Scroll
        <br />
        &infin; Ex. 1 - React only
      </h1>
      {isLoading && <p className="center">Loading More Posts...</p>}
      {results && (
        <>
          {results.map((post, i) => {
            if (results.length === i + 1)
              return <Post key={post.id} post={post} ref={lastPostRef} />;

            return <Post key={post.id} post={post} />;
          })}
        </>
      )}
      <p className="center">
        <a href="#top">Back to Top</a>
      </p>
    </div>
  );
};

export default Example1;
