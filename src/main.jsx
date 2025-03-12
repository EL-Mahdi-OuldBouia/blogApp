import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./routes/HomePage.jsx";
import PostListPage from "./routes/PostListPage.jsx";
import LoginPage from "./routes/LoginPage.jsx";
import RegisterPage from "./routes/RegisterPage.jsx";
import Write from "./routes/Write.jsx";
import SinglePostPage from "./routes/SinglePostPage.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
<<<<<<< HEAD
=======
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
>>>>>>> 87197b3 (Initial commit with linked GitHub repo)

const queryClient = new QueryClient();

const PublISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!PublISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/posts",
        element: <PostListPage />,
      },
      {
        path: "/:slug",
        element: <SinglePostPage />,
      },
      {
        path: "/write",
        element: <Write />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PublISHABLE_KEY}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
<<<<<<< HEAD
=======
        <ToastContainer position="bottom-right" />
>>>>>>> 87197b3 (Initial commit with linked GitHub repo)
      </QueryClientProvider>
    </ClerkProvider>
  </StrictMode>
);
