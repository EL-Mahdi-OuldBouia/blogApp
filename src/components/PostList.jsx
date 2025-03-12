import SinglePost from "./SinglePost";
<<<<<<< HEAD
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async () => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts`);
=======
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

const fetchPosts = async (pageParam) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts`, {
    params: {
      page: pageParam,
    },
  });

>>>>>>> 87197b3 (Initial commit with linked GitHub repo)
  return res.data;
};

const PostList = () => {
<<<<<<< HEAD
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () => fetchPosts(),
  });
  if (isPending) return "Loading...";
  if (error) return "an error occurred: " + error.message;
  console.log(data);

  return (
    <div className="flex flex-col gap-12 mb-8">
      <SinglePost />
      <SinglePost />
      <SinglePost />
      <SinglePost />
      <SinglePost />
      <SinglePost />
      <SinglePost />
      <SinglePost />
      <SinglePost />
      <SinglePost />
      <SinglePost />
      <SinglePost />
      <SinglePost />
      <SinglePost />
      <SinglePost />
      <SinglePost />
      <SinglePost />
      <SinglePost />
    </div>
=======
  const { data, fetchNextPage, hasNextPage, status } = useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: ({ pageParam = 1 }) => fetchPosts(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) =>
      lastPage.hasMore ? pages.length + 1 : undefined,
  });
  console.log("data from PostList",data);

  if (status === "loading") return "Loading...";
  if (status === "error")
    return "something went wrong in fetching posts via infinite fetching ";
  const allPosts = data?.pages?.flatMap((page) => page.posts) || [];
  console.log(data);

  return (
    <InfiniteScroll
      dataLength={allPosts.length} //This is important field to render the next data
      next={fetchNextPage}
      hasMore={hasNextPage}
      loader={<h4>Loading more posts...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>All posts have been loaded</b>
        </p>
      }
    >
      {allPosts.map((post) => (
        <SinglePost key={post._id} post={post} />
      ))}
    </InfiniteScroll>
>>>>>>> 87197b3 (Initial commit with linked GitHub repo)
  );
};

export default PostList;
