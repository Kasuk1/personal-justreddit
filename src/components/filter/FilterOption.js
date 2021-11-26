import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

export const FilterOption = ({ name, icon, handleClick }) => {

  return (
    <NavLink to={`/popular/${name}`}
      className={({ isActive }) => "filter__option " + (isActive ? "active" : "")}
      role="button"
      onClick={() => handleClick(name)}
    >
      <FontAwesomeIcon icon={icon} className="filter__option--icon" />
      <p className="filter__option--text">{name}</p>
    </NavLink>
  );
};
