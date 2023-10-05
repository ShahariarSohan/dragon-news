import { useContext } from "react";
import toast from "react-hot-toast";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
const SocialLogin = () => {
  const { googleSignIn, githubSignIn } = useContext(AuthContext);
  const handleSocialLogin = (media) => {
    media()
      .then(() => toast.success("Successfully logged in"))
      .catch(() => toast.error("There is an error"));
  };
  return (
    <div className=" space-y-5">
      <div className=" space-y-2">
        <h1 className="font-bold">Login With</h1>
        <button
          onClick={() => handleSocialLogin(googleSignIn)}
          className="w-full btn btn-outline border-blue-500"
        >
          <FaGoogle></FaGoogle>Login with Google
        </button>
        <button
          onClick={() => handleSocialLogin(githubSignIn)}
          className="w-full btn btn-outline border-blue-500"
        >
          <FaGithub></FaGithub>Login with Github
        </button>
      </div>
      <h1 className="font-bold">Find Us On</h1>
      <div className=" border-2 border-gray-200 rounded-md">
        <div className="w-full bg-base-200 p-3 border-b-2">
          <Link>
            <button className=" flex gap-2 items-center">
              <FaFacebook></FaFacebook>Facebook
            </button>
          </Link>
        </div>

        <div className="w-full bg-base-200 p-3 border-b-2">
          <Link>
            <button className=" flex gap-2 items-center">
              <FaTwitter></FaTwitter>Twitter
            </button>
          </Link>
        </div>
        <div className="w-full bg-base-200 p-3">
          <Link>
            <button className=" flex gap-2 items-center">
              <FaInstagram></FaInstagram>Instagram
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
