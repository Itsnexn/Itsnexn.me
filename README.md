<!-- Made by Nexn with VIM :) -->
<p align="center">
  <img height=90 src="/public/static/images/logo.png">
</p>

<div align="center">
    <div>
        <img src="https://img.shields.io/github/stars/itsnexn/itsnexn.me?style=flat-square"/>
        <img src="https://img.shields.io/github/languages/count/itsnexn/itsnexn.me?style=flat-square"/>
        <img src="https://img.shields.io/github/license/itsnexn/itsnexn.me?style=flat-square" />
        <img src="https://img.shields.io/netlify/52bb8c6d-3f75-4a08-b0a5-5fba5b82261e?style=flat-square" />
    </div>
<p><strong><a href="https://itsnexn.me">Itsnexn.me</a></strong> Powered by <strong>Next.js, TypeScript, Markdown</strong> and <strong>VIM</strong></p>
</div>

---

**Framework:** [Next.js](https://nextjs.org/)
**Deployment:** [Netlify](https://www.netlify.com/)
**Contents:** [Markdown](https://www.markdownguide.org/)
**Styling:** [Sass](https://sass-lang.com/)

## Overview

- `_contents/*` - Categories.
  - `[category]/*.md` Markdown files/Posts for that specific category.
- `lib/*` - helpers || small libraries that i wrote.
- `styles/*` - Global styling and styling modules.
- `pages/*` - All other static pages.
- `pages/blog/*` - Static pre-rendered blog pages using marked.
- `public/*` - Static files. including logo, og:image and fonts.

## Running Locally

```
$ git clone https://github.com/itsnexn/itsnexn.me.git
$ cd itsnexn.me
$ yarn
$ yarn dev
```

## Create new post
i wrote small script to make this easy :D

```
$ python3 new-post.py
# OR
$ ./new-post.py
```

## Cloning / Forking
Please review the **[license](./LICENSE.txt)** and remove all of my personal information (blog posts, images, etc.).
