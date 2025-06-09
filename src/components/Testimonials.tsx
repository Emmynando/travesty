import { FaAngleLeft, FaChevronRight } from "react-icons/fa6";
import { LuSlash } from "react-icons/lu";
export default function Testimonials() {
  return (
    <div className="px-6 md:px-12 lg:px-12  py-8 bg-[#F8F8F8]">
      <p className="small-text ">TESTIMONIALS</p>
      <div className="flex flex-col md:flex-row lg:flex-row justify-between gap-4 md:gap-12 lg:gap-16">
        <section className="flex-1 flex flex-col pt-6 h-[19.8rem] justify-between">
          <div>
            <h2 className="font-didot font-fold text-[50px] leading-[1.1]">
              What <br /> customers <br />
              <span className="text-[#FF5200]">say about us.</span>
            </h2>
          </div>
          <div className="bg-white flex w-max px-2 py-4 gap-4">
            <span>
              <FaAngleLeft className="text-[#4A4A4A] w-[1.06] h-[0.56]" />
            </span>
            <span>
              <LuSlash className="-rotate-25 text-[#D8D8D8]" />
            </span>
            <span>
              <FaChevronRight className="text-[#9B9B9B] w-[1.06] h-[0.56]" />
            </span>
          </div>
        </section>
        <section className="bg-white p-6 h-[19.8rem] md:w-[19.87rem] lg:w-[19.87rem] flex flex-col justify-between">
          <div>
            <h4 className="text-base font-bold mb-4">Best User Experience</h4>
            <p className="text-[#4A4A4A] text-sm">
              Because the rock was laid down in layers, there is a variation in
              the hardness of the rock formed. When water runoff trickles across
              the rock, some areas erode rapidly whereas others hold firm. This
              variation in erosion speed causes the formation of pinnacles, or
              “hoodoos” of stable rock.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <img src={"./image/Oval.png"} />
            <p className="text-sm text-[#4A4A4A]">Derek Dunn</p>
          </div>
        </section>
        <section className="bg-white p-6 h-[19.8rem] w-[19.87rem] flex flex-col justify-between shadow-md">
          <div>
            <h4 className="text-base font-bold mb-4">Friendly staff</h4>
            <p className="text-[#4A4A4A] text-sm">
              Whether its a driving tour, a cruise or a bus, leaf viewing is a
              great way to spend a fall vacation. It’s also big tour business
              and the are many options.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <img src={"./image/Oval.png"} />
            <p className="text-sm text-[#4A4A4A]">Derek Dunn</p>
          </div>
        </section>
      </div>
    </div>
  );
}
