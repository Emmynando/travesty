export default function Testimonials() {
  return (
    <div className="px-12 pt-8 bg-[#F8F8F8]">
      <p className="small-text ">TESTIMONIALS</p>
      <div className="grid grid-cols-3 gap-4">
        <section>
          <h2 className="font-didot font-fold text-[50px] height-[50px]">
            What customers <span className="text-[#FF5200]">say about us.</span>
          </h2>
        </section>
        <section className="bg-white">
          <h4 className="text-base font-bold mb-4">Best User Experience</h4>
          <p className="text-[#4A4A4A] text-sm">
            Because the rock was laid down in layers, there is a variation in
            the hardness of the rock formed. When water runoff trickles across
            the rock, some areas erode rapidly whereas others hold firm. This
            variation in erosion speed causes the formation of pinnacles, or
            “hoodoos” of stable rock.
          </p>
        </section>
        <section className="bg-white">
          <h4 className="text-base font-bold mb-4">Friendly staff</h4>
          <p className="text-[#4A4A4A] text-sm">
            Whether its a driving tour, a cruise or a bus, leaf viewing is a
            great way to spend a fall vacation. It’s also big tour business and
            the are many options.
          </p>
        </section>
      </div>
    </div>
  );
}
