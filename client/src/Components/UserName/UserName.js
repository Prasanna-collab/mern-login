import React from "react";
import { Link } from "react-router-dom";
import classes from "./UserName.module.css";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { usernameValidate } from "../helper/validate";
import account from "../../assets/account.png";

const UserName = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
    },
    validate: usernameValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
    },
  });
  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="flex justify-center items-center h-screen">
        <div className={classes.glass}>
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">Hello again!</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Explore more by connecting with us!.
            </span>
          </div>

          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center py-4">
              <img
                className={classes["profile_img"]}
                src={account}
                alt="avatar"
              />
            </div>
            <div className="textbox flex flex-col justify-center items-center gap-6">
              <input
                {...formik.getFieldProps("username")}
                className="border-0 rounded-sm outline-none px-2 py-4 w-3/4 bg-gray-50"
                type="text"
                placeholder="Username"
              />
              <button
                type="submit"
                className="border bg-indigo-500 w-3/4 py-4 rounded-lg text-gray-50 text-xl text-center hover:bg-red-500"
              >
                Let's Go
              </button>
            </div>
            <div className="text-center py-4">
              <span className="text-gray-500">
                Not a User?
                <Link className="text-red-500" to="/register">
                  Register now
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserName;
