import {
  getPostDetails,
  getImageList,
  getPostComments,
} from "../../api/newsApi";
import { useEffect, useState } from "react";
import {
  PostResponse,
  ImageResponse,
  CommentsResponse,
} from "../../interfaces/types";
import { useParams } from "react-router-dom";
import CommentList from "../Comment/CommentsList";
import CommentForm from "../Comment/CommentForm";
import "./NewsDetails.css";
import NewsListUnderDetails from "./NewsListUnderDetails";

import Facebook from "../../Images/Facebook.png";

import Twitter from "../../Images/twitter.png";
import vk from "../../Images/vk.png";
import Like from "../../Images/like.png";

import Tag from "../Tag/Tag";

import { colors, headerList } from "../NewsList/consts";

function NewsDetail() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<PostResponse | null>(null);
  const [images, setImages] = useState<ImageResponse[] | null>(null);
  const [comments, setComments] = useState<CommentsResponse[]>([]);

  const onGetPosts = async () => {
    const result = await getPostDetails(id!);
    if (result) {
      setPost(result);
    }
  };

  const onGetImages = async () => {
    const result = await getImageList();
    if (result) {
      setImages(result);
    }
  };

  const onGetComments = async () => {
    const result = await getPostComments(id!);
    if (result) {
      setComments(result);
    }
  };

  useEffect(() => {
    onGetPosts();
    onGetImages();
    onGetComments();
  }, [id]);

  const addCommentHandler = (newComment: CommentsResponse) => {
    setComments([...comments, newComment]);
  };

  const deleteCommentHandler = (index: number) => {
    setComments(comments.filter((_, idx) => idx !== index));
  };

  const editCommentHandler = (index: number, newComment: CommentsResponse) => {
    setComments(
      comments.map((comment, idx) => (idx === index ? newComment : comment))
    );
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="news-detail">
      <h3 className="news-detail-title">{post.title}</h3>

      <div className="news-detail-info">
        <Tag title={headerList[post.userId-1].name} color={colors[post.userId % 8]} />
        <p>
          <strong>12 қараша 2019 </strong>
        </p>
      </div>
      <div className="news-detail-content">
        {images && images[0]?.download_url && (
          <img
            src={images[0].download_url}
            alt="post"
            className="detail-image"
          />
        )}

        <p className="news-detail-text">
          Интернетте танымал актер әрі режиссер Нұртас Адамбаевтың "Ауылдан
          қашу. Махаббат операциясы" толық метражды комедиясының трейлері
          жарияланды, - деп хабарлайды Tengrinews.kz тілшісі. Фильм прокатқа 26
          қарашада шығады. Картина соңғы бөлімі 2013 жылы шыққан "Ауылдан қашу"
          сериалының жалғасы. Адамбаев бұған дейін сериал аяқталғаннан кейін
          көрермендердің жалғасын түсіруін сұрағанын бірнеше рет айтқан.
          "Ауылдан қашу. Махаббат операциясы" картинасында басты рөлді
          сомдайтындар: Нұртас Адамбаев (Ербол), Жан Ізбасар (Сапог) және Ерлан
          Қасымжанұлы (Ерлан). Жігіттер бұрынғыша ақша табуды көздейді.
          Картинаны түсіруге 22 күн кеткен. Фильмде Аружан
          Жазылбекова ("Рэкетир-2", "Үшеуге арналған үйлену тойы") және Максим
          Акбаров ("Қызғылт қоян туралы ертегі", "Рэкетир-2") ойнайды.
        </p>

        <p className="news-detail-text-central">{post.body} </p>

        <p className="news-detail-text">
          Интернетте танымал актер әрі режиссер Нұртас Адамбаевтың "Ауылдан
          қашу. Махаббат операциясы" толық метражды комедиясының трейлері
          жарияланды, - деп хабарлайды Tengrinews.kz тілшісі. Фильм прокатқа 26
          қарашада шығады. Картина соңғы бөлімі 2013 жылы шыққан "Ауылдан қашу"
          сериалының жалғасы. Адамбаев бұған дейін сериал аяқталғаннан кейін
          көрермендердің жалғасын түсіруін сұрағанын бірнеше рет айтқан.
          "Ауылдан қашу. Махаббат операциясы" картинасында басты рөлді
          сомдайтындар: Нұртас Адамбаев (Ербол), Жан Ізбасар (Сапог) және Ерлан
          Қасымжанұлы (Ерлан). Жігіттер бұрынғыша ақша табуды көздейді.
          Картинаны түсіруге 22 күн кеткен. Фильмде Аружан
          Жазылбекова ("Рэкетир-2", "Үшеуге арналған үйлену тойы") және Максим
          Акбаров ("Қызғылт қоян туралы ертегі", "Рэкетир-2") ойнайды.
        </p>

        {images && images[1]?.download_url && (
          <img
            src={images[1].download_url}
            alt="post"
            className="detail-image"
          />
        )}

        <p className="news-detail-text">
          Интернетте танымал актер әрі режиссер Нұртас Адамбаевтың "Ауылдан
          қашу. Махаббат операциясы" толық метражды комедиясының трейлері
          жарияланды, - деп хабарлайды Tengrinews.kz тілшісі. Фильм прокатқа 26
          қарашада шығады. Картина соңғы бөлімі 2013 жылы шыққан "Ауылдан қашу"
          сериалының жалғасы. Адамбаев бұған дейін сериал аяқталғаннан кейін
          көрермендердің жалғасын түсіруін сұрағанын бірнеше рет айтқан.
          "Ауылдан қашу. Махаббат операциясы" картинасында басты рөлді
          сомдайтындар: Нұртас Адамбаев (Ербол), Жан Ізбасар (Сапог) және Ерлан
          Қасымжанұлы (Ерлан). Жігіттер бұрынғыша ақша табуды көздейді.
          Картинаны түсіруге 22 күн кеткен. Фильмде Аружан
          Жазылбекова ("Рэкетир-2", "Үшеуге арналған үйлену тойы") және Максим
          Акбаров ("Қызғылт қоян туралы ертегі", "Рэкетир-2") ойнайды.
        </p>

        <div className="social-media-wrapper">
          <div className="social-media">
            <img src={Like} alt="Like icon" />
            Ұнайды (25)
          </div>
          <div className="social-media">
            <img src={Facebook} alt="Facebook icon" />
            <img src={Twitter} alt="Twitter icon" />
            <img src={vk} alt="VK icon" />
          </div>
        </div>

        <CommentList
          comments={comments}
          deleteComment={deleteCommentHandler}
          editComment={editCommentHandler}
        />
        <CommentForm addComment={addCommentHandler} />
        <NewsListUnderDetails post={post} />
      </div>
    </div>
  );
}

export default NewsDetail;
