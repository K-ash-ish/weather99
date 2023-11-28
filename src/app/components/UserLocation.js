function UserLocation() {
  return (
    <div className="border-b-2 border-black/[0.2] flex justify-between mt-14 pb-1">
      <div>
        <h3 className="text-[#1D2540] font-bold text-xl">
          Agra, Uttar Pradesh
        </h3>
        <p className="text-[#606060] text-sm">longitude, latitude</p>
      </div>
      <div>
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
