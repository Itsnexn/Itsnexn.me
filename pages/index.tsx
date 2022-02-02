import Head from "next/head";
import PostCard from "../components/post-card";
import { allPosts } from "../lib/helper";

export default function Home({ posts }) {
    return (
        <div className="container">
            <Head>
                <title>0xnexn website - home page | itsnexn.me</title>
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
            <h2 className="main-title">Home</h2>
            <h4>Hey! im Sina Jafar beglu</h4>
            <p>
                I am a security researcher and CTF player. I like to develop
                useful stuff in my freetime.{"\n"}I usualy like to play with my
                GNU/Linux configurations. check out my 
                <a target="_blank"
                    href="https://github.com/itsnexn/dotfiles"
                >dotfiles</a> :){"\n"}
                My favorite linux distros are Arch and favorite programming
                languages is C.{"\n"}I have a fair expreience in C, Python, Lua,
                TypeScript/Javascript and x86_64 assembly.
            </p>
            <h2 className="main-title" style={{ marginTop: "2vh" }}>
                Recent Posts
            </h2>
            {getRecentPosts(posts)
                .slice(0, 3)
                .map((post, index) => {
                    return (
                        <PostCard
                            post={post}
                            category={post.category}
                            key={index}
                        />
                    );
                })}
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
