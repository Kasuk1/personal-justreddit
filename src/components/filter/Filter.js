import { faFire, faSun, faCrown } from "@fortawesome/free-solid-svg-icons";

import { FilterOption } from "./FilterOption";

export const Filter = () => {
  const filterOptions = [
    { id: "hot", name: "hot", icon: faFire },
    { id: "new", name: "new", icon: faSun },
    { id: "top", name: "top", icon: faCrown },
  ];

  return (
    <div className="filter">
      {filterOptions.map((option) => (
        <FilterOption key={option.id} {...option} />
      ))}
    </div>
  );
};
