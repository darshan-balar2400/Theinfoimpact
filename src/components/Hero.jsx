import Image from "next/image";
import Link from "next/link";
const Hero = () => {
  return (
    <section className="my-8 hero_container">
      <div className="content grid grid-cols-2">
        <div className="hero_image">
          <Image
            src="/images/main_india.jpg"
            alt="img"
            width={335}
            height={550}
          />
        </div>
        <div className="hero_content self-center">
          <div className="title">
            <h1 className="text-4x">
              Stay informed in 60 words.
            </h1>
          </div>
          <div className="description text-gray-500 my-8 text-xl">
            <p>
              We understand you don’t have time to go through long news articles
              everyday. So we cut the clutter and deliver them, in 60-word
              shorts. Short news for the mobile generation.
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
