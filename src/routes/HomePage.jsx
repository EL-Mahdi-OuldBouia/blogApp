import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import MainCategories from "../components/MainCategories";
import FeaturedPosts from "../components/FeaturedPosts";
import PostList from "../components/PostList";
const HomePage = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      {/** BREADCRUMB **/}
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <span className="font-bold">.</span>
        <span className="text-blue-800">Blogs and Articles</span>
      </div>
      {/** INTRODUCTION **/}
      <div className="flex items-center justify-between">
        {/* titles */}
        <div className="">
          <h1 className="text-gray-800 text-2xl md:text-4xl lg:text-5xl font-bold">
            Lorem ipsum dolor sit, consectetur adipisicing. Voluptatem
          </h1>
          <p className="mt-8 text-md md:text-xl">
            Lorem ipsum dolor sit consectetur adipisicing amet consectetur
            adipisicing elit id.
          </p>
        </div>
        {/* animated button */}
        <Link to="/write" className="hidden md:block relative">
          <svg
            viewBox="0 0 200 200"
            width="200"
            height="200"
            className="text-lg tracking-widest animate-spin animatedButton"
          >
            <path
              id="circlePath"
              fill="none"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
            <text>
              <textPath href="#circlePath" startOffset="0%">
                write your story
              </textPath>
              <textPath href="#circlePath" startOffset="50%">
                share your idea
              </textPath>
            </text>
          </svg>
          <button className="absolute top-0 left-0 right-0 bottom-0 m-auto w-20 h-20 bg-blue-800 rounded-full flex items-center justify-center">
            <FaArrowRight
              size={40}
              style={{ transform: "rotate(-45deg)", color: "white" }}
            />
          </button>
        </Link>
      </div>
      {/** CATEGORIES **/}
      <MainCategories />
      {/** FEATURED POSTS **/}
      <FeaturedPosts />
      {/** POSTS' LIST **/}
      <div className="">
        <h1 className="my-8 text-2xl text-gray-600">Recent Posts</h1>
        <PostList />
      </div>
    </div>
  );
};

export default HomePage;
