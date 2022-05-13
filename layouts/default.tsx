import Head from "next/head";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Hunter Trammell</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <main className="font-sans">{children}</main>
    <footer className="bg-primary rounded-b-lg p-10 m-10 text-light">
      <div className="text-center">
        <p>Made with ❤️ using Next.js, Tailwind & Strapi</p>
        <p className="pt-4">&copy; 2022 Hunter Trammell. </p>
      </div>
    </footer>
  </>
);

export default Layout;
