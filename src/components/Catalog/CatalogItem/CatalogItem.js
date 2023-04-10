// import { Link } from "react-router-dom";

// export const CatalogItem = ({book}) => {
//     return (
//     <div className="allBooks">
//         <div className="allBooks-info">
//             <div className="allBooks-info">
//                 <div className="img-wrapper">
//                     <img src={book.imageUrl} className="book-img" />
//                 </div>
//                 <h2 className="book-title">{book.title}</h2>
//                 <p className="book-category">{book.summary}</p>
//                 <Link to={`/catalog/${book._id}`} className="details-button">
//                     Details
//                 </Link>
//             </div>
//         </div>
//     </div>
//     );
// }

import { Link } from "react-router-dom";

export const CatalogItem = ({ 
  book
 }) => {
  return (
    <div className="book-item">
      <div className="book-image-wrapper">
        <img src={book.imageUrl} alt={book.title} className="book-image" />
      </div>
      <div className="book-details">
        <h3 className="book-title">{book.title}</h3>
        <p className="book-summary">{book.category}</p>
        <Link to={`/catalog/${book._id}`} className="details-button">
          Details
        </Link>
      </div>
    </div>
  );
};



