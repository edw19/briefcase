import React from "react";
import Head from "next/head";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";
import DarkMode from "./DarkMode";

const prefix = process.env.URL_DEPLOY || "";

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Edwin Narváez</title>
        <link rel="shortcut icon" href={prefix + "/favicon.ico"} />
      </Head>
      <NavBar />
      <div className="min-h-screen">
        <div className="flex min-h-screen">
          <div className="min-h-screen w-full md:w-9/12 lg:w-9/12 xl:w-9/12 bg-cyan-50 dark:bg-blueGray-800 ">
            <DarkMode />
            <main>{children}</main>
          </div>
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default Layout;
