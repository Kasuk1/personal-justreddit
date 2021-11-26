import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { searchPosts } from "../../../features/posts/postsSlice";

export const Categorie = ({ categorie }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(searchPosts(categorie.name))
  }

  return (
    <Link
      to={`/search/${categorie.name}`}
      className="categorie"
      style={{
        backgroundImage: `linear-gradient(32.83deg, rgba(0, 0, 0, 0.25) 36.35%, rgba(0, 0, 0, 0.01) 78.18%),url(${categorie.img})`,
      }}
      onClick={handleClick}
    >
      <span className="categorie__name">{categorie.name}</span>
    </Link>
  );
};
