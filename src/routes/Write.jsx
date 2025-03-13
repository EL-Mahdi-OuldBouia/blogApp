import { useAuth, useUser } from "@clerk/clerk-react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import "react-quill-new/dist/quill.snow.css";
import ReactQuill from "react-quill-new";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Upload from "../components/Upload";

const Write = () => {
  const { isLoaded, isSignedIn } = useUser();
  const { getToken } = useAuth();
  const [value, setValue] = useState("");
  const [cover, setCover] = useState("");
  const [img, setImg] = useState("");
  const [video, setVideo] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (img) {
      // Ensure img is defined
      setValue((prev) => prev + `<p><img src="${img}"/></p>`);
    }
  }, [img]);

  useEffect(() => {
    if (video) {
      // Ensure img is defined
      setValue(
        (prev) => prev + `<p><iframe class="ql-video" src="${video}"/></p>`
      );
    }
  }, [video]);

  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async (newPost) => {
      const token = await getToken();
      return await axios.post(
        `${import.meta.env.VITE_API_URL}/posts`,
        newPost,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
    onSuccess: (res) => {
      toast.success("Post created successfully");
      navigate(`/${res.data.slug}`);
    },
  });

  if (!isLoaded) return <div>Loading...</div>;
  if (isLoaded && !isSignedIn) return <div>Sign in to write a post</div>;

  const handleSubmit = () => async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log("cover " + cover);
    console.log("cover.path in write: ", cover.path);
    const data = {
      img: cover || "",
      title: formData.get("title"),
      category: formData.get("category"),
      desc: formData.get("desc"),
      content: value,
    };
    mutation.mutate(data);
  };

  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6 ">
      <h1 className="text-xl font-light">Create a new Post</h1>
      <form
        onSubmit={handleSubmit()}
        action=""
        className="flex flex-col gap-6 flex-1 mb-6"
      >
        <Upload type="image" setProgress={setProgress} setData={setCover}>
          <button className="w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white">
            Add a cover image
          </button>
        </Upload>

        <input
          className="text-4xl font-semiBold bg-transparent outline-none"
          type="text"
          placeholder="My Awesome Story"
          name="title"
        />
        <div className="flex items-center gap-4">
          <label htmlFor="" className="text-sm">
            Choose a category:
          </label>
          <select
            name="category"
            id=""
            className="p-2 rounded-xl bg-white shadow-md"
          >
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="development">Development</option>
            <option value="databases">Databases</option>
            <option value="seo">Search Engines</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
        <textarea
          name="desc"
          id="A Short Description"
          className="p-4 rounded-xl bg-white shadow-md"
          placeholder="Add a Short Description"
        />
        <div className="flex flex-1 ">
          <div className="flex flex-col gap-2 mr-2 ">
            <Upload type="image" setProgress={setProgress} setData={setImg}>
              🖼️
            </Upload>

            <Upload type="video" setProgress={setProgress} setData={setVideo}>
              📹
            </Upload>
          </div>
          <ReactQuill
            theme="snow"
            className="flex-1 rounded-xl bg-white shadow-md"
            value={value}
            onChange={setValue}
            readOnly={0 < progress && progress < 100}
          />
        </div>
        <button
          disabled={mutation.isPending || (progress < 100 && progress > 0)}
          className="bg-blue-800 text-white font-medium rounded-xl mt-4 p-2 w-36 disabled:bg-blue-400 disabled:cursor-not-allowed"
        >
          {mutation.isPending ? "Loading..." : "Send"}
        </button>
        {"Progress:" + progress}
        {mutation.isError && <span>{mutation.error.message}</span>}
      </form>
    </div>
  );
};

export default Write;
