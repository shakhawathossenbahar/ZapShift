import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth";

export default function Register() {

  // private route - navigation
  const location = useLocation();
  const navigate = useNavigate();


  // Data from custom hook
  const { signInUser, registerWithGoogle } = useAuth();

  // React Hook Form
  const { register, handleSubmit } = useForm();

  // email password login
  const handleSignIn = (data) => {
    console.log("After login", data);
    signInUser(data)
      .then((result) => {
        console.log(result.data);
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // google login
  const handleGoogleLogin = () => {
    registerWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex items-center justify-center md:bg-gray-50 py-15 rounde-2xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white shadow-xl rounded-3xl p-10"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-3 text-center">
          Welcome Back
        </h1>
        <p className="text-gray-500 text-center mb-8">Login with ZapShift</p>

        <form
          onSubmit={handleSubmit(handleSignIn)}
          className="flex flex-col gap-4"
        >
          <div>
            <label className="text-gray-700 font-medium">Email</label>
            <input
              type="email"
              placeholder="Email"
              {...register("email")}
              className="mt-1 w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-300"
            />
          </div>

          <div>
            <label className="text-gray-700 font-medium">Password</label>
            <input
              type="password"
              placeholder="Password"
              {...register("password")}
              className="mt-1 w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-300"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="mt-2 w-full bg-lime-300 hover:bg-lime-400 text-gray-900 font-semibold py-3 rounded-xl"
          >
            Login
          </motion.button>
        </form>

        <p className="text-center text-gray-500 mt-4">
          Don't have any account?{" "}
          <Link to={"/register"} 
          state={location.state}
          className="text-lime-600 font-medium">
            Register
          </Link>
        </p>

        <div className="my-4 text-center text-gray-400">Or</div>

        <motion.button
          onClick={handleGoogleLogin}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="w-full flex items-center justify-center gap-3 bg-gray-100 py-3 rounded-xl border"
        >
          <FaGoogle className="text-xl" /> Login with Google
        </motion.button>
      </motion.div>
    </div>
  );
}
