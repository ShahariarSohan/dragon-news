import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
const Login = () => {
  const { Login } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    Login(email, password)
      .then(() => {
        toast.success("Successfully Logged In");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="my-5 space-y-5">
      <Navbar></Navbar>
      <div>
        <div className="card w-1/2 mx-auto shadow-2xl bg-base-100">
          <div className="text-center ">
            <h1 className="text-2xl font-bold p-5">Login Your Account</h1>
          </div>
          <div className="card-body w-3/4 mx-auto">
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
            <p className="text-center">
              New to this site please{" "}
              <span className="font-bold underline">
                <Link to="/Register">Register</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
