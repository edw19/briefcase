import Link from "next/link";

function NavBar() {
  return (
    <nav className="flex items-center justify-between md:hidden">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li >
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/skills">Skills</Link>
      </li>
      <button>Closse</button>
    </nav>
  );
}

export default NavBar;
