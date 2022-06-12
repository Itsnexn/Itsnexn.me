import Head from "next/head";
import fs from "fs";
import path from "path";
import { contentsDir } from "../lib/helper";
import Style from "../styles/modules/resume.module.scss";

export default function Resume({ resume }) {
    return (
        <>
            <Head>
                <title>Resume | itsnexn.me</title>
                <meta
                    name="description"
                    content="0xNexn Resume - Security researcher and CTF player. Intrested in GNU/Linux."
                />
                <meta
                    name="og:description"
                    content="0xNexn Resume - Security researcher and CTF player. Intrested in GNU/Linux."
                />
                <meta name="og:title" content="0xnexn Resume" />
                <meta
                    name="keywords"
                    content="Information security,Penetration Testing,Bug bounty,programming,linux,archlinux"
                />
                <meta name="og:type" content="website" />
            </Head>
            <div className={Style.resume}>
                <code>
                    <pre>{resume}</pre>
                </code>
            </div>
        </>
    );
}

export async function getStaticProps() {
    console.error(contentsDir);
    const resume = fs.readFileSync(
        path.join(contentsDir, "resume.txt"),
        "utf-8"
    );
    return {
        props: {
            resume: resume,
        },
    };
}
