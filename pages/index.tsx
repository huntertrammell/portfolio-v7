import Layout from "../layouts/default";
import Nav from "../components/navigation/nav";
import Image from "next/image";
import graphic from "../public/assets/images/me.png";

const IndexPage = () => {
  return (
    <Layout>
      <section className="bg-primary lg:p-10 p-7 lg:m-10 lg:mb-0 m-7 mb-0 rounded-t-lg lg:flex">
        <div className="lg:w-1/2">
          <h1 className="font-primary text-light xl:text-8xl lg:text-7xl text-5xl md:text-5xl text-center lg:text-left lg:pb-10">
            HUNTER TRAMMELL
          </h1>
          <div className="my-10 lg:hidden items-center justify-center flex">
            <Image
              src={graphic}
              height={499}
              width={488}
              alt="My picture in a golden antique frame"
            />
          </div>
          <Nav />
        </div>
        <div className="lg:w-1/2 lg:flex items-center justify-center hidden">
          <Image
            src={graphic}
            height={499}
            width={488}
            alt="My picture in a golden antique frame"
          />
        </div>
      </section>
      <div className="bg-primary-drip h-48 -mt-1 lg:mx-10 mx-7"></div>
    </Layout>
  );
};

export default IndexPage;
