import { FaRegBookmark } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
// import profileIcon from "./image/Oval.png";
export default function Navbar() {
  return (
    <div className="grid grid-cols-3 items-center px-4 py-4 border-b border-[#D8D8D8]">
      <div>
        <header>
          <h1 className="text-mulish text-[#4a4a4a] font-bold text-lg">
            Travelsy
          </h1>
        </header>
      </div>
      <div className="col-span-2 flex items-center justify-between">
        <section>
          <ul className="flex items-center gap-4">
            <li className="text-[13px] text-pri-text">Camping Locations</li>
            <li className="text-[13px] text-pri-text">Activities</li>
            <li className="text-[13px] text-pri-text">Equipment</li>
            <li className="text-[13px] text-pri-text">Blogs</li>
          </ul>
        </section>
        <section className="flex items-center gap-4">
          <button className="bg-[#FF5200] w-[9.3rem] py-2 rounded-[20px] text-white text-[13px] flex justify-center items-center gap-2">
            <FaRegBookmark />
            Reservations
          </button>
          <span>
            <IoSearch className="text-pri-text sixze-[19px]" />
          </span>
          <span className="size-[40px]">
            <img src={"./image/Oval.png"} />
          </span>
        </section>
      </div>
    </div>
  );
}
