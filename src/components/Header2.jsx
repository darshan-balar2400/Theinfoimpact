"use client";

import { useRouter } from "next/navigation";
const Header2 = () => {
  const router = useRouter();
  // all categories array
  let categories = [
    "business",
    "politics",
    "sports",
    "technology",
    "startup",
    "entertainment",
    "world",
    "science",
    "travel",
    "miscellaneous",
    "fashion",
    "education",
  ];

  return (
    <div className="header2_container">
      <ul className="categories">
        {categories.map((value, index) => {
          return (
            <li
              className="category"
              onClick={() => router.push(`/readnow/${value}`)}
              key={index}
            >
              {value}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Header2;
