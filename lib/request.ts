import { NextApiRequest } from "next";
export function getOffsetAndLimitFromReq(
  req: NextApiRequest,
  maxLimit,
  maxOffset
) {
  const queryLimit = parseInt((req.query.limit as string) || "0");
  const queryOffset = parseInt((req.query.offset as string) || "0");
  let limit = 10;

  if (queryLimit <= maxLimit && queryLimit > 0) {
    limit = queryLimit;
  } else if (queryLimit > maxLimit) {
    limit = maxLimit;
  }
  const offset = queryOffset <= maxOffset ? queryOffset : 0;
  return { limit, offset };
}
