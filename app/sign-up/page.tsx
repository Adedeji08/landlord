"use client";
import SwiperSlides from "@/component/common/SwiperSlides";
import SignupForm from "@/component/SignupForm";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SignupPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="w-full h-full grid lg:grid-cols-2">
        <div className="bg-muted hidden lg:block shadow-lg">
          <SwiperSlides />
        </div>

        <div className="max-w-4xl m-auto w-full flex flex-col items-center">
          <Image
            src="/assets/img/jodex-logo.png"
            alt="Jodex logo"
            width={150}
            height={150}
            className="mx-auto mb-10"
          />
          <SignupForm />
          <p className="text-sm text-gray-500 text-center mt-4">or</p>
          <div className="flex justify-center items-center w-90 mt-4">
            <a
              href="/sign-in"
              className="text-blue-950 w-full text-center text-[13px] font-bold border border-blue-950 rounded-md px-4 py-2 hover:bg-blue-950 hover:text-white transition duration-300"
            >
              Continue with Google
            </a>
          </div>

          <div className="flex justify-center items-center mt-8">
            <p className="text-sm text-gray-500">
              Already have an account?{" "}
              <Link
                href="/"
                className="text-blue-950 font-bold hover:underline"
              >
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default SignupPage;
