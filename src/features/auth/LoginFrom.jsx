"use client";

import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import { signIn, useSession } from "next-auth/react";
import { toast } from "react-hot-toast";
import SoicalAuth from "./SoicalAuth";
import { GithubIcon, GoogleIcon, Phone } from "@/components/svg";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const session = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);

  const {
    register,
    getValues,
    setValue,
    handleSubmit,
    formState: { error },
  } = useForm();

  useEffect(() => {
    if (session?.status === "authenticated") {
      router.push("/pages/chatPage");
    }
  }, [session?.status, router]);

  const onSubmit = (data) => {
    setIsLoading(true);

    signIn("credentials", {
      ...data,
      redirect: false,
    })
      .then((callback) => {
        if (callback.error) {
          toast.error("Invalid credentials");
        }

        if (callback?.ok && !callback?.error) {
          toast.success("Login successful");
          router.push("/pages/chatPage");
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleSocialAuth = (provider) => {
    setIsLoading(true);

    signIn(provider, { redirect: false })
      .then((callback) => {
        if (callback?.error) {
          toast.error("Invalid credentials");
        }
        if (callback?.ok && !callback?.error) {
          toast.success("Login successful");
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // console.log(getValues("email"));

  return (
    <div className="flex justify-center items-center w-full h-screen bg-slate-200">
      <div className="flex min-h-[45vh] w-[350px] bg-white shadow-lg flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          /> */}
          <Phone />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                for="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  // name="email"
                  type="email"
                  autocomplete="email"
                  // required
                  {...register("email", { required: true })}
                  className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  for="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  // name="password"
                  type="password"
                  autocomplete="current-password"
                  // required
                  {...register("password", { required: true })}
                  className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>

            <div className="mt-4 flex gap-2">
              <SoicalAuth
                icon={<GithubIcon className="w-5 h-5" />}
                onClick={() => handleSocialAuth("github")}
              />
              <SoicalAuth
                icon={<GoogleIcon />}
                onClick={() => handleSocialAuth("google")}
              />
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <a
              href="/sign-up"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
