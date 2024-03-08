"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import getNews from "../../datas/getNews";
import LoadingContainer from "@/components/LoadingContainer";
import { useMediaQuery } from "react-responsive";
import debounce from "lodash/debounce";
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

  useEffect(() => {
    const debouncedHandleScroll = debounce(handleScroll, 500); // Increase debounce delay to 500 milliseconds

    let lastFetchTime = performance.now(); // Initialize last fetch time

    function handleScroll() {
      if (!loading) {
        const currentTime = performance.now();

        const container = articlesContainerRef.current;
        if (!container) return;
        // Check if at least 500 milliseconds have passed since the last fetch
        if (currentTime - lastFetchTime > 500) {
          let scrollHeight = articlesContainerRef.current.scrollHeight;
          let scrollTop = parseInt(articlesContainerRef.current.scrollTop);

          let trigger = parseInt((80 / 100) * scrollHeight);

          if (scrollTop >= trigger) {
            if (!loading && pageNumber < totalPage) {
              setPageNumber((prevPageNumber) => prevPageNumber + 1);

              lastFetchTime = currentTime; // Update last fetch time
            }
          }
        }
      }
    }

    const container = articlesContainerRef.current;
    if (container) {
      articlesContainerRef.current.addEventListener(
        "scroll",
        debouncedHandleScroll
      );

      return () => {
        articlesContainerRef.current &&
          articlesContainerRef.current.removeEventListener(
            "scroll",
            debouncedHandleScroll
          );
      };
    }
  }, [totalPage, loading, pageNumber]);

  useEffect(() => {
    if (pageNumber >= 0) {
      fetchData("notnew");
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
          category: category ? category : "national",
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
