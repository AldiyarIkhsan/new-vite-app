import { ImageResponse, PostResponse } from "../../interfaces/types";
import Tag from "../Tag/Tag.tsx";
import { useNavigate } from "react-router-dom";
import { colors } from "./consts.ts";

function News(props: PostResponse & Partial<ImageResponse>) {
  const navigate = useNavigate();

  if (props.id === undefined) {
    return null;
  }

  const handleClick = () => {
    if (props.id !== undefined) {
      navigate(`/new-vite-app/newsDetails/${props.id}`);
      window.scrollTo(0, 0);
    }
  };

  if (props.isFirst === true) {
    return (
      <div onClick={handleClick} className="news-item-first">
        {props.category?.name && (
          <Tag
            title={props.category?.name}
            color={colors[props.userId % 8]}
          />
        )}
        <h4 className="news-title">{props.title}</h4>
        <p className="news-date">
          <strong>12 қараша 2019 </strong>
        </p>
      </div>
    );
  }
  if (props.isSecond) {
    return (
      <div
        onClick={handleClick}
        className="news-item-second"
        style={{
          backgroundImage: `url(${props.urlToImage})`,
        }}
      >
        {props.category?.name && (
          <Tag
            title={props.category?.name}
            color={colors[props.userId % 8]}
          />
        )}
        <h4 className="news-title-small">{props.title}</h4>
        <p className="news-date-small">
          <strong>12 қараша 2019 </strong>
        </p>
      </div>
    );
  }

  return props.isSmallCard ? (
    <div
      onClick={handleClick}
      className="news-item"
      style={{
        backgroundImage: `url(${props.urlToImage})`,
      }}
    >
      {props.category?.name && (
        <Tag
          title={props.category?.name}
          color={colors[props.userId % 8]}
        />
      )}
      <h4 className="news-title-small">{props.title}</h4>
      <p className="news-date-small">
        <strong>12 қараша 2019 </strong>
      </p>
    </div>
  ) : (
    <div className="news-item-2" onClick={handleClick}>
      <img src={props.urlToImage} alt="img" className="news-image" />
      {props.category?.name && (
        <Tag
          title={props.category?.name}
          color={colors[props.userId % 8]}
        />
      )}
      <h4 className="news-title">{props.title}</h4>
      <p className="news-date">
        <strong>12 қараша 2019 </strong>
      </p>
    </div>
  );
}

export default News;
