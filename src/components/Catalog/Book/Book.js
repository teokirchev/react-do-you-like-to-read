
export const Book = ({
    book
}) => {
    <div className="book-container">
        <div className="book-item">
            <div className="image-wrap">
                <img src={book.imageUrl} />
            </div>
            <h3>{book.title}</h3>
            <div className="rating">
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
            </div>
            <div className="data-buttons">
                <a href="#" className="btn details-btn">
                    Details
                </a>
            </div>
        </div>
    </div>
}