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
      if (!req?.body?.recipeSlug) {
        res.status(400).json({ errorMessage: "Recipe slug was not provided" });
      }

      const recipe = await RecipeModel.where("slug")
        .equals(req.body.recipeSlug)
        .limit(1);
        
      res.send(recipe[0]);
    } else {
      res.status(401).json({ success: false });
    }
  } catch (error) {
    res.status(400).json({ success: false });
  }
});

export default handler;
