const { default: DbConnect } = require("./DbConnect");
import "server-only";

const getBlogFromDb = async () => {
  const db = await DbConnect();
  const blogCollection = db.collection("blog");
  return blogCollection.find({}).toArray();
};
export default getBlogFromDb;
