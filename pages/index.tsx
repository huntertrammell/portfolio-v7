import Layout from "../layouts/default";
import HomeNav from "../components/navigation/home";
import Image from "next/image";
import graphic from "../public/assets/images/me.png";
import CardWide from "../components/card/cardWide";
import Card from "../components/card/card";
import Contact from "../components/form/contact";

const IndexPage = () => (
  <Layout>
    <section className="bg-primary lg:p-10 p-7 lg:m-10 lg:mb-0 m-7 mb-0 rounded-t-lg lg:flex">
      <div className="lg:w-1/2">
        <h1 className="font-primary text-light xl:text-8xl lg:text-7xl text-5xl md:text-5xl text-center lg:text-left lg:pb-10">
          HUNTER TRAMMELL
        </h1>
        <div className="mt-10 lg:hidden items-center justify-center flex">
          <Image
            src={graphic}
            height={499}
            width={488}
            alt="My picture in a golden antique frame"
          />
        </div>
        <HomeNav />
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
    <section className="p-10" id="about">
      <h2 className="text-secondary font-secondary text-4xl">About Me</h2>
      <p className="text-dark pb-10">
        As you may have deduced from the title, my name is Hunter Trammell. I am
        a Full Stack Web Developer from Kansas City. Web Development is my
        passion and I love to share that passion with others whether it is
        through casual conversation or by way of instruction. I am constantly
        learning and improving my skills as a developer. If you'd like to learn
        more about me and my work, keep scrolling to see some of my recent
        projects & articles.
      </p>
    </section>
    <section className="bg-sticker-bomb p-10" id="projects">
      <h2 className="text-dark font-secondary text-4xl text-center">
        Recent Projects
      </h2>
      <div className="py-10">
        <CardWide />
        <CardWide />
      </div>
      <div className="text-center">
        <button className="bg-primary px-6 py-2 text-center hover:scale-105 cursor-pointer font-secondary text-dark lg:text-2xl text-md transition-all">
          See More
        </button>
      </div>
    </section>
    <section className="p-10" id="blog">
      <Card />
    </section>
    <section className="p-10" id="contact">
      <h2 className="text-dark font-secondary text-4xl text-center">
        Say Hello
      </h2>
      <Contact />
    </section>
  </Layout>
);

export default IndexPage;
