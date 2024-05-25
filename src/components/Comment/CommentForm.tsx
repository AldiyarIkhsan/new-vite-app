import './Comment.css'
import { useState } from "react";
import { CommentFormProps } from "../../interfaces/types";
import { CommentsResponse } from "../../interfaces/types";

function CommentForm({ addComment }: CommentFormProps) {
  const [newComment, setNewComment] = useState<string>("");

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const comment: CommentsResponse = {
      name: "Aldiyar",
      body: newComment,
      email: "Aldiyar@gmail.com"
    };
    addComment(comment);
    setNewComment("");
  };

  return (
    <form onSubmit={onSubmitHandler} style={{width:'100%'}}>
      <textarea
        value={newComment}
        className="comment-input"
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Пікіріңізді жазыңыз..."
      />
      <button type="submit">Қосу</button>
    </form>
  );
}

export default CommentForm;
