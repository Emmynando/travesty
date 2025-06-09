const IMAGES = [
  {
    id: "i1",
    img: "/image/rafting.png",
    toSpan: 2,
    text: "Rafting",
  },
  {
    id: "i2",
    img: "/image/nature.png",
    text: "Nature Walk",
  },
  {
    id: "i3",
    img: "/image/bike.png",
    text: "Bike Riding",
  },
  {
    id: "i4",
    img: "/image/bungee.png",
    text: "Bungee Jumping",
  },
  {
    id: "i5",
    img: "/image/wine.png",
    text: "Wine Tasting",
  },
  {
    id: "i6",
    img: "/image/coffee.png",
    text: "Coffee Tasting",
  },
  {
    id: "i7",
    img: "/image/farm.png",
    toSpan: 2,
    text: "Farm Visit",
  },
  {
    id: "i8",
    img: "/image/camping.png",
    toSpan: 2,
    text: "Camping",
  },
  {
    id: "i9",
    img: "/image/kibera.png",
    text: "Kibera Tour",
  },
];

export default function Interests() {
  return (
    <div className="px-6 md:px-12 lg:px-12  mt-8 ">
      <p className="small-text mb-6">What are your interests?</p>
      <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-4">
        {IMAGES.map((image) => (
          <div
            key={image.id}
            style={{
              backgroundImage: `url(${image.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className={`w-full h-[15.6rem] bg-red-900 aspect-square flex justify-center items-center ${
              image.toSpan ? "md:col-span-2 lg:col-span-2" : ""
            }`}
          >
            <p className="font-didot text-2xl font-bold text-white">
              {image.text !== "Kibera Tour" && image.text}
            </p>
          </div>
        ))}
      </div>
      <button className="bg-[#FF5200] text-base text-white rounded-[3px] py-2 w-[9.3rem] mt-8">
        Set
      </button>
    </div>
  );
}
