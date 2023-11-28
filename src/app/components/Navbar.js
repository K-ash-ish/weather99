function Navbar() {
  return (
    <nav className="bg-black/[0.49]">
      <ul className="flex justify-between items-center text-white h-12 ">
        <li className="md:mx-36 mx-8 text-xl font-bold">Weather 99</li>
        <li className="md:mx-36 mx-8">Refresh</li>
      </ul>
    </nav>
  );
}

export default Navbar;
