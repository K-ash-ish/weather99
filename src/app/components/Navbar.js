import Image from "next/image";

function Navbar() {
  return (
    <nav className="bg-black/[0.49]">
      <ul className="flex justify-between items-center text-white h-12 ">
        <li className="md:mx-36 mx-8 text-xl font-bold flex gap-2">
          <Image src="/logo.svg" height={32} width={32} />
          Weather 99
        </li>
        <li className="md:mx-36 mx-8 flex items-center gap-2">
          <Image src="/refresh.svg" height={24} width={24} />
          Refresh
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
