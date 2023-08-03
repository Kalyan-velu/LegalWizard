const About = () => {
  return (
    <div className="prose lg:prose-xl flex w-full items-center justify-center">
      <div className="m-auto flex w-[80%] flex-col gap-3 text-center text-gray-dark sm:w-[40%]">
        <h2 className=" text-3xl font-bold">
          Advanced Ai tool to create a legal brief like human
        </h2>
        <p className="tracking-wider">
          Writing legal brief should not be a tedius and time consuming task.
          That's why Legal Wizard created an AI-powered solution that make
          writing briefs feel like magic. Our system streamlines the writing
          process, eliminates writer's block, and allows lawers to write briefs
          faster and more efficiently than ever before. Let Legal Wizard be your
          secret weapon in the courtroom, and experience the magic yourself.
        </p>

        <button className="hover:bg-orange-500/[50] m-auto w-[50%] rounded-full bg-orange px-4 py-2 text-white">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default About;
