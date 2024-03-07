"use client";

import Link from "next/link";
import Image from "next/image";
import { CgArrowLongRight, CgArrowLongLeft } from "react-icons/cg";
import getNews from '../app/datas/getNews';
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import Skeleton from "@mui/material/Skeleton";

const ShowNews = ({ title, to,class_name,id }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [totalPage, setTotalPage] = useState(1);

  const isMobile = useMediaQuery({ maxWidth: 580 });
  const isTablet = useMediaQuery({ minwWidth: 581, maxWidth: 900 });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      if (totalPage >= 1) {
        setLoading(true);

        const response = await getNews({
          lang: "en",
          category: title,
          pageNumber: 1,
        });

        console.log()
        setData(response.data.suggested_news);

        setLoading(false);
      } else {
        setLoadMoreButtonState(false);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const prevButton = (class_) => {
    let box = document.querySelector(class_);
    let width = box.clientWidth;
    if (isMobile || isTablet) {
      box.scrollLeft = box.scrollLeft - 150;
      return;
    }
    box.scrollLeft = box.scrollLeft - 400;
  };

  const nextButton = (class_) => {
    let box = document.querySelector(class_);
    let width = box.clientWidth;
    if (isMobile || isTablet) {
      box.scrollLeft = box.scrollLeft + 150;
      return;
    }
    box.scrollLeft = box.scrollLeft + 400;
  };

  return (
    <>
      <div className="news collections_all">
        <div className="news_title">
          <h2>{title ? <span>{title}</span> : ""}</h2>
          <div className="border_hr"></div>
        </div>
        <div className="news_title_footer">
          <Link href={to}>View All</Link>
        </div>
        <div className="news_body">
          <div className={`news_body_news ${class_name}`}>
            {/* product */}
            {loading ? (
              <>
                {Array.from({ length: 10 }, () => (
                  <div className="article" style={{ opacity: "0.7" }}>
                    <div className="article_body ">
                      <Skeleton
                        //  sx={{ bgcolor: '' }}
                        variant="rounded"
                        animation="wave"
                        style={{ width: "31.5rem", height: "40rem" }}
                      />
                    </div>
                    <div className="article_footer">
                      <Skeleton
                        animation="wave"
                        className="description"
                        style={{ height: "5rem" }}
                      />
                      <Skeleton
                        animation="wave"
                        className="price"
                        style={{
                          width: "60%",
                          height: "100%",
                          height: "2rem",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <>
                {data &&
                  data.map((article, index) => {
                    return (
                    article.news_obj ? <Link
                        href={`/readnow/${title}`}
                        className="article"
                        id={title + index}
                        key={index}
                      >
                        <div className="article_body">
                          <img
                            src={`${
                              article.news_obj ? article.news_obj.image_url : ""
                            }`}
                      
                          />
                        </div>
                        <div className="article_footer">
                          <div className="colors"></div>
                          <h5 className="description">
                            {article.news_obj ? article.news_obj.title : ""}
                          </h5>
                        </div>
                      </Link> : ""
                    );
                  })}
              </>
            )}
          </div>
        </div>
        {loading ? (
          ""
        ) : (
          <div className="news_footer">
            <span>
              <CgArrowLongLeft onClick={() => prevButton(`.${class_name}`)} />
            </span>
            <span>
              {" "}
              <Image
                src="/images/final_logo_icon.png"
                alt="loading"
                title="loading"
                width={50}
                height={50}
              />
            </span>
            <span>
              <CgArrowLongRight onClick={() => nextButton(`.${class_name}`)} />
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default ShowNews;
