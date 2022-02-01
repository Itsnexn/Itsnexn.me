import NavbarStyle from "../styles/modules/navbar.module.scss";
import { useTheme } from "next-themes";
import Link from "next/link";

let Navbar = () => {
  const urls = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: "Categories", url: "/categories" },
    { name: "Search", url: "/search" },
  ];

  const { theme, themes, setTheme } = useTheme();

  // select tag value handler
  const handleSelectChange = (e) => {
    setTheme(e.target.value);
  };

  return (
    <nav className={ NavbarStyle.container }>
      <div className={ NavbarStyle.navbar }>
        <ul className={ NavbarStyle.main }>
          {urls.map((item, index) => {
            return (
              <li key={index} className={NavbarStyle.item}>
                <Link href={item.url}>
                  <a className={NavbarStyle.link}>{item.name}</a>
                </Link>
              </li>
            );
          })}
        </ul>
          <select className={ NavbarStyle.themeSelector } value={ theme } onChange={ handleSelectChange }>
            {
              themes.map((theme, index) => {
                return (
                  <option key={ index } value={ theme }>{ theme }</option>
                );
              })
            }
          </select>
      </div>
    </nav>
  );
};

export default Navbar;