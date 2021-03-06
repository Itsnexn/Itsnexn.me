import Head from "next/head";
import PostCard from "../../../components/post-card";
import { useRouter } from "next/router";
import { getFilesFromCategory, allCategories } from "../../../lib/helper";

export default function Categories({ posts }) {
    const router = useRouter();
    const category = router.query.category;

    return (
        <div className="container">
            <Head>
                <title>{category} | itsnexn.me</title>
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
                <h2 className="main-title">{category}</h2>
                {posts.map((post, index) => {
                    return (
                        <PostCard post={post} category={category} key={index} />
                    );
                })}
            </div>
        </div>
    );
}

export async function getStaticPaths() {
    const paths = allCategories().map( category => {
        return {
            params: {
                category: category.name
            }
        }
    })
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params: { category } }) {
    const posts = getFilesFromCategory(category);
    return {
        props: {
            posts: posts,
            category: category,
        },
    };
}
