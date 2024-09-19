import React, { useContext } from "react";
import myContext from "../Context/Context";
import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
  const context = useContext(myContext);
  const { getNews, edithandle, deleteNews } = context;

  const navigate = useNavigate();
  const redirect = () => {
    navigate("/addNews");
  };
  return (
    <div className="container mx-auto px-4 md:px-0 mb-16 mt-10">
      <h1 className="text-center mb-5 text-3xl font-semibold underline">
        News Details
      </h1>
      <div className="flex justify-end">
        <button
          onClick={redirect}
          type="button"
          className="focus:outline-none text-white bg-red-600  shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] border hover:bg-red-700 outline-0 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 mr-4"
        >
          Add News
        </button>
      </div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs border border-gray-600 text-black uppercase bg-gray-200 shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]">
            <tr>
              <th scope="col" className="px-6 py-3">
                S.No
              </th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Author
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {getNews && getNews.length > 0 ? (
              getNews.map((item, index) => {
                const { title, authorName, imageUrl, category, time } = item;
                return (
                  <tr
                    key={index}
                    className="bg-gray-50 border-b dark:border-gray-800"
                  >
                    <td className="px-6 py-4 text-black">{index + 1}.</td>
                    <td className="px-6 py-4">
                      <img
                        className="w-16 h-16 object-cover"
                        src={imageUrl}
                        alt={title}
                      />
                    </td>
                    <td className="px-6 py-4 text-black">{title}</td>
                    <td className="px-6 py-4 text-black">{authorName}</td>
                    <td className="px-6 py-4 text-black">{category}</td>
                    <td className="px-6 py-4 text-black">{time}</td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => deleteNews(item)}
                          className="text-red-500 hover:text-red-700"
                        >
                          Delete
                        </button>
                        <Link to="/updateNews">
                          <button
                            onClick={() => edithandle(item)}
                            className="text-blue-500 hover:text-blue-700"
                          >
                            Edit
                          </button>
                        </Link>
                      </div>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-4">
                  No news available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
