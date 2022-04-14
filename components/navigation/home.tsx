const HomeNav = () => {
    return (
      <nav className="mt-10 text-light">
        <ul className="list-none lg:text-2xl text-md font-secondary transition-all">
          <li className="bg-secondary px-6 py-2 text-center lg:w-2/3 w-full mt-4 hover:scale-105 cursor-pointer">
            <a href="#about">About</a>
          </li>
          <li className="bg-secondary px-6 py-2 text-center lg:w-2/3 w-full mt-4 hover:scale-105 cursor-pointer">
            <a href="#projects">Projects</a>
          </li>
          <li className="bg-secondary px-6 py-2 text-center lg:w-2/3 w-full mt-4 hover:scale-105 cursor-pointer">
            <a href="#blog">Blog</a>
          </li>
          <li className="bg-secondary px-6 py-2 text-center lg:w-2/3 w-full mt-4 hover:scale-105 cursor-pointer">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    );
}

export default HomeNav