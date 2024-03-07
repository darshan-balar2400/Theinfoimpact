"use client";

import { useEffect } from "react";
import Footer from "@/components/Footer";
const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <div className="about_us_container">
        <div className="about_us_content">
          <div className="about_us_title">
            <div className="title">
              <h1>About Us</h1>
            </div>

            <div className="about_us_img">
              <img src="/images/final_logo_icon.png" />
            </div>
          </div>
          <div className="about_us_body">
            <div className="about_us_description">
              <p>
                Shivay, incepted in the year 2012 have rich experience in women
                apparels. Shivay is well known destination for ladies apparels &
                global online clothing store. Which are one of the leading
                wholesaler & Exporter of women apparels across the world, that
                symbolizes quality and innovation across a wide range of
                products such as sarees, salwar kameez, kurtis, western wear,
                lehengas, gowns, readymade suits, bottom wear leggings, pants,
                plazzos, tops, lingerie, abayas, kaftans, kids wear, and
                handlooms bed-sheets. Also offer different range of fabrics such
                as viscose, cotton, polyester, silk, georgette, rayon and
                jacquard.
              </p>

              <p>
                We cater to markets across the world such as Europe, Middle
                East, Malaysia, Bangladesh, Nepal, Sri Lanka, South Africa,
                United Kingdom, Mauritius, Tanzania, USA, Canada, UAE,
                Singapore, Australia, Germany, Italy and South East Asia. We
                have the requisite infrastructure to maintain to process
                oriented delivery mechanisms and stringent quality control
                measures to ensure quality and timely delivery of consignments
                and best shipping rates & partners.
              </p>

              <p>
                Women and girls love to dress. They like to stock up their
                closet with all kinds of dresses and accessories. The entry of
                e-commerce websites and online shopping portals have given women
                access to millions of clothes of varied patterns, size, and
                colors. One of the best sites to visit if you want to buy ethnic
                wear as well as western wear online in India is Shivay
                Wholesaler & Exporter of Women Ethnic Wear Catalog Sarees,
                Salwar Kameez, Kurtis, Lehengas, Kids Wear, plazzo, kurti pant,
                petticoat, Bedsheets, lehenga choli, partywear gowns, readymade
                blouse Etc.
              </p>
            </div>

            <div className="team">
              <div className="team-img">
                <img src="/images/aboutus/founder2.jpg" />
              </div>
              <div className="team-name">
                <h1>Darshan Balar</h1>
              </div>
              <div className="team-role">
                <h2>CEO, Founder</h2>
              </div>
              <div className="team-description">
                <p>
                  Women and girls love to dress. They like to stock up their
                  closet with all kinds of dresses and accessories. The entry of
                  e-commerce websites and online shopping portals have given
                  women access to millions of clothes of varied patterns, size,
                  and colors. One of the best sites to visit if you want to buy
                  ethnic wear as well as western wear online in India is Shivay
                  Wholesaler & Exporter of Women Ethnic Wear Catalog Sarees,
                  Salwar Kameez, Kurtis, Lehengas, Kids Wear, plazzo, kurti
                  pant, petticoat, Bedsheets, lehenga choli, partywear gowns,
                  readymade blouse Etc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default About;
