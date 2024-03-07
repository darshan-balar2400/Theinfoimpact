"use client";

import Image from "next/image";
import Link from "next/link";
import { CgMenuLeftAlt } from "react-icons/cg";
import Header2 from "@/components/Header2";
import { useRef } from "react";
import { IoReaderOutline } from "react-icons/io5";
import { MdArrowForwardIos } from "react-icons/md";
import { AiOutlineCloseSquare } from "react-icons/ai";
const Header = () => {
  const MobileMenu = useRef(null);

  const ShowMobileMenu = () => {
    MobileMenu.current.style.width = "100%";
  };

  const CloseMobileMenu = () => {
    MobileMenu.current.style.width = "0%";
  };

  return (
    <>
      <nav className="navbar_container">
        <div className="navbar_content grid grid-cols-2 items-center">
          <div className="logo">
            <div className="content">
              <div
                className="mobile_menu mx-5"
                onClick={() => ShowMobileMenu()}
              >
                <CgMenuLeftAlt />
              </div>
              <Link href="/">
                <div className="logo_title">
                  <Image
                    src="/images/final_logo_icon.png"
                    width={50}
                    height={50}
                  />
                  <h1>
                    THEINFO<span className="upper">I</span>MPACT
                  </h1>
                </div>
              </Link>
            </div>
          </div>
          <div className="links">
            <ul className="items">
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
            <div
              id="google_translate_element"
              className="google-translate-container ml-12"
            ></div>
          </div>
        </div>
        <Header2 />
      </nav>
      <nav className="mobile_navbar" ref={MobileMenu}>
        <div className="mobile_navbar_content">
          <div className="close_menu">
            <AiOutlineCloseSquare onClick={() => CloseMobileMenu()} />
          </div>
          <div className="logo_container">
            <Link href="/">
              <Image src="/images/final_logo_icon.png" width={80} height={80} />
            </Link>
          </div>
          <div className="links_container">
            <ul>
              <li>
                <Link href="/readnow">
                  <span className="left">
                    <Image
                      src="/images/mobile/news.png"
                      width={35}
                      height={35}
                    />
                  </span>
                  <span className="linkname">Read Now</span>
                  <span className="right">
                    <MdArrowForwardIos />
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <span className="left">
                    <Image
                      src="/images/mobile/abouty.png"
                      width={35}
                      height={35}
                    />
                  </span>
                  <span className="linkname">Blog</span>
                  <span className="right">
                    <MdArrowForwardIos />
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="left">
                    <Image
                      src="/images/mobile/info.png"
                      width={35}
                      height={35}
                    />
                  </span>
                  <span className="linkname">About Us</span>
                  <span className="right">
                    <MdArrowForwardIos />
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="left">
                    <Image
                      src="/images/mobile/support.png"
                      width={35}
                      height={35}
                    />
                  </span>
                  <span className="linkname">Contact Us</span>
                  <span className="right">
                    <MdArrowForwardIos />
                  </span>
                </Link>
              </li>
              <div
                id="google_translate_element"
                className="google-translate-container ml-12"
              ></div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
