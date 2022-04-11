import Layout from "../layouts/default";
import HomeNav from "../components/navigation/home";

const IndexPage = () => (
  <Layout>
    <section className="bg-primary lg:p-10 p-7 rounded-t-lg lg:flex">
      <div className="lg:w-1/2">
        <h1 className="font-primary text-light lg:text-8xl text-5xl text-center lg:text-left lg:pb-10">
          HUNTER
          <br />
          TRAMMELL
        </h1>
        <HomeNav/>
      </div>
      <div className="lg:w-1/2"></div>
    </section>
    <div className="bg-primary-drip h-48 -mt-1"></div>
    <section className="lg:p-10 p-7" id="about">
      <h2 className="text-secondary font-secondary text-3xl">Developer, Teacher, Writer</h2>
      <p className="text-dark">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
        tenetur dolorem ex aliquam? Iusto, eius. Molestias esse, repellat
        placeat libero unde illo voluptate enim. Cupiditate architecto veniam
        perferendis doloribus eius?
      </p>
    </section>
  </Layout>
);

export default IndexPage;
