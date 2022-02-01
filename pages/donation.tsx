import Head from "next/head";

export default function Donation() {
    return (
        <>
            <Head>
                <title>0xnexn website - Donation page | itsnexn.me</title>
                <meta
                    name="description"
                    content="0xNexn Website - Security researcher and CTF player. Intrested in GNU/Linux."
                />
                <meta
                    name="og:description"
                    content="0xNexn Website - Security researcher and CTF player. Intrested in GNU/Linux."
                />
                <meta name="og:title" content="0xnexn website" />
                <meta
                    name="keywords"
                    content="Information security,Penetration Testing,Bug bounty,programming,linux,archlinux"
                />
                <meta name="og:type" content="website" />
            </Head>
            <div className="container">
                <h2 className="main-title">Donation</h2>
                <p>
                    I will never ask for donations but they are greatly
                    appreciated!{"\n\n"}
                    you can donate me via:{"\n"}
                    <span style={{ color: "var(--red)" }}>BTC: </span>
                    bc1qa4eyh4g4ree3s3uexjp9uk3rxxmugpzpefrtkz{"\n"}
                    <span style={{ color: "var(--red)" }}>ETH: </span>
                    0x640a9B1AF6738FBE27cf72ADcffa2233a685312c{"\n"}
                </p>
            </div>
        </>
    );
}
