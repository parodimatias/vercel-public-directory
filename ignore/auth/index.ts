import methods from "micro-method-router";
import { NextApiRequest, NextApiResponse } from "next";

export default module.exports = methods({
  async post(req: NextApiRequest, res: NextApiResponse) {
    console.log("hola");
    return res
      .status(200)
      .json({ auth: "this is auth", email: req.body.email });
  },
});
