import { getImageList, getPostsList } from "../../api/newsApi";
import { useEffect, useState } from "react";
import { PostResponse } from "../../interfaces/types";
import { useLocation } from "react-router-dom";
import News from "./News";
import "./NewsList.css";
import { headerList } from "./consts.ts";
import { Pagination } from "../Pagination/Pagination.tsx";

function NewsList() {
  const [posts, setPosts] = useState<PostResponse[]>([]);
  const [filteredPosts, setFilteresPosts] = useState<PostResponse[]>([]);
  const [page, setPage] = useState<number>(1);

  const location = useLocation();
  const category = new URLSearchParams(location.search).get("category") || "";

  const onGetNews = async () => {
    const result = await getImageList();
    if (result) {
      const postResult = await getPostsList();
      if (postResult) {
        setPosts(
          postResult.map((item, index) => ({
            ...item,
            urlToImage: result[index % 30].download_url,
            category: headerList[item.userId - 1],
          }))
        );
        setFilteresPosts(
          postResult.map((item, index) => ({
            ...item,
            urlToImage: result[index % 30].download_url,
            category: headerList[item.userId - 1],
          }))
        );
      }
    }
  };

  useEffect(() => {
    if (category) {
      setFilteresPosts(
        posts.filter((item) => String(item.userId) === category)
      );
    } else {
      setFilteresPosts(posts);
    }
  }, [category]);

  useEffect(() => {
    onGetNews();
  }, []);

  const startIndex = (page - 1) * 14; // page = 1 -> 0, page = 2 => 14, page = 3 -> 28
  const postsShowList = filteredPosts.slice(startIndex, startIndex + 14); // 0, 0 + 14 // 14, 28 // 28, 42
  const length = postsShowList.length; // 10
  const partSize = Math.ceil(length / 3); // 34
  const array1 = postsShowList.slice(0, partSize); // 0 - 34)
  const array2 = postsShowList.slice(partSize, 2 * partSize); // 34 - 68)
  const array3 = postsShowList.slice(2 * partSize, length); // 68 - 100

  return (
    <div className="news-list-content">
      {(array2.length && (
        <div className="news-first-wrapper">
          <News key="firstCard" isFirst={true} {...array2[array2.length - 1]} />
          <News key="secondCard" isSecond={true} {...array2[array2.length - 2]} />
        </div>
      )) ||
        ""}
      <div className="news-grid">
        {!filteredPosts.length && <p>No news available</p>}

        <div className="news-wrapper">
          {array1.map((item, index) => (
            <News key={index} {...item} />
          ))}
        </div>
        <div className="news-wrapper">
          {array2.map((item, index) => (
            <News isSmallCard={true} key={index} {...item} />
          ))}
        </div>
        <div className="news-wrapper">
          {array3.map((item, index) => (
            <News key={index} {...item} />
          ))}
        </div>
      </div>
      <Pagination page={page} onPage={setPage} count={Math.ceil(filteredPosts.length/14)} />
    </div>
  );
}

export default NewsList;
