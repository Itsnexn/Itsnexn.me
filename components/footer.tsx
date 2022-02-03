import React from "react";
import FooterStyle from "../styles/modules/footer.module.scss";
import Link from "next/link";

export default function footer() {
  const social_media = [
    { name: "Twitter", url: "https://twitter.com/itsnexn" },
    { name: "Linkedin", url: "https://linkedin.com/in/itsnexn" },
    { name: "reddit", url: "https://www.reddit.com/user/0xNexn" },
    { name: "Github", url: "https://github.com/itsnexn" },
    { name: "CTFTime", url: "https://ctftime.org/user/105366" }
  ];
  return (
    <>
      <footer className={FooterStyle.container}>
        <div className={FooterStyle.left}>
          <div className={FooterStyle.socialContainer}>
            {social_media.map((item, index) => {
              return (
                <li key={index} className={FooterStyle.socialMedia}>
                  <Link href={item.url}>
                    <a className={FooterStyle.link}>{item.name}</a>
                  </Link>
                </li>
              );
            })}
          </div>
        </div>
        <div className={FooterStyle.right}>
          copyright 0xnexn &copy; 2020-{new Date().getFullYear()}
        </div>
      </footer>
    </>
  );
}
