import nextConnect from "next-connect";
import mongoose from "mongoose";

async function database(req, res, next) {
  if (mongoose.connections[0].readyState) {
    return next();
  }
  const options = {
    bufferCommands: false,
    useNewUrlParser: true,
  };
  await mongoose
    .connect(process.env.MONGODB_URI, options)
    .then(() =>
      console.log(`----Successfully connected to database-----`)
    );
  return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;
