import methods from "micro-method-router";
import { NextApiRequest, NextApiResponse } from "next";

export default module.exports = methods({
  async patch(req: NextApiRequest, res: NextApiResponse) {
    return res.status(200).json({ me: "this is patch me" });
  },
  async get(req: NextApiRequest, res: NextApiResponse) {
    return res.status(200).json({ me: "this is get me" });
  },
});
