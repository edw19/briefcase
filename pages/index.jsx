import React from "react";
import Layout from "../components/Layout";

const prefix = "/briefcase";

const initialTheme = () => {
  if (
    localStorage.theme === "dark" ||
    (!"theme" in localStorage &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.querySelector("html").classList.add("dark");
  } else {
    document.querySelector("html").classList.remove("dark");
  }
};

function index() {
  React.useEffect(() => {
    initialTheme();
  });


  return (
    <Layout>
      <div className="flex min-h-screen">
        <div className="m-auto">
          <div className="container">
            <div className="grid grid-cols-3 items-center">
              <img
                src={prefix + "/assets/edwin.png"}
                className="rounded-full col-start-2 object-center"
              />
            </div>
            <h1 className="dark:text-white animated-pulse text-2xl sm:text-2xl md:text-4xl lg:text-6xl xl:text-6xl text-center">
              hi, I'm Edwin Narváez
            </h1>
            <p className="dark:text-white text-xl sm:text-xl md:text-2xl text-center">
              Frontend developer
            </p>
            <p className="dark:text-white text-xl text-center mt-5 font-light ">
              I want to help people make in your work better through quality
              software.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default index;
