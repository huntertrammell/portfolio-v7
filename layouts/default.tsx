import Head from "next/head";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Hunter Trammell</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <main className="bg-light font-sans">{children}</main>
  </>
);

export default Layout;
