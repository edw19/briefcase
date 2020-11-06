import Head from "next/head";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Edwin Narváez</title>
      </Head>
      <NavBar />
      <div className="min-h-screen">
        <div className="flex min-h-screen">
          <div className="min-h-screen w-full md:w-9/12 lg:w-9/12 xl:w-9/12 bg-gray-800 ">
            <main>{children}</main>
          </div>
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default Layout;
