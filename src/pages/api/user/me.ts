import { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth";
import nextConnect from 'next-connect';

import middleware from '../../../middleware/database';
import { UserModel } from "../../../models";
import { authOptions } from "../auth/[...nextauth]";

const handler = nextConnect();
handler.use(middleware);

handler.get<NextApiRequest, NextApiResponse>(async (req, res) => {
    try {
        const session = await unstable_getServerSession(req, res, authOptions);
        if (session) {
          const user = await UserModel.findOne({
            username: session.user.username,
          });
          res.send({
            username: user.username,
            userCategories: user.userCategories,
          });
        }
        else {
          res.status(401).json({ success: false })
        }
      } catch (error) {
        res.status(400).json({ success: false })
      }
});

export default handler;