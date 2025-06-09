export default function Footer() {
  return (
    <div className="pt-8">
      <section className="flex justify-between border-y border-[#E4E4E4] py-6 px-12 ">
        <h3 className="text-[#30797C] text-2xl font-bold">Travelsy</h3>
        <div className="flex items-center gap-4">
          <img src={"./image/mpesa.png"} className="w-[2.1rem] h-[1.56rem]" />
          <img src={"./image/discover.png"} className="w-[4.75rem] h-[1rem]" />
          <img src={"./image/visa.png"} className="w-[2.6rem] h-[0.8rem]" />
          <img src={"./image/paypal.png"} className="w-[4.37rem] h-[1.25rem]" />
          <img
            src={"./image/mastercard.png"}
            className="w-[2.1rem] h-[1.68rem]"
          />
          <select className="text-[13px] text-[#9B9B9B]">
            <option>
              <span></span>
              <span>English (United States)</span>
            </option>
          </select>
          <select className="text-[13px] text-[#9B9B9B]">
            <option>
              <span></span>
              <span>KES</span>
            </option>
          </select>
        </div>
      </section>
      <section className="flex justify-between items-center px-12 py-6">
        <div>
          <p className="text-xs text-[#333333]">
            Copyright © 2019 Travelsy Ltd. All rights reserved
          </p>
        </div>
        <div>
          <p className="text-xs text-[#333333]">Made in Kenya by Ralak</p>
        </div>
      </section>
    </div>
  );
}
