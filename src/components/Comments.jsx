import { useQuery, useQueryClient } from "@tanstack/react-query";
import Comment from "./Comment";
import axios from "axios";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";

import { useAuth, useUser } from "@clerk/clerk-react";

const fetchComments = async (postId) => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/comments/${postId}`
  );
  return res.data;
};

const Comments = ({ postId }) => {
  const { isPending, error, data } = useQuery({
    queryKey: ["comments", postId],
    queryFn: () => fetchComments(postId),
  });
  const { user } = useUser();
  const queryClient = useQueryClient();

  const { getToken } = useAuth();

  const mutation = useMutation({
    mutationFn: async (newComment) => {
      const token = await getToken();
      return await axios.post(
        `${import.meta.env.VITE_API_URL}/comments/${postId}`,
        newComment,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", postId] });
    },
    onError: (err) => {
      toast.error(err.response.data);
    },
  });

  if (isPending) return "Loading...";
  if (error) return "Something went wrong..." + error.message;
  if (!data) return "Comments not found";

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      desc: formData.get("desc"),
    };
    mutation.mutate(data);
    e.target.reset();
  };
  return (
    <div className="flex flex-col gap-8 lg:w-3/5 mb-12 ">
      <h1 className="text-xl text-gray-500 underline">Comments</h1>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-between gap-8 w-full "
      >
        <textarea
          placeholder="write a comment..."
          className="w-full p-4 rounded-xl"
          name="desc"
        />
        <button
          type="submit"
          className="bg-blue-800 px-4 py-3
         text-white font-medium rounded-xl"
        >
          Send
        </button>
      </form>
      {isPending ? (
        "Loading..."
      ) : error ? (
        "Something went wrong..."
      ) : (
        <>
          {mutation.isPending && (
            <Comment
              comment={{
                desc: `${mutation.variables.desc} (Sending...)`,
                createdAt: new Date(),
                user: { username: user.username, img: user.imageUrl },
              }}
            />
          )}

          {data.comments?.map((comment) => (
            <Comment key={comment._id} comment={comment} />
          ))}
        </>
      )}
    </div>
  );
};

export default Comments;
