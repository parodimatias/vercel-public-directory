import methods from "micro-method-router";
import { NextApiRequest, NextApiResponse } from "next";
const propertiesList = ["address", "userName", "email"];
export default module.exports = methods({
  async patch(req: NextApiRequest, res: NextApiResponse) {
    const { property } = req.query;
    if (typeof property == "string") {
      if (propertiesList.includes(property)) {
        return res.status(200).json({ req: property });
      } else {
        res.status(405).json({ message: "Route not allowed" });
      }
    }
  },
});
