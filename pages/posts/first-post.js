import Link from "next/link";
import Script from "next/script";
import Layout from "../../components/layout";
import Head from "next/head";


export default function FirstPost() {
    return (
        <>
            <Head>
                <title>First Posts</title>
                {/* <script src="https://connect.facebook.net/en_US/sdk.js" /> */}
            </Head>
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={()=>
                    console.log('script loaded correctly, window.FB has been populated')
                    
                }
            />
            <h1>First Posts</h1>
            <h2>
                <Link href='/'>Back to home</Link>
            </h2>
        </>
    );
}