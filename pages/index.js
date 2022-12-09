import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi, I am Bikokwa. I am a software engineer. I have knowledge in HTML,
          CSS, and JavaScript. I am current open for a Junior Front End
          Developer role.
        </p>
      </section>
    </Layout>
  );
}
