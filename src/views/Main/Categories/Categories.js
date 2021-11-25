import { Categorie } from "../../../components/items/Categorie/Categorie";

export const Categories = () => {
  const categoriesList = [
    {
      id: 1,
      name: "Gaming",
      img: "https://images.unsplash.com/photo-1586182987320-4f376d39d787?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 2,
      name: "Sports",
      img: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80",
    },
    {
      id: 3,
      name: "TV",
      img: "https://images.unsplash.com/photo-1580247817119-c6cb496270a4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 4,
      name: "Travel",
      img: "https://images.unsplash.com/photo-1502301197179-65228ab57f78?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=685&q=80",
    },
    {
      id: 5,
      name: "Health & Fitness",
      img: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 6,
      name: "Fashion",
      img: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
  ];

  return (
    <div className="left-side">
      <h2 className="heading-2">Categories</h2>
      <div className="categories">
        {categoriesList.map((categorie) => (
          <Categorie key={categorie.id} categorie={categorie} />
        ))}
      </div>
    </div>
  );
};
