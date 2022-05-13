import Link from "next/link";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();

  const isHome = router.pathname === '/' ? true : false
  
    return (
      <nav className="text-light">
        <ul className="list-none lg:text-2xl text-md font-secondary transition-all">
          {/* <li className="bg-secondary px-6 py-2 text-center lg:w-2/3 w-full mt-4 hover:scale-105 cursor-pointer">
            <a href="#about">About</a>
          </li> */}
          {/* <li className="bg-secondary px-6 py-2 text-center lg:w-2/3 w-full mt-4 hover:scale-105 cursor-pointer">
            <a href="#projects">Projects</a>
          </li> */}
          {!isHome && (
            <li className="bg-secondary px-6 py-2 text-center lg:w-2/3 w-full mt-4 hover:scale-105 cursor-pointer">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
          )}
          <li className="bg-secondary px-6 py-2 text-center lg:w-2/3 w-full mt-4 hover:scale-105 cursor-pointer">
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li className="bg-secondary px-6 py-2 text-center lg:w-2/3 w-full mt-4 hover:scale-105 cursor-pointer">
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    );
}

export default Nav