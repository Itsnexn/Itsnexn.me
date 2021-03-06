/* eslint-disable @next/next/no-img-element */
import "../styles/globals.scss";
import { ThemeProvider, useTheme } from "next-themes";
import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import QuoteData from "../public/static/quotes.json";

const quote = QuoteData[Math.floor(Math.random() * QuoteData.length)];
export default function MyApp({ Component, pageProps }) {
    const { theme } = useTheme();
    return (
        <ThemeProvider
            themes={["light", "dark"]}
            attribute="theme"
            defaultTheme="dark"
            enableSystem={false}
        >
            <Head>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/@typopro/web-iosevka@3.7.5/TypoPRO-Iosevka.css"
                />
                <meta name="og:image" content="/static/images/ogimage.jpg" />
            </Head>

            <div>
                <div className="main-body">
                    <img
                        className="logo"
                        src="/static/images/logo.png"
                        alt="Nexn Logo"
                    />
                    <p className="quote">
                        {quote.quote} <span>- {quote.name}</span>
                    </p>
                    <main className="body">
                        <Navbar />
                        <section className="contents">
                            <Component {...pageProps} />
                        </section>
                    </main>

                    <Footer />
                </div>
            </div>
            <script
                data-host="https://microanalytics.io"
                data-dnt="false"
                src="https://microanalytics.io/js/script.js"
                id="ZwSg9rf6GA"
                async
                defer
            ></script>
        </ThemeProvider>
    );
}
