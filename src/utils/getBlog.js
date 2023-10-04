import getBlogFromDb from "@/services/blog.services";
import { cache } from "react";
import "server-only";

const getBlog = cache(() => {
  return getBlogFromDb();
});

export default getBlog;
