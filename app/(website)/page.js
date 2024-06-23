

import HomePage from "./home";
import { getAllPosts } from "@/lib/sanity/client";



export default async function IndexPage() {
 

  // Obtén la ruta actual

  const posts = await getAllPosts();
  return <HomePage posts={posts} />;
}

// export const revalidate = 60;
