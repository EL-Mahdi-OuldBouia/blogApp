import Image from "./Image";
import { Link } from "react-router-dom";
<<<<<<< HEAD

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
=======
import { format } from "timeago.js";



const getImgId = (imgUrl) => {
  const urlElements = imgUrl.split("/").filter(Boolean);
  return urlElements[urlElements.length - 1];
};

const SinglePost = ({ post }) => {
  
  return (
    <div className="flex flex-col xl:flex-row gap-8 mb-8">
      {/* image */}
      {post.img && (
        <div className="md:hidden xl:block xl:w-1/3">
          <Image
            src={getImgId(post.img)}
            alt={post.title}
            className="rounded-2xl object-cover"
            w="735"
          />
        </div>
      )}
      {/* details */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to={`/${post.slug}`} className="text-4xl font-semibold">
          {post.title}
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>written by</span>
          <Link className="text-blue-800">{post.user.username}</Link>
          <span>on</span>
          <Link className="text-blue-800">{post.category}</Link>
          <span>{format(post.createdAt)}</span>
        </div>
        <p>{post.desc}</p>
        <Link to={`/${post.slug}`} className="underline text-blue-800 text-sm">
>>>>>>> 87197b3 (Initial commit with linked GitHub repo)
          Read more
        </Link>
      </div>
    </div>
  );
};

export default SinglePost;
