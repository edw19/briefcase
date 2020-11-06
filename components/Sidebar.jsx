import Link from "next/link";
import { useRouter } from "next/router";

function Sidebar() {
  const router = useRouter();
  return (
    <aside className="bg-indigo-900 hidden md:block md:w-3/12 lg:w-3/12 xl:w-3/12">
      <div className="flex min-h-screen">
        <nav className="m-auto list-none container text-center">
          <li
            style={{ cursor: "pointer" }}
            onClick={() => router.push("/")}
            className="py-6 hover:bg-indigo-700 text-2xl  text-white"
          >
            <Link href="/">Home</Link>
          </li>
          <li
            style={{ cursor: "pointer" }}
            onClick={() => router.push("/skills")}
            className="py-6 hover:bg-indigo-700 text-2xl  text-white"
          >
            <Link href="/skills">My Skills</Link>
          </li>
          <li
            style={{ cursor: "pointer" }}
            onClick={() => router.push("/about")}
            className="py-6 hover:bg-indigo-700 text-2xl  text-white"
          >
            <Link href="/about">About me</Link>
          </li>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
