import Logo from "/assests/Logo.png";
const Navbar = () => {
  const links = ["Home", "About", "Contact", "Pricing"];
  return (
    <nav className="flex h-auto w-[100%] items-center justify-around bg-transparent pb-6 pt-6 text-white md:h-[5vh] md:pb-12 md:pt-12">
      <ul className="hidden md:flex md:w-[20%] md:justify-evenly">
        {links.map((link) => (
          <>
            <a
              key={link}
              href={`#${link?.toLocaleLowerCase()}`}
              className="hover:text-gray"
            >
              {link}
            </a>
          </>
        ))}
      </ul>
      <img className="justify-self-stretch " src={Logo} alt="W" />
      <div className="flex h-[calc(auto-1rem)] w-[50%] items-center justify-around sm:w-[20%] md:w-[15%]">
        <button className="text-black rounded-full border-2 border-solid px-4 py-2">
          Sign up
        </button>
        <button className="hover:bg-orange-500/[50] text-black rounded-full bg-orange px-4 py-2">
          Log in
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
