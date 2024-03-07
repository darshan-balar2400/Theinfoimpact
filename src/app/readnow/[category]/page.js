"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import getNews from "../../datas/getNews";
import LoadingContainer from "@/components/LoadingContainer";
import { useMediaQuery } from "react-responsive";
const Category = ({ params }) => {
  let name = params.category;

  const isMobile = useMediaQuery({ minWidth: 0, maxWidth: 601 });

  // hooks
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [category, setCategory] = useState(name);
  const [totalPage, setTotalPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [loadMoreButtonState, setLoadMoreButtonState] = useState(true);
  const [existLoading, setExistLoading] = useState(false);

  const lastArticleRef = useRef(null);
  const articlesContainerRef = useRef(null);

  const handleKeyDown = (event) => {
    if (event.key === "ArrowDown") {
      const articlesContainer = articlesContainerRef.current;
      const articles = articlesContainer.querySelectorAll(".article");

      const windowHeight = window.innerHeight;
      const containerTop = articlesContainer.getBoundingClientRect().top;

      let lastVisibleIndex = -1;

      articles.forEach((article, index) => {
        const rect = article.getBoundingClientRect();
        const isVisible = rect.top - containerTop < windowHeight;

        if (isVisible) {
          lastVisibleIndex = index;
        }
      });

      if (lastVisibleIndex !== -1 && articles.length - lastVisibleIndex === 4) {
        getMoreNews();
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [data]);

  useEffect(() => {
    if (pageNumber > 0) {
      if (pageNumber == 1) {
        fetchData("new");
      } else {
        fetchData("notnew");
      }
    }
  }, [pageNumber]);

  // actual fetch data function
  const fetchData = async (value) => {
    try {
      if (pageNumber <= totalPage) {
        if (value == "new") {
          setLoading(true);
          setLoadMoreButtonState(false);
        } else {
          setExistLoading(true);
        }

        const response = await getNews({
          lang: "en",
          category: category ? category : categories[0],
          pageNumber: pageNumber,
        });

        if (value == "new") {
          setData(response.data.suggested_news);
        } else {
          setData((prevData) => [...prevData, ...response.data.suggested_news]);
        }

        setLoadMoreButtonState(true);
        setTotalPage(() => response.data.total_page);
        setLoading(false);
        setExistLoading(false);
      } else {
        setLoadMoreButtonState(false);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getMoreNews = () => {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  };

  let loadingStyle = {
    fontSize: "15px",
  };

  return (
    <>
      <section className="read_container">
        <div className="articles" ref={articlesContainerRef}>
          {loading == true ? (
            ""
          ) : (
            <div className="articles_title">
              <div className="title">
                <h1>{category}</h1>
              </div>
              <div className="articles_img">
                <img src="/images/final_logo_icon.png" />
              </div>
            </div>
          )}
          <div className="content">
            {loading == true ? (
              <LoadingContainer />
            ) : (
              data.map((article, index) =>
                article.news_obj ? (
                  <div
                    key={index}
                    className="article"
                    ref={index === data.length - 1 ? lastArticleRef : null}
                    style={{ loadingStyle }}
                  >
                    <div className="left">
                      <div className="image">
                        <img
                          src={
                            article.news_obj ? article.news_obj.image_url : ""
                          }
                          width={150}
                          height={300}
                          alt="article_image"
                        />
                      </div>
                    </div>
                    <div className="right">
                      <div className="title">
                        <h1>
                          {article.news_obj ? article.news_obj.title : ""}
                        </h1>
                        <div className="subtitle">
                          <h4>
                            Short by{" "}
                            {article.news_obj
                              ? article.news_obj.author_name
                              : ""}{" "}
                            / 9:23pm on Tuesday, 6 February 2024 /
                            <span className="source">
                              <Link
                                href={
                                  article.news_obj
                                    ? article.news_obj.source_url
                                    : ""
                                }
                                target="_blank"
                              >
                                Read More At{" "}
                                {article.news_obj
                                  ? article.news_obj.source_name
                                  : ""}
                              </Link>
                            </span>
                          </h4>
                        </div>
                      </div>
                      <div className="description">
                        <p>
                          {article.news_obj ? article.news_obj.content : ""}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )
              )
            )}{" "}
          </div>
          {loadMoreButtonState && loading == false ? (
            <button className="readnow_button" onClick={() => getMoreNews()}>
              {existLoading ? (
                <span className="buttonloader"></span>
              ) : (
                "Load More"
              )}
            </button>
          ) : (
            ""
          )}
        </div>
      </section>
    </>
  );
};

export default Category;