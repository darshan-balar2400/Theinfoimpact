"use client";
import Image from "next/image";
import Link from "next/link";
import cheerio from "cheerio";
import axios from "axios";
import React, { useState, useEffect } from "react";
const inshorts = require("inshorts-news-api");
import https from "https";
import getNews from "../datas/getNews";

const ReadNow = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let response = await getNews({
        lang: "en",
        category: "national",
        pageNumber: 1,
      });
      setData(response.data.suggested_news);

      console.log(response.data.suggested_news);

      console.log(response);
    };

    fetchData();
  }, []);

  return (
    <section className=" read_container">
      <div className="articles">
        <div className="content">
          {data.map((article, index) => {
            return (
              <div className="article">
                <div className="left">
                  <div className="image">
                    <img
                      src={`${article.news_obj ? article.news_obj.image_url : ""}`}
                      width={150}
                      height={300}
                      alt="article_image"
                    />
                  </div>
                </div>
                <div className="right">
                  <div className="title">
                    <h1>{article.news_obj ? article.news_obj.title : ""}</h1>
                    <div className="subtitle">
                      <h4>
                        {" "}
                        <span className="author">Short by {article.news_obj ? article.news_obj.author_name : ""} </span>/
                        9:23pm on Tuesday, 6 Feburuary 2024 /{" "}
                        <span className="source">
                          <Link href={article.news_obj ? article.news_obj.source_url : ""}>Read more at ICC</Link>
                        </span>
                      </h4>
                    </div>
                  </div>

                  <div className="description">
                    <p>{article.news_obj ? article.news_obj.content : ""}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ReadNow;
