import Head from "next/head";
import CategoryCard from "../components/category-card";
import { allCategories } from "../lib/helper";

export default function Categories({ categories }) {
    return (
        <div className="container">
            <Head>
                <title>Categories | itsnexn.me</title>
                <meta
                    name="description"
                    content="0xNexn Blog - Weekly Posts about InfoSec, Penetration testing and BugBounty hunting"
                />
                <meta
                    name="og:description"
                    content="0xNexn Blog - Weekly Posts about InfoSec, Penetration testing and BugBounty hunting"
                />
                <meta name="og:title" content="0xNexn Blog" />
                <meta
                    name="keywords"
                    content="Information security,Penetration Testing,Bug bounty,programming,linux,archlinux"
                />
                <meta name="og:type" content="website" />
            </Head>
            <div>
                <h2 className="main-title">Categories</h2>
                {categories.map((category, index) => {
                    return <CategoryCard category={category} key={index} />;
                })}
            </div>
        </div>
    );
}

export async function getStaticProps() {
    const categories = allCategories();
    return {
        props: {
            categories: categories,
        },
    };
}
