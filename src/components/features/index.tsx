import React from "react";
import "./styles/style.css";
const Features = () => {
  interface featuresDataTypes {
    id: number;
    header: string;
    paragraph: string;
    img_src: string;
  }
  const featuresData: featuresDataTypes[] = [
    {
      id: 1,
      header: "Our cool steps to find the right answer",
      paragraph:
        "Fast deployment with our expert support. Boost your revenue. Reduce support operations by over 30% fast deployment with our expert support.",
      img_src: "/assests/Screenshot.png",
    },
    {
      id: 2,
      header: "Turn Conversations Into Legal Brief's",
      paragraph:
        "Fast deployment with our expert support. Boost your revenue. Reduce support operations by over 30% fast deployment with our expert support.",
      img_src: "/assests/Screenshot_2.png",
    },
    {
      id: 3,
      header: "Automate customer support",
      paragraph:
        "Fast deployment with our expert support. Boost your revenue. Reduce support operations by over 30% fast deployment with our expert support.",
      img_src: "/assests/Screenshot_3.png",
    },
  ];

  return (
    <section
      id="about"
      className="m-auto my-6 w-[90%] rounded-2xl bg-blue-100 md:w-[80%]"
    >
      <div className=" m-auto grid gap-5 py-12 md:w-[80%]">
        {featuresData.map((item) => (
          <React.Fragment key={item.id}>
            <div
              className={`xs:grid-cols-hero-md my-6 grid items-center gap-16 md:grid-cols-hero-lg md:justify-center`}
            >
              <div
                className={`${
                  item.id % 2 === 0 ? "md:order-last" : ""
                } prose lg:prose-xl m-auto flex w-[100%] flex-col justify-center gap-3`}
              >
                <h1 className="text-left text-4xl font-bold md:text-5xl">
                  {item.header}
                </h1>
                <p className="text-gray-100 text-left text-xl">
                  {item.paragraph}
                </p>
                <div className="flex justify-center md:justify-start">
                  <button
                    type={"button"}
                    className="m-auto rounded-full bg-orange-500 px-4 py-2 text-white hover:bg-orange-500/[50] sm:m-0"
                  >
                    Get Started
                  </button>
                </div>
              </div>
              {item.img_src !== "/assests/Screenshot_2.png" ? (
                <div
                  className={`m-auto flex w-[70%] justify-center rounded-2xl bg-gradient-to-br from-midnight-blue-500 to-pink-500 md:m-0 md:block md:w-[100%]`}
                >
                  <img
                    src={item.img_src}
                    alt="hero"
                    className="m-3 w-[100%] rounded-2xl object-cover md:m-12 md:w-[80%]"
                  />
                </div>
              ) : (
                <div className="screenshot">
                  <div className="screenshot-container">
                    {/* <div className="inner-container"> */}
                    <div className="circle" />
                    <img src={item.img_src} className="img" alt="hero" />
                    {/* </div> */}
                  </div>
                </div>
              )}
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Features;
