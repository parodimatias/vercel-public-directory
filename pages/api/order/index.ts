import methods from "micro-method-router";
import { NextApiRequest, NextApiResponse } from "next";

export default module.exports = methods({
  async post(req: NextApiRequest, res: NextApiResponse) {
    const productId = req.query.productId;
    return res.status(200).json({ query: productId });
  },
});
