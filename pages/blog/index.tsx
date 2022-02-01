import Head from "next/head";
import PostCard from "../../components/post-card";
import { allPosts } from "../../lib/helper";

export default function Blog({ posts }) {
    return (
        <div className="container">
            <Head>
                <title>0xNexn Blog - Blog Page | itsnexn.me</title>
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
                <h2 className="main-title">Recent Posts</h2>
                {getRecentPosts(posts).map((post, index) => {
                    return (
                        <PostCard
                            post={post}
                            category={post.category}
                            key={index}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export function getRecentPosts(posts) {
    return posts.sort((a, b) => {
        return (
            new Date(b.frontmatter.date).valueOf() -
            new Date(a.frontmatter.date).valueOf()
        );
    });
}

export async function getStaticProps() {
    const posts = allPosts();

    return {
        props: {
            posts: posts,
        },
    };
}
