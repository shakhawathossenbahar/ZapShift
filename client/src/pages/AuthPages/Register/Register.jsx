import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { FaGoogle } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import axios from "axios";

const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();

  console.log("In register", location);
  // this is from React Hook Form

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // this is from custom hook
  const { registerUser, registerWithGoogle, updateUserProfile } = useAuth();

  // Registration handling function
  const handleRegistration = (data) => {
    console.log("After registration", data);

    // getting the profile photo from the react hook response -- from data
    const profileImg = data.photo[0];

    registerUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);

        // 1. store data image in form data
        const formData = new FormData();
        formData.append("image", profileImg);

        // 2. send teh photo to store and get the url
        const image_API_URL = `https://api.imgbb.com/1/upload?expiration=600&key=${
          import.meta.env.VITE_image_hosting_key
        }`;

        // 3. posting image to imgbb
        axios.post(image_API_URL, formData).then((res) => {
          console.log("After image upload", res.data.data.url);

          // 4. update user profile in firebase
          const userProfile = {
            displayName: data.name,
            photoURL: res.data.data.url,
          };

          updateUserProfile(userProfile)
            .then(() => {
              console.log("User profile updated complete");
              navigate(location.state || "/");
            })
            .catch((error) => {
              console.log(error);
            });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleLogIn = () => {
    registerWithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="py-10 flex items-center justify-center md:bg-gray-50 ">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white shadow-xl rounded-3xl p-10"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-3 text-center">
          Create an Account
        </h1>
        <p className="text-gray-500 text-center mb-8">Register with ZapShift</p>

        {/* HERE I HAVE TO ADD THIS BY MY OWN */}
        <form
          onSubmit={handleSubmit(handleRegistration)}
          className="flex flex-col gap-4 on"
        >
          <div>
            <label className="text-gray-700 font-medium">Name</label>
            <input
              // HERE I HAVE TO ADD BELOW LINE
              {...register("name", { required: true })}
              type="text"
              placeholder="Name"
              className="mt-1 w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-300"
            />
          </div>

          {/*THIS IS FOR FILE UPLOAD */}
          <div>
            <label className="text-gray-700 font-medium">Photo</label>
            <input
              {...register("photo")}
              type="file"
              className="file-input mt-1 w-full px-4 py-2 border rounded-xl border-black focus:outline-none focus:ring-2 focus:ring-lime-300"
            />
            {/* ERROR HANDLING - WRITTEN BY MYSELF */}
            {errors.email?.type === "required" && (
              <p className="text-red-500">Email is required</p>
            )}
          </div>

          <div>
            <label className="text-gray-700 font-medium">Email</label>
            <input
              // HERE I HAVE TO ADD BELOW LINE
              {...register("email", { required: true })}
              type="email"
              placeholder="Email"
              className="mt-1 w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-300"
            />

            {/* ERROR HANDLING - WRITTEN BY MYSELF */}
            {errors.email?.type === "required" && (
              <p className="text-red-500">Email is required</p>
            )}
          </div>

          <div>
            <label className="text-gray-700 font-medium">Password</label>
            <input
              // HERE I HAVE TO ADD BELOW LINE
              {...register("password", {
                required: true,
                minLength: 6,
                pattern:
                  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/,
              })}
              type="password"
              placeholder="Password"
              className="mt-1 w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-300"
            />

            {/* ERROR HANDLING - WRITTEN BY MYSELF */}

            {errors.password?.type === "required" && (
              <p className="text-red-500">Password is required</p>
            )}

            {errors.password?.type === "minLength" && (
              <p className="text-red-500">
                Password must be six character or longer
              </p>
            )}

            {errors.password?.type === "pattern" && (
              <p className="text-red-500">
                Must have at least one uppercase, one lowercase, one number and
                one special character
              </p>
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="mt-2 w-full bg-lime-300 hover:bg-lime-400 text-gray-900 font-semibold py-3 rounded-xl"
          >
            Register
          </motion.button>
        </form>

        <p className="text-center text-gray-500 mt-4">
          Already have an account?{" "}
          <Link to={"/login"} 
          state={location.state}
          className="text-lime-600 font-medium">
            Login
          </Link>
        </p>

        <div className="my-4 text-center text-gray-400">Or</div>

        <motion.button
          onClick={handleGoogleLogIn}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="w-full flex items-center justify-center gap-3 bg-gray-100 py-3 rounded-xl border"
        >
          <FaGoogle className="text-xl" /> Log in with Google
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Register;
