import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchPosts } from "../../../features/posts/postsSlice";

export const Search = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [textSearch, setTextSearch] = useState("");

  const handleChange = (e) => {
    setTextSearch(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchPosts(textSearch));
    setTextSearch("");
    navigate(`search/${textSearch}`)
  }

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input className="search__input" type="text" value={textSearch} placeholder="Write and press enter to search..." onChange={handleChange} />
    </form>
  )
};
