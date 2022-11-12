import { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth";
import nextConnect from "next-connect";

import middleware from "../../../middleware/database";
import { RecipeInterface, RecipeModel } from "../../../models";
import { authOptions } from "../auth/[...nextauth]";

const handler = nextConnect();
handler.use(middleware);

handler.post<NextApiRequest, NextApiResponse>(async (req, res) => {
  try {
    const session = await unstable_getServerSession(req, res, authOptions);
    if (session) {
        const dataStamp = Date.now();
        const slug =
          req.body.title.replace(/\s+/g, '-').toLowerCase() + '-' + dataStamp;
    
        const newRecipe: RecipeInterface = {
          ...req.body,
          slug: slug,
          author: session.user.username,
        };
        const recipe = new RecipeModel(newRecipe);
        await recipe.save((err) => {
          if (err) return res.status(400).send(err);
          console.log('item saved');
        });
    
        return res.status(201).json(recipe);
    } else {
      res.status(401).json({ success: false });
    }
  } catch (error) {
    res.status(400).json({ success: false });
  }
});

export default handler;
