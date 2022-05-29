import methods from "micro-method-router";
import { NextApiRequest, NextApiResponse } from "next";

export default module.exports = methods({
  async get(req: NextApiRequest, res: NextApiResponse) {
    const { q, offset, limit } = req.query;
    return res.status(200).json({ q, offset, limit });
  },
});
