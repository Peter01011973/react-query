// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const cursor = parseInt(req?.query?.cursor as string) || 0;

  const posts: any = async (cursor: number) => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_start=${cursor}&_limit=5`,
    );
    return res.data;
  };

  const data = await posts(cursor);

  console.log(data);
  const nextId = cursor <= 100 ? data[data.length - 1]?.id : null;
  const previousId = null;

  res.status(200).json({ data, nextId, previousId });
};
