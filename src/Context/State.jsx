import React, { useEffect, useState } from "react";
import myContext from "./Context";
import { fireDB } from "../FireBase/Fireabase";
import { toast } from "react-toastify";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";

const State = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState({
    title: null,
    authorName: null,
    imageUrl: null,
    category: null,
    publisher: null,
    link: null,
    description: null,
    time: new Date().toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true, // for am/pm format
      weekday: "long", // for day of the week
      year: "numeric",
      month: "long", // full month name
      day: "numeric", // day of the month
    }),
  });

  const addNews = async () => {
    if (
      news.title == null ||
      news.authorName == null ||
      news.imageUrl == null ||
      news.category == null ||
      news.publisher == null ||
      news.link == null ||
      news.description == null
    ) {
      return toast.error("All Fields Are Required");
    }

    setLoading(true);

    try {
      const newsRef = collection(fireDB, "news");
      await addDoc(newsRef, news);
      toast.success("Add news successfully");
      setTimeout(() => {
        window.location.href = "/admin";
      }, 800);
      getNewsData();
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
    setNews("");
  };

  const [getNews, setGetNews] = useState([]);
  const getNewsData = async () => {
    setLoading(true);

    try {
      const q = query(collection(fireDB, "news"), orderBy("time"));

      const data = onSnapshot(q, (QuerySnapshot) => {
        let newsArray = [];
        QuerySnapshot.forEach((doc) => {
          newsArray.push({ ...doc.data(), id: doc.id });
        });
        setGetNews(newsArray);
        setLoading(false);
      });

      return () => data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getNewsData();
  }, []);

  const edithandle = (item) => {
    setNews(item);
  };

  const updateNews = async () => {
    setLoading(true);
    try {
      await setDoc(doc(fireDB, "news", news.id), news);
      toast.success("News Updated successfully");
      setTimeout(() => {
        window.location.href = "/admin";
      }, 800);
      getNewsData();
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const deleteNews = async (item) => {
    setLoading(true);
    try {
      await deleteDoc(doc(fireDB, "news", item.id));
      toast.success("News Deleted successfully");
      getNewsData();
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <myContext.Provider
      value={{
        loading,
        setLoading,
        news,
        setNews,
        addNews,
        getNews,
        edithandle,
        updateNews,
        deleteNews,
      }}
    >
      {children}
    </myContext.Provider>
  );
};

export default State;
