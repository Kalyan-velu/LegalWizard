import React from "react";
const Footer = () => {
  const links = ["Home", "About", "Pricing", "Contact"];
  return (
    <footer className="mt-7 flex w-[100%] flex-col bg-persian-100 p-12">
      <div className="flex w-[100%] flex-col bg-persian-100 md:m-auto md:w-[90%]">
        <div className="grid grid-cols-1 gap-3 py-12 md:grid-cols-2">
          <h3 className="text-center text-4xl font-bold text-white">
            The future of legal AI
          </h3>
          <div className="grid w-full gap-2 md:w-[60%]">
            <p className="text-xl text-gray">
              Fast deployment with our expert support. Boost your revenue.
              Reduce support operations by over 30% fats deployment with our
              expert support.
            </p>
            <div className="w-[fit-content] justify-self-center md:justify-self-start">
              <button
                type="button"
                className="text-black h-12 rounded-full bg-orange-500 px-3 py-3 hover:bg-orange-500/[50]"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div className="divider" />
        {/* <div className="flex w-[100%] flex-col gap-3 pt-12 md:flex-row"> */}
        <div className="flex w-[100%] flex-col items-center justify-between gap-3 pt-12 md:flex-row">
          <img
            src={"/assests/Logo.png"}
            alt="logo"
            className=" w-[3rem]  justify-self-stretch"
          />
          <ul className="flex w-[50%] flex-col justify-around md:w-[20%] md:flex-row md:justify-evenly">
            {links.map((link) => (
              <React.Fragment key={link}>
                <li className="text-md text-center font-bold text-white">
                  <a
                    key={link}
                    href={`#${link?.toLocaleLowerCase()}`}
                    className="text-white hover:text-gray"
                  >
                    {link}
                  </a>
                </li>
              </React.Fragment>
            ))}
          </ul>
          <div className="flex justify-evenly justify-self-stretch md:w-[fit-content]">
            <div className="mr-3 flex h-[2rem] w-[2rem] items-center justify-center rounded-full bg-white">
              <img
                src={"/assests/facebook-svgrepo-com.svg"}
                alt="facebook"
                className="h-[1.5rem] w-[1.5rem] hover:cursor-pointer"
                onClick={() => window.open("https://www.facebook.com/")}
                style={{ cursor: "pointer" }}
                title="facebook"
              />
            </div>

            <div className="mr-3 flex h-[2rem] w-[2rem] items-center justify-center rounded-full bg-white">
              <img
                src={"/assests/instagram.svg"}
                alt="instagram"
                className="h-[1.5rem] w-[1.5rem] hover:cursor-pointer"
                onClick={() => window.open("https://twitter.com/")}
                style={{ cursor: "pointer" }}
                title="twitter"
              />
            </div>
            <div className="mr-3 flex h-[2rem] w-[2rem] items-center justify-center rounded-full bg-white">
              <img
                src={"/assests/twitter.svg"}
                alt="twitter"
                className="h-[1.5rem] w-[1.5rem] hover:cursor-pointer"
                onClick={() => window.open("https://instagram.com/")}
                style={{ cursor: "pointer" }}
                title="instagram"
              />
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </footer>
  );
};

export default Footer;
