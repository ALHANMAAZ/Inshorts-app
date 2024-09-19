import React, { useContext } from "react";
import myContext from "../Context/Context";
import Container from "./Container";
const AddNews = () => {
  const context = useContext(myContext);
  const { news, setNews, addNews } = context;

  return (
    <>
      <Container>
        <div className="mx-auto w-full max-w-3xl p-6 rounded font-roboto">
          <div className="flex justify-center items-center min-h-96">
            <div className="bg-gray-800 px-10 py-10 rounded-xl w-full lg:w-3/4">
              <div className="mb-6">
                <h1 className="text-center text-white text-xl mb-4 font-bold">
                  Add News
                </h1>
              </div>

              {/* Input Fields */}
              <div className="mb-4">
                <input
                  autoComplete="off"
                  type="text"
                  name="title"
                  value={news.title ?? ""}
                  onChange={(e) => setNews({ ...news, title: e.target.value })}
                  className="bg-gray-600 px-2 py-2 w-full lg:w-[28rem] rounded-lg text-white placeholder:text-gray-200 outline-none"
                  placeholder="Enter Title"
                />
              </div>

              <div className="mb-4">
                <input
                  autoComplete="off"
                  type="text"
                  name="authorName"
                  value={news.authorName ?? ""}
                  onChange={(e) =>
                    setNews({ ...news, authorName: e.target.value })
                  }
                  className="bg-gray-600 px-2 py-2 w-full lg:w-[28rem] rounded-lg text-white placeholder:text-gray-200 outline-none"
                  placeholder="Enter Author Name"
                />
              </div>

              <div className="mb-4">
                <input
                  autoComplete="off"
                  type="text"
                  name="imageUrl"
                  value={news.imageUrl ?? ""}
                  onChange={(e) =>
                    setNews({ ...news, imageUrl: e.target.value })
                  }
                  className="bg-gray-600 px-2 py-2 w-full lg:w-[28rem] rounded-lg text-white placeholder:text-gray-200 outline-none"
                  placeholder="Enter Image URL"
                />
              </div>

              <div className="mb-4">
                <input
                  autoComplete="off"
                  type="text"
                  name="category"
                  value={news.category ?? ""}
                  onChange={(e) =>
                    setNews({ ...news, category: e.target.value })
                  }
                  className="bg-gray-600 px-2 py-2 w-full lg:w-[28rem] rounded-lg text-white placeholder:text-gray-200 outline-none"
                  placeholder="Enter Category"
                />
              </div>

              <div className="mb-4">
                <input
                  autoComplete="off"
                  type="text"
                  name="publisher"
                  value={news.publisher ?? ""}
                  onChange={(e) =>
                    setNews({ ...news, publisher: e.target.value })
                  }
                  className="bg-gray-600 px-2 py-2 w-full lg:w-[28rem] rounded-lg text-white placeholder:text-gray-200 outline-none"
                  placeholder="Enter Publisher"
                />
              </div>

              <div className="mb-4">
                <input
                  autoComplete="off"
                  type="text"
                  name="link"
                  value={news.link ?? ""}
                  onChange={(e) => setNews({ ...news, link: e.target.value })}
                  className="bg-gray-600 px-2 py-2 w-full lg:w-[28rem] rounded-lg text-white placeholder:text-gray-200 outline-none"
                  placeholder="Enter Link"
                />
              </div>

              <div className="mb-4">
                <textarea
                  cols="30"
                  rows="5"
                  name="description"
                  value={news.description ?? ""}
                  onChange={(e) =>
                    setNews({ ...news, description: e.target.value })
                  }
                  className="bg-gray-600 px-2 py-2 w-full lg:w-[28rem] rounded-lg text-white placeholder:text-gray-200 outline-none"
                  placeholder="Enter Description"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center mb-3">
                <button
                  className="bg-customBlue w-full lg:w-[28rem] text-white font-bold px-2 py-2 rounded-lg bg-gray-600"
                  onClick={addNews}
                >
                  Add News
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default AddNews;
