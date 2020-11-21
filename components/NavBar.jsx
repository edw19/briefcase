import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function NavBar() {
  const router = useRouter()
  const [open, setOpen] = React.useState(false);

  return (
    <nav className="bg-lightBlue-500 dark:bg-lightBlue-900 md:hidden ">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="uppercase text-white font-medium">
          <Link href="/">Edwin</Link>
        </div>
        <div className="">
          <button onClick={() => setOpen(!open)}>
            {open ? (
              <svg className="svg-icon" viewBox="0 0 20 20">
                <path
                  fill="none"
                  d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"
                ></path>
              </svg>
            ) : (
              <svg className="svg-icon" viewBox="0 0 20 20">
                <path
                  fill="none"
                  d="M3.314,4.8h13.372c0.41,0,0.743-0.333,0.743-0.743c0-0.41-0.333-0.743-0.743-0.743H3.314
								c-0.41,0-0.743,0.333-0.743,0.743C2.571,4.467,2.904,4.8,3.314,4.8z M16.686,15.2H3.314c-0.41,0-0.743,0.333-0.743,0.743
								s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,15.2,16.686,15.2z M16.686,9.257H3.314
								c-0.41,0-0.743,0.333-0.743,0.743s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,9.257,16.686,9.257z"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>
      <div className={open ? "block" : "hidden"}>
        <div style={{cursor: 'pointer'}} className="block px-4 text-white py-3 hover:bg-lightBlue-600" onClick={() => router.push('/')}>
          <Link href="/">Home</Link>
        </div>
        <div style={{cursor: 'pointer'}} className="block px-4 text-white py-3 hover:bg-lightBlue-600" onClick={() => router.push('/about')}>
          <Link href="/about">About</Link>
        </div>
        <div style={{cursor: 'pointer'}} className="block px-4 text-white py-3 hover:bg-lightBlue-600" onClick={() => router.push('/skills')}>
          <Link href="/skills">Skills</Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
