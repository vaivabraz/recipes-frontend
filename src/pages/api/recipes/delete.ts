import { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth";
import nextConnect from "next-connect";

import middleware from "../../../middleware/database";
import { RecipeModel } from "../../../models";
import { authOptions } from "../auth/[...nextauth]";

const handler = nextConnect();
handler.use(middleware);

handler.post<NextApiRequest, NextApiResponse>(async (req, res) => {
  try {
    const session = await unstable_getServerSession(req, res, authOptions);
    if (session) {
      var query = {
          slug: req.body.slug,
          author: session.user.username,
        };

      const doc = await RecipeModel.findOneAndDelete(query);
      return res.send({
        deletedRecipe: doc,
      });
    } else {
      res.status(401).json({ success: false });
    }
  } catch (error) {
    return res.status(400).json({ success: false });
  }
});

export default handler;
