import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NewsCategory = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("data/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="grid font-normal">
      {categories?.map((category) => (
        <Link
          to={`/categories/${category.id}`}
          className=" hover:bg-base-200 p-2 mt-2"
          key={category.id}
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
};

export default NewsCategory;
