import Image from "next/image";
import Link from "next/link";
const Hero = () => {
  return (
    <section className="my-8 hero_container">
      <div className="content grid grid-cols-2">
        <div className="hero_image">
          <Image
            src="/images/news_logo.png"
            alt="img"
            width={335}
            height={550}
          />
        </div>
        <div className="hero_content self-center">
          <div className="title">
            <h1 className="text-4x">#SHORT NEWS</h1>
          </div>
          <div className="description text-gray-500 my-8 text-xl">
            <p>
              Welcome to #ShortNews, where we prioritize your time by
              condensing the day's top stories into bite-sized updates. Say
              goodbye to sifting through lengthy articles – we're here to
              deliver only the essential information you need. With our concise
              summaries, you'll stay informed and up-to-date without sacrificing
              precious time. Experience the convenience of staying in the know,
              minus the clutter, with #ShortNews.
            </p>
          </div>
          <div className="buttons">
            <button>
              <Link href="">
                <Image
                  src="/images/android_app_store.png"
                  width={151}
                  height={45}
                  alt="Android App Store"
                />
              </Link>
            </button>

            <button className="mx-5">
              <Link href="">
                <Image
                  src="/images/ios_app_store.png"
                  width={151}
                  height={45}
                  alt="Android App Store"
                />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
