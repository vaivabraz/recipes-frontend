import { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth";
import nextConnect from 'next-connect';

import middleware from '../../../middleware/database';
import { RecipeModel } from "../../../models";
import { authOptions } from "../auth/[...nextauth]";

const handler = nextConnect();
handler.use(middleware);

handler.get<NextApiRequest, NextApiResponse>(async (req, res) => {
    try {
        const session = await unstable_getServerSession(req, res, authOptions);
        if (session) {
          const userRecipes = await RecipeModel
            .where('author')
            .equals(session.user.username)
            .sort({ _id: -1 })
            .limit(20);

          res.send(userRecipes);
        }


        else {
          res.status(401).json({ success: false })
        }
      } catch (error) {
        res.status(400).json({ success: false })
      }
});

export default handler;