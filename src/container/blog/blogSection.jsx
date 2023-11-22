import SingleBlog from "./singleBlog";
import { getPosts } from "./blogApi";
import { useEffect } from "react";

const BlogSection = () => {

  // fetch data
  useEffect(() => {
    const fetchData = async () => {
      const posts = await getPosts();
      console.log(posts);
      return posts;
    };
    fetchData();
  }, [getPosts]);

  // console.log(posts);
  // const {title} = posts
  // console.log(name)

  return (
    <>
      <section className="">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h2 className="sm:text-5xl text-2xl font-medium title-font mb-4 uppercase">
              My Blog
            </h2>
          </div>
          <div className="flex flex-wrap -m-4">
            <SingleBlog />
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSection;
