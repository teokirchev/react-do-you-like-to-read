import { Link } from "react-router-dom";

export const Book = ({
    book
}) => {
    <div className="allBooks">
        <div className="allBooks-info">
            <div className="allBooks-info">
                <div className="img-wrapper">
                    <img src={book.imageUrl} className="book-img" />
                </div>
                <h2 className="book-title">{book.title}</h2>
                <p className="book-category">{book.genre}</p>
                <Link to={`/catalog/${book._id}`} className="details-button">
                    Details
                </Link>
            </div>
        </div>
    </div>
}

