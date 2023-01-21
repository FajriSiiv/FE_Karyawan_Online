import React from "react";

export default function About() {
  return (
    <div className="container mx-auto flex flex-col gap-y-4 mt-10">
      <h1 className="text-3xl font-semibold text-center">About</h1>
      <div className="p-5 bg-emerald-400 text-xl flex flex-col gap-y-2 text-white rounded-md">
        <p>1.Dibuat dengan stack : MongoDB,Node.JS,Express, dan ReactJS</p>
        <p>
          2.Menggunakan State Management Seperti Zustand untuk mengelola API
          Data.
        </p>
      </div>
    </div>
  );
}
