import React from "react";

const articles = [
  {
    id: 1,
    title:
      "Protect your Multifamily Investments: A Guide to Interest Rate Hedges",
    image: "/assets/pexels-pixasquare-1115804.svg",
  },
  {
    id: 2,
    title:
      "Protect your Multifamily Investments: A Guide to Interest Rate Hedges",
    image: "/assets/pexels-pixasquare-1115804.svg",
  },
  {
    id: 3,
    title:
      "Protect your Multifamily Investments: A Guide to Interest Rate Hedges",
    image: "/assets/pexels-pixasquare-1115804.svg",
  },
];

const Articles = () => {
  return (
    <section className="py-10 px-6 md:px-12">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-[48px] font-geist font-semibold text-gray-800 leading[1.1]">
            Explore Our <br/>Recent Articles
          </h2>
         
        </div>
        <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm hover:opacity-90 transition">
          View all <span className="text-lg">&rarr;</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div
            key={article.id}
            className=" rounded-md overflow-hidden shadow hover:shadow-lg transition"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-4">
              <p className="text-[18px] text-gray-700 font-Manrope font-normal">
                {article.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Articles;
