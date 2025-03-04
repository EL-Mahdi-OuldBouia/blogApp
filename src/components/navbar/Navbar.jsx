import { useState } from "react";
import Image from "../Image";
import { Link } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const src = "el-logo.png";
  const alt = "page's logo";
  const className = "w-8 h-8 rounded-xl";

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-4 text-xl font-bold">
        {/* LOGO */}
        <Image src={src} alt={alt} className={className} w={32} h={32} />

        <span>JS.CODE.IT</span>
      </Link>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        {/* {MOBILE BUTTON} */}
        <div
          className="cursor-pointer text-2xl font-bold"
          onClick={() => setOpen(!open)}
        >
          {open ? "X" : "☰"}
        </div>
        {/* MOBILE LINK LIST */}

        <div
          className={`w-full h-screen flex flex-col gap-16 font-medium text-[#6d2dc6c1] text-lg items-center justify-center absolute top-16 bg-[rgba(169,198,201,0.52)] transition-all ease-in-out ${
            open ? "-right-0" : "-right-[100%]"
          }`}
        >
          <Link to="/">Home</Link>
          <Link to="/">Trending</Link>
          <Link to="/">Most Popular</Link>
          <Link to="/">About</Link>
          <Link to="/">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Login 👋
            </button>
          </Link>
        </div>
      </div>
      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium ">
        <Link to="/">Home</Link>
        <Link to="/">Trending</Link>
        <Link to="/">Most Popular</Link>
        <Link to="/">About</Link>
        <SignedOut>
          <Link to="/login">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Login 👋
            </button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
