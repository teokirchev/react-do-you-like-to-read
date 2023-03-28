import { useState, useEffect } from "react";
import * as bookService from "../../services/bookService"
import { Book } from "./Book/Book";

export const Catalog = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        bookService.getAll()
            .then(result => {
                setBooks(result);
            })
    }, []);

    return (
        <section className="catalog-wrapper">
            <div className="catalog">
                <h1>Favourite books library</h1>

                {books.length > 0
                    ? books.map(x => <Book key={x._id} book={x} />)
                    : <p className="no-articles">There is no books in the library</p>
                }
            </div>
        </section>
    );
};




