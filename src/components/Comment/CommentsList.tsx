import './Comment.css'
import { CommentListProps } from "../../interfaces/types";
import Comment from "./Comment";

function CommentList({ comments, deleteComment, editComment }: CommentListProps) {
  return (
    <div>
      <p className="comment-title">
        Пікірлер ({comments.length})
      </p>
      {comments.map((comment, index) => (
        <Comment
          comment={comment}
          index={index}
          key={index}
          deleteComment={deleteComment}
          editComment={editComment}
        />
      ))}
    </div>
  );
}

export default CommentList;
