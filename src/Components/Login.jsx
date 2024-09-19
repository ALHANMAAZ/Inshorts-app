import React, { useContext, useState } from "react";
import Container from "./Container";
// import { account } from "../appwrite/auth";
import { useNavigate } from "react-router-dom";
import myContext from "../Context/Context";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../FireBase/Fireabase";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const context = useContext(myContext);
  const { loading, setLoading } = context;
  const logIn = async () => {
    setLoading(true);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("user", JSON.stringify(result));
      console.log(result, "result");

      toast.success("Signin Successfully", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      navigate("/");
      setLoading(false);
    } catch (error) {
      toast.error("Sigin Failed", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setLoading(false);
    }
  };

  return (
    <Container>
      <div className="mx-auto w-full max-w-3xl p-6 rounded font-roboto">
        <section className="text-center lg:text-left border bg-slate-100 p-6 rounded-lg">
          <div className="flex flex-col lg:flex-row items-center justify-center">
            {/* Image Section */}
            <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
              <img
                src="/Images/HomeImage.jpg"
                alt="Trendy Pants and Shoes"
                className="w-full h-auto rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
              />
            </div>

            {/* Form Section */}
            <div className="w-full lg:w-2/3 lg:pl-6">
              <div className="card-body py-5">
                {/* Form submission */}
                {/* <form onSubmit={logIn}> */}
                {/* Email input */}
                <div className="mb-4">
                  <label className="form-label text-sm" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control w-full border rounded-md px-3 py-2 mt-2"
                    placeholder="Enter Email"
                    id="email"
                    required
                  />
                </div>

                {/* Password input */}
                <div className="mb-4">
                  <label className="form-label text-sm" htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control w-full border rounded-md px-3 py-2 mt-2"
                    placeholder="Enter Password"
                    id="password"
                    required
                  />
                </div>

                {/* Display error message
                  {error && <p className="text-red-500 text-sm">{error}</p>} */}

                {/* Submit button */}
                <button
                  type="submit"
                  className="btn btn-primary w-full mb-4 bg-custom-red text-white py-2 px-4 rounded-md"
                  onClick={logIn}
                >
                  Log in
                </button>
                {/* </form> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
};

export default Login;
