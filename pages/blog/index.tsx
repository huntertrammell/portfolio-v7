import Header from "../../components/navigation/header";
import Layout from "../../layouts/default";

const Blog = () => {
  return (
    <>
      <Layout>
        <Header title="MY BLOG" />
        <section className="p-10">
          <h2 className="text-secondary font-secondary text-4xl text-center">
            Latest Posts
          </h2>
        </section>
        <section className="p-10"></section>
      </Layout>
    </>
  );
};

export default Blog;
