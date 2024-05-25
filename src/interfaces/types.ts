export type ImageResponse = {
  url: string;
  download_url: string;
};

export type PostResponse = {
  isFirst?: boolean;
  isSecond?: boolean;
  isSmallCard?: boolean;
  userId: number;
  id: number;
  title: string;
  body: string;
  urlToImage: string;
  category: { id: number; name:string }
};

export interface CommentsResponse {
  name: string;
  email: string;
  body: string;
}

export interface CommentFormProps {
  addComment: (comment: CommentsResponse) => void;
}

export interface CommentListProps {
  comments: CommentsResponse[];
  deleteComment: (index: number) => void;
  editComment: (index: number, newComment: CommentsResponse) => void;
}

export interface CommentProps {
  comment: CommentsResponse;
  index: number;
  deleteComment: (index: number) => void;
  editComment: (index: number, newComment: CommentsResponse) => void;
}


