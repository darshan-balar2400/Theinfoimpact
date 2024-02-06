import Image from "next/image";
import Link from "next/link";
import { CgMenuLeftAlt } from "react-icons/cg";
const Header = () => {
  return (
    <nav className="navbar_container flex justify-center items-center p-2">
      <div className="navbar_content content grid grid-cols-2 items-center w-[100%]">
        <div className="logo">
          <div className="content">
            <div className="mobile_menu mx-5">
              <a href="#">
                <CgMenuLeftAlt />
              </a>
            </div>
            <div className="image">
              <Link href="/"><Image
                src="/images/logo_inshorts.png"
                width={215}
                height={90}
                alt="logo"
              /></Link>
            </div>
          </div>
        </div>
        <div className="links justify-self-end">
          <ul className="flex">
            <li className="link">
              <Link href="/readnow">Read Now </Link>
            </li>
            <li className="link">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="link">
              <Link href="/about">About Us</Link>
            </li>
            <li className="link">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
