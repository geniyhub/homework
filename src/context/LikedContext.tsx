import { createContext, ReactNode, useContext, useState } from "react";
import { IPost } from "../hooks/usePosts";

interface ILikeContext {
  likedPosts: IPost[];
  addPost: (item: IPost) => void;
  removePost: (id: number) => void;
  isLiked: (id: number) => boolean;
}
const vicineko: ILikeContext = {
  likedPosts: [],
  addPost: (item: IPost) => {},
  removePost: (id: number) => {},
  isLiked: (id: number) => {
    return false;
  },
};

export const likedContext = createContext<ILikeContext>(vicineko);

export function useLikedContext() {
  return useContext(likedContext);
}

interface ILikedContextProviderProps {
  children: ReactNode;
}

export function LikedContextProvider(props: ILikedContextProviderProps) {
  const { children } = props;

  const [likedPosts, setLikedPosts] = useState<IPost[]>([]);
  function addPost(item: IPost) {
    const tempArray = [...likedPosts, item];
    setLikedPosts(tempArray);
  }

  function removePost(id: number) {
    const tempArray = likedPosts.filter((value) => {
      return value.id != id;
    });
    setLikedPosts(tempArray);
  }

  function isLiked(id: number) {
    return Boolean(likedPosts.find((item) => item.id === id));
  }

  const Provider = likedContext.Provider;
  return (
    <Provider
      value={{
        likedPosts: likedPosts,
        addPost: addPost,
        removePost: removePost,
        isLiked
      }}
    >
      {children}
    </Provider>
  );
}
