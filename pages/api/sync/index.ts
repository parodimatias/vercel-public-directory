import { base } from "lib/airtable";
import { productIndex } from "lib/algolia";
import { getOffsetAndLimitFromReq } from "lib/request";
import { NextApiRequest, NextApiResponse } from "next";
export default function (req: NextApiRequest, res: NextApiResponse) {
  const { offset, limit } = getOffsetAndLimitFromReq(req, 100, 10000);

  base("Furniture")
    .select({
      pageSize: limit,
    })
    .eachPage(
      async function page(records, fetchNextPage) {
        const objects = records.map((record) => {
          return {
            objectID: record.id,
            ...record.fields,
          };
        });
        console.log(objects);
        try {
          const algoliaRes = await productIndex.saveObjects(objects);
          console.log("algoliaRes", algoliaRes);
        } catch (err) {
          console.log(err);
        }
        fetchNextPage();
      },
      function done(err) {
        if (err) {
          console.error(err);
          return;
        }
        res.send("terminado");
      }
    );
  // const sliced = list.slice(offset, offset + limit);
}
