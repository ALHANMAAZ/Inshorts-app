import React, { useContext } from "react";
import { data } from "../Services/Api";
import myContext from "../Context/Context";
import { Link } from "react-router-dom";

const Card = () => {
  console.log(data, "data");
  const context = useContext(myContext);
  const { getNews, news } = context;
  console.log(getNews, "getNews");
  console.log(news, "news");

  return (
    <>
      <div className="mt-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="flex flex-col items-center w-full max-w-[900px]">
            {getNews.length > 0 ? (
              <div>
                {getNews.map((news, index) => (
                  <div
                    key={index}
                    className="box-border flex flex-col md:flex-row font-light h-auto mb-5 rounded-sm shadow-custom mx-auto px-4 py-2 relative w-full z-10"
                  >
                    <div className="overflow-hidden rounded-md mb-4 md:mb-0 md:mr-4">
                      <img
                        src={news.imageUrl}
                        alt="newsImg"
                        className="transition-transform duration-300 ease-in-out transform hover:scale-110 w-full h-auto md:w-[320px] md:h-[268px] object-cover rounded-md"
                      />
                    </div>
                    <div className="flex flex-col justify-between w-full md:w-[32rem]">
                      <div>
                        <span className="text-gray-600 cursor-pointer text-lg md:text-xl font-roboto font-thin">
                          {news.title}
                        </span>

                        <div className="leading-5 font-roboto text-xs mt-1">
                          <span className="font-bold">short</span>
                          <span className="text-xs ml-1">by</span>
                          <span className="text-xs ml-1">
                            {news.authorName}
                          </span>
                          <span className="text-xs ml-1">/ {news.time}</span>
                        </div>
                      </div>

                      <div className="mt-2">
                        <p className="text-sm md:text-base font-light">
                          {news.description}
                        </p>
                      </div>
                      <div className="mt-2">
                        <Link to={news.link} target="_blank">
                          <p className="text-sm font-normal font-roboto mb-1">
                            <span className="mr-2">read more at</span>
                            {news.publisher}
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}{" "}
              </div>
            ) : (
              <div className="w-full text-center py-10">
                <h2 className="text-lg font-semibold">News is not available</h2>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
