import { Categorie } from "../../../components/items/Categorie/Categorie";
import { categories } from "../../../util/data/categories";

export const Categories = () => {

  return (
    <div className="categories">
      {categories.map((categorie) => (
        <Categorie key={categorie.id} categorie={categorie} />
      ))}
    </div>
  );
};
