import { Link } from "react-router-dom";

export default function Category({currentCategory}) {
  const categoryLinks = currentCategory.map((category, i) => {
    return (
      <li key={`category-link${i}`}>
        <Link to={`/category/${category.id}`}>{category.name}</Link>
      </li>
    );
  });
  return (
    <div>
      <h2>The Category is :</h2>
      <ul>{categoryLinks}</ul>
    </div>
  );
}
