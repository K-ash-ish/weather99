import Image from "next/image";
import { useDispatch } from "react-redux";
import { reset } from "../features/forcast/forcastSlice";
import { useRouter } from "next/navigation";

function Navbar() {
  const dispatch = useDispatch();
  const router = useRouter();
  function handleClick(e) {
    e.preventDefault();
    // dispatch(reset());
  }

  return (
    <nav className="bg-black/[0.49]">
      <ul className="flex justify-between items-center text-white h-12 ">
        <li className="md:mx-36 mx-8 text-xl font-bold flex gap-2">
          <Image alt="logo" src="/logo.svg" height={32} width={32} />
          Weather 99
        </li>
        <li className="md:mx-36 mx-8 ">
          <button className="flex items-center gap-2" onClick={handleClick}>
            <Image alt="refresh" src="/refresh.svg" height={24} width={24} />
            Refresh
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
