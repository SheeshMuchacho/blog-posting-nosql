import BlogHero from "@/components/blog/hero";
import BlogSearch from "@/components/blog/search";
import BlogList from "@/components/blog/blog-list";

export default async function Blog(){
  return (
    <>
      <BlogHero />
      <BlogSearch />
      <BlogList />
    </>
  );
}
