import { client, clientForImage } from "./client";
import {ImageResponse, PostResponse, CommentsResponse} from "../interfaces/types";

export const getImageList = async (): Promise<ImageResponse[]> => {
  return (await clientForImage.get("")).data;
};

export const getPostsList = async (): Promise<PostResponse[]> => {
  return (await client.get("posts/")).data;
};

export const getPostDetails = async (id: string) => {
  return (await client.get(`/posts/${id}/`)).data;
};

export const getPostComments = async(id:string):Promise<CommentsResponse[]> => {
  return (await client.get(`/posts/${id}/comments/`)).data;
};

export const setPostComments = async(id:string) => {
  return (await client.post(`/posts/${id}/comments/`)).data;
};
