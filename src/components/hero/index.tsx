import Navbar from "./Navbar"

const Hero = () => {

  return (
    <section className="h-[100%] bg-gradient-to-r from-persian-100 to-persian-300">
      <Navbar/>
      <div className="grid h-[calc(100vh-5vh-13rem)] md:grid-cols-hero-lg xs:grid-cols-hero-md justify-center items-center">
      <div className="w-[100%] text-white xs:mt-24 grid justify-center gap-3 items-center">
         <div className="w-[100%] justify-center prose lg:prose-xl">
            <h1 className="text-3xl font-bold text-center">
              Unlock the Magic of AI in Your Legal Writings
            </h1>
            <p className="text-xl text-center">
              A platform that allows you to build and lauch Legal brief easily by chat without coding
            </p>
         </div>
         <div className="w-[100%] flex justify-center">
            <button type="button" id="create-todo-button" className="bg-orange hover:bg-orange-500/[50] text-black px-4 py-2 rounded-2xl">Create Now</button>
         </div>
      </div>
      <div className="m-auto relative">
        Hello
      </div>
      </div>
    </section>
  )
}

export default Hero
