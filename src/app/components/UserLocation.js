import Image from "next/image";

function UserLocation() {
  return (
    <div className="border-b-2 mx-4 border-black/[0.2] flex flex-col-reverse gap-4 md:flex-row md:justify-between md:mt-14 mt-8 md:pb-1">
      <div className="md:mx-0">
        <div className="text-[#1D2540] font-bold text-xl flex gap-1">
          <Image src="/location.svg" height={24} width={24} />
          <h3>Agra, Uttar Pradesh</h3>
        </div>
        <p className="text-[#606060] text-sm">longitude, latitude</p>
      </div>
      <div className="relative  w-72 md:flex md:flex-row  md:items-center">
        <Image
          className="absolute bottom-2 right-4"
          src={"/search.svg"}
          height={24}
          width={24}
        />
        <input
          type="text"
          placeholder="Search your city here..."
          className="bg-white placeholder:italic placeholder:text-sm placeholder:text-[#444444] px-3 py-2 rounded-md border-0 w-72 shadow-sm "
        />
      </div>
    </div>
  );
}

export default UserLocation;
