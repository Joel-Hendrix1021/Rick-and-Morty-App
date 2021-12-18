import { useState } from "react";

const useFavorite = () => {
  const getLocal = window.localStorage.getItem("likes");

  const [likes, setLikes] = useState(getLocal ? getLocal.split(",").map((item) => Number(item)) : []);

  const handleFavs = (id) => {
    if (likes.includes(id)) {
      setLikes((likes) => likes.filter((x) => x !== id));
    } else {
      setLikes((like) => [...like, id]);
    }
  };

  window.localStorage.setItem("likes", likes);

  return { likes, handleFavs };
};

export default useFavorite;
