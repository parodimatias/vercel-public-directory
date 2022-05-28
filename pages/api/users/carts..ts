import methods from "micro-method-router";
import { NextApiRequest, NextApiResponse } from "next";

export default methods({
  post(req: NextApiRequest, res: NextApiResponse) {
    const user = Users.findByPK();

    const cart = user.cart;
    cart.push(req.body.id)
    user.update({
      cart
  })

});
