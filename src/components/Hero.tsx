export default function Hero() {
  return (
    <div className="mt-8 space-y-12 px-12">
      <section className="space-y-8">
        <h2 className="font-didot text-[#000000] text-7xl w-[28.1rem] font-bold">
          Find An Experience
        </h2>
        <p className="text-[13px] text-pri-text height-[20px] w-[28.1rem]">
          To find you the best experiences, we will ask you a few questions to
          and show you experiences basd on your preferences.
        </p>
      </section>
      <section className="">
        <p className="height-[20px] text-pri-text text-[13px] mb-6">
          How much time do you have?
        </p>
        <ul className="flex items-end gap-4 ">
          <li className="small-text">
            {" "}
            <input
              type="checkbox"
              id=""
              name=""
              value=""
              className="mr-2 size-[16px]"
            />
            A weekend
          </li>
          <li className="small-text">
            <input
              type="checkbox"
              id=""
              name=""
              value=""
              className="mr-2 size-[16px]"
            />
            A week
          </li>
          <li className="small-text">
            <input
              type="checkbox"
              id=""
              name=""
              value=""
              className="mr-2 size-[16px]"
            />
            A month
          </li>
          <li className="small-text">
            <input
              type="checkbox"
              id=""
              name=""
              value=""
              className="mr-2 size-[16px] -mb-2"
            />
            A few days, specify
          </li>
        </ul>
      </section>
    </div>
  );
}
