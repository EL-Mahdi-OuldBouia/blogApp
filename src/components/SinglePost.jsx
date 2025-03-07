import Image from "./Image";
import { Link } from "react-router-dom";

const SinglePost = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      {/* image */}
      <div className="md:hidden xl:block xl:w-1/3">
        <Image
          src="postImg.jpeg"
          className="rounded-2xl object-cover "
          w="735"
        />
      </div>
      {/* details */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to="/post" className="text-4xl font-semibold">
          Lorem ipsum dolor sit amet consectetur.
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>written by</span>
          <Link className="text-blue-800">John Doe</Link>
          <span>on</span>
          <Link className="text-blue-800">Web Design</Link>
          <span>1.min ago</span>
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
          veritatis voluptas ea, consectetur eaque aperiam? Lorem ipsum dolor
          sit amet. Lorem ipsum dolor sit amet consectetur.
        </p>
        <Link to="/post" className="underline text-blue-800 text-sm">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default SinglePost;
