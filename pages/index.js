import Head from "next/head";
import Layout, {siteTitle} from "../components/layout";
import utilStyles from '../styles/utils.module.css';



export default function Home(){
  return (
    <Layout Home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Rohaid Ahmed Mirza. I am a Coumputer Engineer. You can contact me on Twitter!</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="http://nextjs.org/learn">Our Nextjs tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}