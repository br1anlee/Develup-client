import { Link } from 'react-router-dom';

export default function Category({ category }) {
  const categoryLinks = category.map((category, i) => {
    return (
      <Link
        key={`link${i}`}
        to={`/category/${category._id}`}
        style={{ textDecoration: 'none' }}
      >
        <div className="category-div" key={`category-link${i}`}>
          <p key={`category-name-${i}`} className="category-text">
            {category.name}
          </p>
          <p key={`deck-number-${i}`} className="category-text-small">
            {category.decks.length < 2 ? <p> {category.decks.length} deck</p> : <p> {category.decks.length} decks</p>}
          </p>
        </div>
      </Link>
    );
  });

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>View all Categories:</h1>
      <div className="category-container">{categoryLinks}</div>
    </div>
  );
}
