import Fuse from "fuse.js";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import Head from "next/head";
import PostCard from "../components/post-card";
import { getRecentPosts } from "./blog";
import { useState } from "react";
import SearchStyles from "../styles/modules/search.module.scss";

export default function Search({ posts }) {
    const [query, setQuery] = useState("");
    const recentPosts = getRecentPosts(posts);
    const fuse = new Fuse(recentPosts, {
        keys: ["frontmatter.title", "frontmatter.description"],
        includeScore: true,
    });

    function handleOnChange({ currentTarget }) {
        setQuery(currentTarget.value);
    }

    const results = fuse.search(query);
    const SearchResults = query
        ? results.map((results) => results.item)
        : recentPosts.slice(0, 10);

    return (
        <div className="container">
            <Head>
                <title>Search | itsnexn.me</title>
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
                <div className={SearchStyles.main}>
                    <input
                        type="search"
                        placeholder="Search"
                        value={query}
                        onChange={handleOnChange}
                    />
                </div>
                {SearchResults.slice(0, 10).map((post, index) => {
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

export async function getStaticProps() {
    const contentsDir = path.join(process.cwd(), "_contents");

    let posts = [];

    const categories = fs.readdirSync(contentsDir).map((category) => {
        // check if the category is a directory
        if (fs.lstatSync(path.join(contentsDir, category)).isDirectory()) {
            const files = fs
                .readdirSync(path.join(contentsDir, category))
                .map((file) => {
                    if (file.endsWith(".md")) {
                        const fullPath = path.join(contentsDir, category, file);
                        const fileContents = fs.readFileSync(fullPath, "utf8");
                        const { data: frontmatter } = matter(fileContents);
                        posts.push({
                            slug: file.replace(".md", ""),
                            frontmatter,
                            category,
                        });
                    }
                });
        }
    });

    return {
        props: {
            posts: posts,
        },
    };
}
