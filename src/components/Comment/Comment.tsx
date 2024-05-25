import './Comment.css'
import { useState } from "react";
import { CommentsResponse } from "../../interfaces/types";

import Pen from "../../Images/Pen.png";
import Trash from "../../Images/Trash.png";
import Icon from "../../Images/icon.png";

interface CommentProps {
  comment: CommentsResponse;
  index: number;
  deleteComment: (index: number) => void;
  editComment: (index: number, newComment: CommentsResponse) => void;
}

function Comment({ comment, index, deleteComment, editComment }: CommentProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedComment, setEditedComment] = useState(comment.body);

  const onEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    editComment(index, { ...comment, body: editedComment });
    setIsEditing(false);
  };

  return (
    <div className="comment-content">
      {isEditing ? (
        <form onSubmit={onEditSubmit}>
          <input
            type="text"
            value={editedComment}
            onChange={(e) => setEditedComment(e.target.value)}
            className='comment-editText'
          />
          <button type="submit" className='comment-editBtn'>Save</button>
          <button type="button" onClick={() => setIsEditing(false)}className='comment-deleteBtn'>
            Cancel
          </button>
        </form>
      ) : (
        <>
          <div className="comment-item">
            <div className="comment-item-icon-wrapper">
            <img src={Icon} alt="icon-img" className="comment-item-icon" />
            </div>
            <div style={{width:'100%'}}>
              <div className="comment-item-content">
                <p>
                  <em>{comment.email}</em>
                </p>
                <p>24 қазан 2024</p>
                <p>{comment.body}</p>
              </div>

              <div className="comment-item-actions">
                {comment.email === "Aldiyar@gmail.com" && (
                    <div onClick={() => setIsEditing(true)}>
                      <img src={Pen} alt="pen-icon" />
                    </div>
                )}
                {comment.email === "Aldiyar@gmail.com" && (
                    <div onClick={() => deleteComment(index)}>
                      <img src={Trash} alt="trash-icon" />
                    </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Comment;
