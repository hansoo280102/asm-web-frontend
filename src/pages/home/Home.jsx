import React from "react";
import Hero from "./Hero";
import Blogs from "../blogs/Blogs";

export default function Home() {
  return (
    <div className="bg-white text-primary container mx-auto mt-8 p-8">
      <Hero />
      <Blogs />
    </div>
  );
}
