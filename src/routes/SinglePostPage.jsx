import Image from "../components/Image";
import { Link, useParams } from "react-router-dom";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";
import Comments from "../components/Comments";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { format } from "timeago.js";

const fetchPost = async (slug) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts/${slug}`);
  return res.data;
};
const getImgId = (imgUrl) => {
  const urlElements = imgUrl.split("/").filter(Boolean);
  return urlElements[urlElements.length - 1];
};

const SinglePostPage = () => {
  const { slug } = useParams();
  const { isPending, error, data } = useQuery({
    queryKey: ["post", slug],
    queryFn: () => fetchPost(slug),
  });

  if (isPending) return "Loading...";
  if (error) return "Something went wrong..." + error.message;
  if (!data) return "Post not found";
  return (
    <div className="flex flex-col gap-8">
      {/* details */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semiBold ">
            {data.title}
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className="text-blue-800">{data.user.username}</Link>
            <span>On</span>
            <Link className="text-blue-800">{data.category}</Link>
            <span>{format(data.createdAt)}</span>
          </div>
          <p className="text-gray-500 font-medium">{data.desc}</p>
        </div>
        {data?.img && (
          <div className="hidden lg:block w-2/5">
            <Image
              src={getImgId(data.img)}
              w="600"
              className="rounded-2xl object-cover"
            />
          </div>
        )}
      </div>
      {/* content */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* text */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam ab et
            tenetur, quisquam officiis unde nisi quae provident, placeat, enim
            sequi quia sint similique! A quidem laboriosam eligendi nemo
            doloribus dicta blanditiis pariatur illo culpa dignissimos dolor
            recusandae, ad autem porro error deserunt alias sapiente?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
            atque pariatur illum! Impedit, ex quo expedita nostrum iste qui
            architecto voluptatum eos nobis laudantium velit maiores placeat
            ratione tenetur, nemo magni eveniet ut tempore perferendis odio
            laborum esse! Eveniet illo fugiat quia sit nobis ducimus eligendi
            aspernatur tenetur vero, possimus repudiandae asperiores et, sint
            non?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            aspernatur architecto veritatis nobis eligendi accusamus facilis,
            ipsam ea numquam fugiat, qui facere sequi debitis? Sed porro quia
            vitae quas expedita, dolorem rem in. Consequatur, veritatis
            voluptatibus corporis distinctio eius quas maxime consequuntur,
            sapiente alias culpa qui iusto placeat. Nam facilis atque ratione
            enim optio, animi id vitae fugit eaque, harum tempora impedit, quae
            aperiam quis sed deleniti alias ab! Quos quaerat obcaecati tempora
            nihil odio sint voluptatem reiciendis distinctio? Expedita
            laboriosam cum repellendus veniam incidunt!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
            necessitatibus vitae facere hic suscipit animi praesentium libero
            nisi, voluptatem temporibus alias? Earum iusto, possimus, libero
            quae voluptates deleniti esse aut distinctio voluptatibus
            reiciendis, consequuntur praesentium aliquid. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Ad sed cum, provident mollitia
            asperiores obcaecati non accusantium recusandae. Voluptatem
            provident rem error dolores quos quo iusto atque numquam tempora
            quaerat. Laborum asperiores vel nihil exercitationem eveniet iste
            repellat! Similique sapiente aut, debitis sequi ex pariatur
            explicabo. Odit illum consequuntur tenetur nisi debitis excepturi
            qui dolor soluta exercitationem deserunt aut fuga hic harum autem
            sunt perferendis nostrum quasi nesciunt blanditiis inventore sint
            quisquam maxime, voluptate laboriosam! Magnam libero nemo harum
            animi quia, atque aliquid mollitia deleniti dolor explicabo
            voluptate iure sint ea nisi.
          </p>
        </div>
        {/* menu */}
        <div className="px-4 h-max sticky top-0">
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-8">
              {data?.user?.img && (
                <Image
                  src={data.user.img}
                  className="w-12 h-12 rounded-full object-cover"
                  w="48"
                  h="48"
                />
              )}
              <Link className="text-blue-800">{data.user.username}</Link>
            </div>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              rem?
            </p>
            <div className="flex gp-2">
              <Link>
                <Image src="facebook.svg" />
              </Link>
              <Link>
                <Image src="instagram.svg" />
              </Link>
            </div>
          </div>
          <PostMenuActions post={data} />
          <h1>Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link to="/" className="underline">
              ALL
            </Link>
            <Link to="/" className="underline">
              Web Design
            </Link>
            <Link to="/" className="underline">
              Development
            </Link>
            <Link to="/" className="underline">
              Marketing
            </Link>
            <Link to="/" className="underline">
              Databases
            </Link>
            <Link to="" className="underline">
              Search Engines
            </Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search />
        </div>
      </div>
      <Comments postId={data._id} />
    </div>
  );
};

export default SinglePostPage;
