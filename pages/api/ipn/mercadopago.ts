import methods from "micro-method-router";
import { NextApiRequest, NextApiResponse } from "next";

export default module.exports = methods({
  async post(req: NextApiRequest, res: NextApiResponse) {
    return res.status(200).json({ product: "Ipn mercado pago" });
  },
});
