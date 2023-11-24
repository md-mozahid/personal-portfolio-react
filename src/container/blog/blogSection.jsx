import SingleBlog from "./singleBlog";
import { getPosts } from "./blogApi";
import { useEffect, useState } from "react";
import Pagination from "../../components/pagination";

const BlogSection = () => {
  const [postData, setPostData] = useState([]);

  // fetch data
  useEffect(() => {
    const fetchData = async () => {
      const data = await getPosts();
      setPostData(data);
    };
    fetchData();
  }, [postData]);

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
            <SingleBlog postData={postData} />
          </div>
          <Pagination />
        </div>
      </section>
    </>
  );
};

export default BlogSection;
