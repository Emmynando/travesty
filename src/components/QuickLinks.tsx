import { company, contact, help, links, mailing } from "../constant";

export default function QuickLinks() {
  return (
    <div className="px-6 md:px-12 lg:px-12  pt-8 grid md:grid-cols-3 lg:grid-cols-6">
      <section>
        <div className="mb-8">
          <h2 className="text-[#000000] text-[13px] font-bold mb-2">
            Need Travelsy Help?
          </h2>
          <ul className="space-y-1">
            {help.map((text, index) => (
              <li key={index} className="small-text">
                {text}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-[#000000] text-[13px] font-bold mb-2">
            Contact Info:
          </h2>
          <ul className="space-y-1">
            {contact.map((text, index) => (
              <li key={index} className="small-text">
                {text}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section>
        <h2 className="text-[#000000] text-[13px] font-bold mb-2">Company</h2>
        <ul className="space-y-1">
          {company.map((text, index) => (
            <li key={index} className="small-text">
              {text}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className="text-[#000000] text-[13px] font-bold mb-2 mt-4 md:mt-0 lg:mt-0">
          Other Services & Support
        </h2>
        <ul className="space-y-1">
          {company.map((text, index) => (
            <li key={index} className="small-text">
              {text}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className="text-[#000000] text-[13px] font-bold mb-2 mt-4 md:mt-0 lg:mt-0">
          Quick Links
        </h2>
        <ul className="space-y-1">
          {links.map((text, index) => (
            <li key={index} className="small-text">
              {text}
            </li>
          ))}
        </ul>
      </section>
      <section className="col-span-2">
        <h2 className="text-[#000000] text-[13px] font-bold mb-2 mt-4 md:mt-0 lg:mt-0">
          Mailing List
        </h2>
        <ul className="space-y-1">
          {mailing.map((text, index) => (
            <li key={index} className="small-text">
              {text}
            </li>
          ))}

          <div className="w-[100%] flex">
            <input
              placeholder="Your Email"
              type="text"
              className="outline-none border border-[#E4E4E4] px-1 py-2 placeholder:text-#9B9B9B placeholder:text-[13px] flex-1"
            />
            <button className="text-white bg-[#FF5200] font-bold text-[13px] p-2 border border-[#FF5200] ">
              subscribe
            </button>
          </div>
        </ul>
      </section>
    </div>
  );
}
