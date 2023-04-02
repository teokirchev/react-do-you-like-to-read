import { useParams } from "react-router-dom";
import { useState } from "react";

export const BookDetails = ({
    books,
    addComment,
}) => {

    const { bookId } = useParams();
    const [comment, setComment] = useState({
        username: '',
        comment: '',
    });

    const [error, setError] = useState({
        username: '',
        comment: '',
    })
    const book = books.find(x => x._id == bookId);

    const addCommentHandler = (e) => {
        e.preventDefault();
        const result = `${comment.username}: ${comment.comment}`;
        addComment(bookId, result);
    }
    const onChange = (e) => {
        setComment(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    const validateUsername = (e) => {
        const username = e.target.value;
        let errorMessage = '';

        if(username < 4) {
            errorMessage = 'Username must be longer than 4 characters';
        } else if(username.length > 10) {
            errorMessage = 'Username must be shorter than 10 characters';
        }
        setError(state => ({
            ...state,
            username: errorMessage,
        }))
    }

    return (
        <section id="game-details">
            <h1>Book Details</h1>
            <div className="info-section">
                <div className="game-header">
                    <img className="game-img" src={book.imageUrl} />
                    <h1>{book.title}</h1>
                    <p className="type">{book.category}</p>
                </div>
                <p className="text">
                    {book.summary}
                </p>
                {/* Bonus ( for Guests and Users ) */}
                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {book.comments?.map(x =>
                            <li className="comment">
                                <p>{x}</p>
                            </li>
                        )}
                    </ul>
                    {!book.comments &&
                        <p className="no-comment">No comments.</p>
                    }
                </div>
                {/* Edit/Delete buttons ( Only for creator of this game )  */}
                <div className="buttons">
                    <a href="#" className="button">
                        Edit
                    </a>
                    <a href="#" className="button">
                        Delete
                    </a>
                </div>
            </div>
				// {/* Bonus */}
            {/* // Add Comment ( Only for logged-in users, which is not creators of the current game ) */}
            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={addCommentHandler}>
                    <input
                        type="text"
                        name="username"
                        placeholder="John Doe"
                        onChange={onChange}
                        onBlur={validateUsername}
                        value={comment.username}
                    />
                    {error.username &&
                        <div style={{ color: 'red' }}>{error.username}</div>
                    }
                    <textarea
                        name="comment"
                        placeholder="Comment......"
                        onChange={onChange}
                        value={comment.comment}
                    />
                    <input
                        className="btn submit"
                        type="submit"
                        defaultValue="Add Comment"
                    />
                </form>
            </article>
        </section>
    );
}