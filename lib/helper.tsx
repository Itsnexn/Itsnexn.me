import fs from "fs";
import path from "path";
import matter from "gray-matter";


const contentsDir = path.join(process.cwd(), process.env.CONTENTS_DIR);

export function allCategories()  {
    let categories = [];

    fs.readdirSync(contentsDir).map((category) => {
        // check if the category is a directory
        if (fs.lstatSync(path.join(contentsDir, category)).isDirectory()) {
            categories.push({ name: category , fileCount: fs.readdirSync(path.join(contentsDir, category)).length});
        }
    });
    return categories;
}

export function allPosts() {
    let posts = [];

    fs.readdirSync(contentsDir).map((category) => {
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
    return posts;
}

export function getPost(category) {
    let params = [];

    fs.readdirSync(contentsDir).map((category) => {
        // check if the category is a directory
        if (fs.lstatSync(path.join(contentsDir, category)).isDirectory()) {
            const files = fs
                .readdirSync(path.join(contentsDir, category))
                .map((file) => {
                    if (file.endsWith(".md")) {
                        const fullPath = path.join(contentsDir, category, file);
                        const fileContents = fs.readFileSync(fullPath, "utf8");
                        const { data: frontmatter, content } =
                            matter(fileContents);
                        params.push({
                            slug: file.replace(".md", ""),
                            frontmatter,
                            category,
                            content,
                        });
                    }
                });
        }
    });
    return params;
}

export function getFilesFromCategory(category) {
    let posts = [];

    fs.readdirSync(contentsDir).map((file) => {
        if (file.endsWith(".md")) {
            const fullPath = path.join(contentsDir, file);
            const fileContents = fs.readFileSync(fullPath, "utf8");
            const { data: frontmatter } = matter(fileContents);
            posts.push({
                slug: file.replace(".md", ""),
                frontmatter,
            });
        }
    });
    return posts;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    allCategories,
    allPosts,
    getPost,
    getFilesFromCategory
}