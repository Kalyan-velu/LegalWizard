import Logo from '/assests/Logo.png'
const Navbar = () => {
  const links=["Home","About","Contact","Pricing"]
  return (
    <nav className='bg-transparent h-auto md:h-[5vh] text-white flex justify-around pt-6 pb-6 md:pt-12 md:pb-12 items-center w-[100%]'>
        <ul className='hidden md:flex md:justify-evenly md:w-[20%]'>
          <a href="#home" className='hover:text-gray'>Home</a>
          <a href="#about" className='hover:text-gray'>About</a>
          <a href="#contact" className='hover:text-gray'>Contact</a>
          <a href="#pricing" className='hover:text-gray'>Pricing</a>
        </ul>
      <img className='justify-self-stretch ' src={Logo} alt="W" />
      <div className='flex w-[50%] md:w-[20%] md:w-[10%] h-[calc(auto-1rem)] justify-around items-center'>
        <button className='border-solid border-2 text-black px-4 py-2 rounded-2xl'>Sign up</button>
        <button className='bg-orange hover:bg-orange-500/[50] text-black px-4 py-2 rounded-2xl'>Log in</button>
      </div>
    </nav>
  )
}

export default Navbar