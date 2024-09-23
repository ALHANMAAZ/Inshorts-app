import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../Context/Context";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../FireBase/Fireabase";
import { addDoc, collection } from "firebase/firestore";
import Container from "./Container";

function Register() {
  const [name, setName] = useState("");
  const [email, setEamil] = useState("");
  const [password, setPassword] = useState("");

  const context = useContext(myContext);
  const { loading, setLoading } = context;
  const navigate = useNavigate();
  const sigup = async () => {
    console.log(name, email, password);
    setLoading(true);
    if (name === "" || email === "" || password === "") {
      return toast.error("Fields are Required");
    }
    try {
      const users = await createUserWithEmailAndPassword(auth, email, password);
      //   console.log(users);
      const user = {
        name: name,
        uid: users.user.uid,
        email: users.user.email,
      };
      const userRef = collection(fireDB, "users");
      await addDoc(userRef, user);
      toast.success("Signun Successfully", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setName("");
      setEamil("");
      setPassword("");
      setLoading(false);
      navigate("/login");
    } catch (error) {
      toast.error("Sigun Failed", {
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
      <div className=" mx-auto w-full max-w-3xl p-6 rounded font-roboto">
        <div className=" bg-gray-800 px-10 py-10 rounded-xl ">
          <div className="">
            <h1 className="text-center text-white text-xl mb-4 font-bold">
              Signup
            </h1>
          </div>
          <div>
            <input
              type="name"
              name="text"
              value={name}
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[40em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={email}
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[40em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Email"
              onChange={(e) => setEamil(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[40em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className=" flex justify-center mb-3">
            <button
              className=" bg-red-500 w-full text-white font-bold  px-2 py-2 rounded-lg"
              onClick={sigup}
            >
              Signup
            </button>
          </div>
          <div>
            <h2 className="text-white">
              Have an account?
              <Link
                className=" ml-2 text-red-400 underline font-bold"
                to={"/login"}
              >
                Login
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Register;
