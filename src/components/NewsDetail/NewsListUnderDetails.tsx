import { getImageList, getPostsList } from "../../api/newsApi";
import { useEffect, useState } from "react";
import { PostResponse } from "../../interfaces/types";
import News from "../NewsList/News";
import { headerList } from "../NewsList/consts.ts";

type Props = {
  post: PostResponse;
};
function NewsListUnderDetail(props: Props) {
  const [filteredPosts, setFilteresPosts] = useState<PostResponse[]>([]);

  const onGetNews = async () => {
    const result = await getImageList();
    if (result) {
      const postResult = await getPostsList();
      if (postResult) {
        setFilteresPosts(
          postResult
            .map((item, index) => ({
              ...item,
              urlToImage: result[index % 30].download_url,
              category: headerList[item.userId - 1],
            }))
            .filter((item) => item.userId === props.post.userId)
        );
      }
    }
  };

  useEffect(() => {
    onGetNews();
  }, []);

  const postsShowList = filteredPosts.slice(0, 6);
  const length = postsShowList.length;
  const partSize = Math.ceil(length / 3);
  const array1 = postsShowList.slice(0, partSize);
  const array2 = postsShowList.slice(partSize, 2 * partSize);
  const array3 = postsShowList.slice(2 * partSize, length);

  return (
    <>
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
    </>
  );
}

export default NewsListUnderDetail;
