import React from "react";
import Link from "next/link";
import { FaCloudSun } from "react-icons/fa";

export default function Home() {
  return (
    <main className="bg-cover bg-blue-500 bg-gradient-to-t from-blue-500 to-blue-300 h-screen">
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex ">
          <h1 className="text-3xl font-bold mt-6 pr-2">Welcome to Weather API app</h1>
          <div>
            <FaCloudSun className="text-8xl fill-yellow-300" />
          </div>
        </div>
        <div>
          <Link href="/mainPage" className=" font-bold py-2 px-4 text-2xl ">
            Get Started
          </Link>
        </div>
      </div>
    </main>
  );
}
