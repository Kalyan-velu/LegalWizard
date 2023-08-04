import Navbar from "./Navbar.tsx";
import wizard from "/assests/wizard.png";
import "./styles/styles.css";
import HeroDetails from "./HeroDetails.tsx";
const Hero = () => {
  return (
    <>
      <section id="home" className="hero">
        <div className="relative mx-auto my-0">
          <Navbar />
          <div className="xs:grid-cols-hero-md m-auto grid  items-center md:h-[calc(100vh-5vh-13rem)] md:w-[80%] md:grid-cols-hero-lg md:justify-center">
            <div className="m-auto grid w-[90%] items-center justify-center gap-3 py-16 text-white md:w-[100%]">
              <div className="prose lg:prose-xl m-auto flex w-[90%] flex-col justify-center gap-3">
                <h1 className="text-left text-4xl font-bold md:text-5xl">
                  Unlock the Magic of AI in Your Legal Writings
                </h1>
                <p className="text-left text-xl text-gray">
                  A platform that allows you to build and lauch Legal brief
                  easily by chat without coding
                </p>
                <div className="justify-left m-auto flex w-[90%] flex-col items-center gap-3 md:w-[100%] md:flex-row">
                  <div className=" w-[100%] rounded-full bg-gray  focus:outline-none focus:ring-2 focus:ring-blue-500 sm:w-[60%]">
                    <input
                      id="input"
                      type="text"
                      placeholder="Enter your email"
                      className="w-full rounded-full bg-gray-dark px-2 py-3 focus:outline-none"
                    />
                  </div>

                  <button
                    type="button"
                    className="text-black h-12 rounded-full bg-orange-500 px-3 py-3 hover:bg-orange-500/[50]"
                  >
                    Request a Demo
                  </button>
                </div>
              </div>
            </div>
            <div className="relative m-auto flex w-[100%] justify-center">
              <img src={wizard} alt="Wizard" className="w-[50%] md:w-[60%]" />
            </div>
          </div>
        </div>
      </section>
      <HeroDetails />
    </>
  );
};

export default Hero;
