import { Post } from "../models/post";
import { getPostsPage } from "../APIServices";
import { useEffect, useState } from "react";

interface UsePosts {
  results: Post[];
  isLoading: boolean;
  isError: boolean;
  error: { message?: string };
  hasNextPage: boolean;
}

export const usePosts = (pageNumber: number = 1): UsePosts => {
  const [results, setResults] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<{ message?: string }>({});
  const [hasNextPage, setHasNextPage] = useState(false);

  useEffect(() => {
    setError({});
    setIsError(false);
    setIsLoading(true);

    console.log(pageNumber, "Fuck");

    const controller = new AbortController();
    const { signal } = controller;

    getPostsPage(pageNumber, { signal })
      .then((data) => {
        setResults((prev) => [...prev, ...data]);
        setHasNextPage(Boolean(data.length));
      })
      .catch((error) => {
        if (signal.aborted) return;
        setIsError(true);
        setError({ message: error.message });
      })
      .finally(() => {
        setIsLoading(false);
      });

    return () => controller.abort();
  }, [pageNumber]);

  return { results, isError, hasNextPage, isLoading, error };
};
