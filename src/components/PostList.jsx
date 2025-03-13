import SinglePost from "./SinglePost";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

const fetchPosts = async (pageParam) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts`, {
    params: {
      page: pageParam,
    },
  });

  return res.data;
};

const PostList = () => {
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
  );
};

export default PostList;
