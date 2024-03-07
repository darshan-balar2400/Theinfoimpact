import ShowNews from "@/components/ShowNews";

const News = () => {
  return (
    <div className="news_container">
      <div className="news_content">
        <ShowNews
          title="startup"
          to="/readnow/startup"
          class_name="startup"
          id="startup"
        />

        <ShowNews
          title="education"
          to="/readnow/education"
          class_name="education"
          id="education"
        />

        <ShowNews
          title="technology"
          to="/readnow/technology"
          class_name="technology"
          id="technology"
        />

        <ShowNews
          title="entertainment"
          to="/readnow/entertainment"
          class_name="entertainment"
          id="entertainment"
        />

        <ShowNews
          title="politics"
          to="/readnow/politics"
          class_name="politics"
          id="politics"
        />

        <ShowNews
          title="sports"
          to="/readnow/sports"
          class_name="sports"
          id="sports"
        />

        <ShowNews
          title="fashion"
          to="/readnow/fashion"
          class_name="fashion"
          id="fashion"
        />

        <ShowNews
          title="travel"
          to="/readnow/travel"
          class_name="travel"
          id="travel"
        />

        <ShowNews
          title="world"
          to="/readnow/world"
          class_name="world"
          id="world"
        />

        <ShowNews
          title="national"
          to="/readnow"
          class_name="national"
          id="national"
        />

        <ShowNews
          title="science"
          to="/readnow/science"
          class_name="science"
          id="science"
        />

        <ShowNews
          title="miscellaneous"
          to="/readnow/miscellaneous"
          class_name="miscellaneous"
          id="miscellaneous"
        />
      </div>
    </div>
  );
};

export default News;
