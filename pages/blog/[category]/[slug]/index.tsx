import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { marked } from "marked";
import Head from "next/head";
import PostStyles from "../../../../styles/modules/postpage.module.scss";
import hljs from "highlight.js";
import { useRouter } from "next/router";
import Link from "next/link";
import { allPosts } from "../../../../lib/helper";

export default function PostPage({ frontmatter, slug, content }) {
    const router = useRouter();
    const category = router.query.category;

    marked.setOptions({
        renderer: new marked.Renderer(),
        highlight: function (code, lang) {
            const language = hljs.getLanguage(lang) ? lang : "plaintext";
            return hljs.highlight(code, { language }).value;
        },
        langPrefix: "hljs language-", // highlight.js css expects a top-level 'hljs' class.
        pedantic: false,
        gfm: true,
        breaks: false,
        sanitize: false,
        smartLists: true,
        smartypants: false,
        xhtml: false,
    });

    return (
        <>
            <Head>
                <title>{frontmatter.title}</title>
                <meta name="og:title" content={frontmatter.title} />
                <meta name="og:type" content="article" />
                {frontmatter.tags ? (
                    <meta
                        name="keywords"
                        content={frontmatter.tags.join(",")}
                    />
                ) : null}
                <meta name="description" content={frontmatter.description} />
                <meta name="og:description" content={frontmatter.description} />
            </Head>

            <div className={PostStyles.info}>
                <div className={PostStyles.left}>
                    Written by{" "}
                    <span className={PostStyles.author}>
                        {frontmatter.author}
                    </span>{" "}
                    {DateFormatter(frontmatter.date)}
                </div>
                <div className={PostStyles.right}>
                    {readTime(content)} Min read
                </div>
            </div>

            <div className={PostStyles.container}>
                <article className={PostStyles.postbody}>
                    <h1 className={PostStyles.title}>{frontmatter.title}</h1>
                    <div
                        className={PostStyles.postcontent}
                        dangerouslySetInnerHTML={{
                            __html: marked.parse(content),
                        }}
                    />
                </article>
                <div className={PostStyles.postfooter}>
                    <div className={PostStyles.tagsSection}>
                        <h3>Tags: </h3>
                        <div className={PostStyles.tags}>
                            {frontmatter.tags ? (
                                frontmatter.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className={PostStyles.tag}
                                    >
                                        {tag}
                                    </span>
                                ))
                            ) : (
                                <span className={PostStyles.notags}>
                                    No tags
                                </span>
                            )}
                        </div>
                    </div>
                    <div className={PostStyles.other}>
                        <a
                            href={`https://github.com/itsnexn/itsnexn.me/edit/main/_contents/${category}/${slug}.md`}
                        >
                            Edit on Github
                        </a>
                        {" • "}
                        <Link href="/donation">
                            <a>Donate</a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

function readTime(content) {
    // Source:
    // https://bvgsoftware.com/blog/read-time-feature-for-react-markdown-blog/
    const WPS = 275 / 60;
    let images = 0;
    const regex = /\w/;

    let words = content.split(" ").filter((word) => {
        if (word.includes("<img")) {
            images += 1;
        }
        return regex.test(word);
    }).length;

    let imageAdjust = images * 4;
    let imageSecs = 0;
    let imageFactor = 12;

    while (images) {
        imageSecs += imageFactor;
        if (imageFactor > 3) {
            imageFactor -= 1;
        }
        images -= 1;
    }

    const minutes = Math.ceil(((words - imageAdjust) / WPS + imageSecs) / 60);
    return minutes;
}

const DateFormatter = (date) => {
    return (
        <>
            on{" "}
            <span
                className={PostStyles.date}
                title={new Date(date).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                })}
            >
                {date}
            </span>
        </>
    );
};

export async function getStaticPaths() {
    const params = allPosts();

    return {
        paths: params.map((param) => {
            return {
                params: {
                    slug: param.slug,
                    category: param.category,
                },
            };
        }),
        fallback: false,
    };
}

export async function getStaticProps({ params: { category, slug } }) {
    const markdownWithMeta = fs.readFileSync(
        path.join("_contents", category, slug + ".md"),
        "utf-8"
    );

    let { data: frontmatter, content } = matter(markdownWithMeta);
    const { date, author } = frontmatter;

    // Date to epoch time cuz its cool
    frontmatter.date = new Date(date).getTime();

    // Check for author
    frontmatter.author = author || "Anonymous";

    return {
        props: {
            frontmatter,
            slug,
            content,
        },
    };
}
