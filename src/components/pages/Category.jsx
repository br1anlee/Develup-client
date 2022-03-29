import { Link } from "react-router-dom";

export default function Category({ category }) {
  const categoryLinks = category.map((category, i) => {
    return (
      <li key={`category-link${i}`}>
        <Link to={`/category/${category._id}`}>{category.name}</Link>
      </li>
    );
  });
  return (
    <div>
      <h2>Categories:</h2>
      <ul>{categoryLinks}</ul>
    </div>
  );
}


