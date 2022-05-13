import HeaderNav from "./headerNav";

const Header = ({ title }) => {
  return (
    <>
      <section className="bg-primary lg:p-10 p-7 lg:m-10 lg:mb-0 m-7 mb-0 rounded-t-lg lg:flex">
        <div className="w-1/2">
          <h1 className="font-primary text-light xl:text-8xl lg:text-7xl text-5xl md:text-5xl text-left lg:pb-10">
            {title}
          </h1>
          <HeaderNav />
        </div>
      </section>
      <div className="bg-primary-drip h-48 -mt-1 lg:mx-10 mx-7"></div>
    </>
  );
};

export default Header;
