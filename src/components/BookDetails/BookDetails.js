import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import * as bookService from "../../services/bookService";

export const BookDetails = () => {
    const [username, setUsername] = useState('');
    const [comment, setComment] = useState('');

    const { bookId } = useParams()
    const [book, setBook] = useState({})

    useEffect(() => {
        bookService.getOne(bookId)
            .then(result => {
                setBook(result);
            })
    }, [bookId]);

    const onCommentSubmit = async (e) => {
        e.preventDefault();
        const result = await bookService.addComment(bookId, {
            username,
            comment
        });
        setBook(state => ({ ...state, comments: { ...state.comments, [result._id]: result } }));
        setUsername('');
        setComment('');
    }

    const onUsernameChange = (e) => {
        e.preventDefault();
        setUsername(e.target.value)
    }

    const onCommentChange = (e) => {
        e.preventDefault();
        setComment(e.target.value)
    }

    return (
        <div className="details-book-details">
            <div className="details-container">
                <div className="details-book-info">
                    <div className="details-book-img-wrapper">
                        <img
                            src={book.imageUrl}
                            alt={book.title} className="details-book-img" />
                    </div>
                    <div>
                        <h2>{book.title}</h2>
                        <p><span>Year:</span> {book.year}</p>
                        <p><span>Author:</span> {book.author}</p>
                        <p><span>Category:</span> {book.category}</p>
                        <p className="details-summary"><span className="details-summary">Summary:</span> {book.summary}</p>
                    </div>
                </div>

                <button className="details-button edit">Edit</button>
                <button className="details-button delete">Delete</button>
                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {book.comments && Object.values(book.comments).map(x => (
                            <li key={x._id} className="comment">
                                <p>{x.username}: {x.comment}</p>
                            </li>
                        ))}
                    </ul>
                    {/* {!book.comments?.length && (
                    <p className="no-comment">No comments.</p>
                )} */}
                </div>
            </div>



            <article className="create-comment">
                <form className="form-comment" onSubmit={onCommentSubmit}>
                    <input
                        className="username-comment"
                        type="text"
                        name="username"
                        placeholder="Name"
                        value={username}
                        onChange={onUsernameChange}
                    />
                    <textarea
                        name="comment"
                        placeholder="Write a comment..."
                        value={comment}
                        onChange={onCommentChange}>
                    </textarea>
                    <input
                        className="comment-button"
                        type="submit"
                        value="Add Comment"
                    />
                </form>
            </article>
        </div>


    );
}