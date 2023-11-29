export function SmallShimmer() {
  return (
    <h3 className="animate-pulse w-24 bg-slate-300 h-3 mt-1 shadow-sm border-0 rounded-sm"></h3>
  );
}

export function CardShimmer() {
  return (
    <div className=" md:w-32  my-2 md:m-0 flex flex-col items-center">
      <div className="w-full md:h-48 text-center bg-gradient-to-b from-[#464646] to-[#1D2540] text-white py-2 border-0 rounded-md">
        <div className="flex items-center justify-center border-gray-500 border-b-[1px]">
          <h2 className=" animate-pulse bg-slate-300 h-2 w-4/5 mb-2 "></h2>
        </div>
        <ul className="flex md:flex-col flex-row justify-center md:items-center gap-3 font-bold text-sm  py-2">
          <li className="flex flex-col animate-pulse bg-slate-300 h-2 w-4/5 my-1 "></li>
          <li className="flex flex-col animate-pulse bg-slate-300 h-2 w-4/5 my-1"></li>
          <li className="flex flex-col animate-pulse bg-slate-300 h-2 w-4/5 my-1"></li>
          <li className="flex flex-col animate-pulse bg-slate-300 h-2 w-4/5 my-1"></li>
          <li className="flex flex-col animate-pulse bg-slate-300 h-2 w-4/5 my-1"></li>
        </ul>
      </div>
    </div>
  );
}
