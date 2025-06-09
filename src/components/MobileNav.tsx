import { FaRegBookmark } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

interface MobileNavProps {
  isModal: boolean;
  onClick: () => void;
}

export default function MobileNav({ onClick, isModal }: MobileNavProps) {
  return (
    <div className="fixed inset-0 w-full z-50">
      <div className="px-4">
        <div className="flex flex-row justify-between items-center h-[10%] bg-white py-4">
          <header>
            <h1 className="text-mulish text-[#4a4a4a] font-bold text-lg">
              Travelsy
            </h1>
          </header>
          <div className="flex items-center space-x-2">
            <span>
              <IoSearch className="text-pri-text sixze-[19px]" />
            </span>
            <span className="size-[40px]">
              <img src={"./image/Oval.png"} className="size-[2rem]" />
            </span>
            <span className="w-[11px]">
              <GiHamburgerMenu onClick={onClick} />
            </span>
          </div>
        </div>
        {isModal && (
          <div className="bg-white h-[30rem]">
            <section>
              <ul className="flex flex-col gap-4">
                <li className="text-[13px] text-pri-text">Camping Locations</li>
                <li className="text-[13px] text-pri-text">Activities</li>
                <li className="text-[13px] text-pri-text">Equipment</li>
                <li className="text-[13px] text-pri-text">Blogs</li>
              </ul>
            </section>
            <section className="flex flex-col items-center gap-4 mt-8">
              <button className="bg-[#FF5200] w-[7.3rem] py-1 px-2 rounded-[20px] text-white  flex justify-between items-center gap-2">
                <FaRegBookmark className="size-[0.8rem]" />
                <p className="text-[13px]">Reservations</p>
              </button>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}
