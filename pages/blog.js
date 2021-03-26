import Head from "next/head";
import { BlogCard } from "../blogComponents/BlogCard";
import { BlogHeader } from "../blogComponents/BlogHeader";
import { BlogSection } from "../blogComponents/BlogSection";
export default function blog() {
  return (
    <div>
      <Head>
        <title>Agile Organisations | Blog</title>
        <meta name="keywords" content="FSCO in Tashkent & Blog" />
      </Head>
      <BlogHeader/>
      <BlogSection/>
      <BlogCard/>
    </div>
  );
}
