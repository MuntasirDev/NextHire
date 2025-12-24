import React, { useContext } from "react";
import signinlottie from "../../assets/Lotties/sign in.json";
import LottieWrapper from "lottie-react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../Shared Components/SocialLogin";

const Lottie = LottieWrapper.default || LottieWrapper;

const SignIn = () => {
  const { SignInUser } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state || "/";
  console.log();

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.mail.value;
    const password = form.password.value;
    console.log("Attempting Sign In with:", email, password);

    SignInUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(from);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero  min-h-screen bg-gray-50">
      <div className="hero-content flex-col lg:flex-row w-full max-w-5xl p-6">
        <div className="text-center p-4 lg:w-1/2 lg:order-1 order-2">
          <Lottie
            style={{ width: "350px", height: "350px", margin: "0 auto" }}
            animationData={signinlottie}
            loop={true}
          />
        </div>

        <div className="card bg-white w-full max-w-sm shrink-0 shadow-2xl border border-gray-200 lg:w-1/2 lg:order-2 order-1">
          <div className="card-body p-8">
            <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
              Sign In!
            </h1>
            <form onSubmit={handleSignIn}>
              <fieldset className="fieldset space-y-4">
                <label className="">
                  <span className="label-text font-medium text-gray-700">
                    Email Address
                  </span>

                  <input
                    type="email"
                    className="input input-bordered w-full mt-1 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                    name="mail"
                    placeholder="Enter your email"
                    required
                  />
                </label>
                <label className="">
                  <span className="label-text font-medium text-gray-700">
                    Password
                  </span>

                  <input
                    type="password"
                    name="password"
                    className="input input-bordered w-full mt-1 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                    placeholder="Your password"
                    required
                  />
                </label>
                <div className="text-right">
                  <a className="link link-hover text-sm text-gray-500 hover:text-indigo-600">
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="btn w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white border-none text-lg font-semibold transition duration-200"
                >
                  Sign In
                </button>
              </fieldset>
            </form>

            <div className="justify-items-center">
              <SocialLogin from={from}></SocialLogin>
            </div>

            <div className="text-center mt-6 text-sm text-gray-600">
              New here?
              <Link
                to="/register"
                className="link link-hover font-bold text-indigo-600 hover:text-indigo-800 ml-1"
              >
                Create an account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
