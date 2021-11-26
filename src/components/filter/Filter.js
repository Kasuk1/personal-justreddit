import { useDispatch } from "react-redux";
import { faFire, faSun, faCrown } from "@fortawesome/free-solid-svg-icons";

import { FilterOption } from "./FilterOption";

import { getPopularPosts } from "../../features/posts/postsSlice";

const filterOptions = [
  { id: "hot", name: "hot", icon: faFire },
  { id: "new", name: "new", icon: faSun },
  { id: "top", name: "top", icon: faCrown },
];

export const Filter = () => {
  const dispatch = useDispatch();

  const handleClick = (filter) => {
    dispatch(getPopularPosts(filter));
  }


  return (
    <div className="filter">
      {filterOptions.map((option) => (
        <FilterOption key={option.id} {...option} handleClick={handleClick} />
      ))}
    </div>
  );
};
