const HeroDetails = () => {
  return (
    <div className="prose lg:prose-xl mx-auto my-12 flex w-[100%] w-full items-center justify-center md:w-[50%]">
      <div className="justify center flex w-[80%] flex-col gap-3 text-center text-gray-dark md:w-[80%]">
        <h2 className="text-3xl font-bold">
          Advanced Ai tool to create a legal brief like human
        </h2>
        <p className="text-lg leading-loose">
          Writing legal brief should not be a tedius and time consuming task.
          That's why Legal Wizard created an AI-powered solution that make
          writing briefs feel like magic. Our system streamlines the writing
          process, eliminates writer's block, and allows lawers to write briefs
          faster and more efficiently than ever before. Let Legal Wizard be your
          secret weapon in the courtroom, and experience the magic yourself.
        </p>

        <button className="m-auto rounded-full bg-orange-500 px-4 py-2 text-white hover:bg-orange-500/[50]">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroDetails;
