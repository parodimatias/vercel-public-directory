import { productIndex } from "lib/algolia";
import { getOffsetAndLimitFromReq } from "lib/request";
import { NextApiRequest, NextApiResponse } from "next";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { offset, limit } = getOffsetAndLimitFromReq(req, 100, 10000);
  const { hits } = await productIndex.search(req.query.q as string, {
    offset,
    length: limit,
  });
  console.log(hits);
  console.log(hits.length);
  res.send({
    results: hits,
    pagination: {
      offset,
      limit,
      total: hits.length,
    },
  });
  // records.forEach(function (record) {
  //   console.log("Retrieved", record.get("Name"));
  // });

  // To fetch the next page of records, call `fetchNextPage`.
  // If there are more records, `page` will get called again.
  // If there are no more records, `done` will get called.
}
