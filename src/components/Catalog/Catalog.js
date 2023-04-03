import { Book } from "./Book/Book";

export const Catalog = ({ books }) => {


    return (
        <section className="catalog-wrapper">
            <div className="catalog">
                <h1>Favourite Books Library</h1>

                {books.length > 0
                    ? books.map(x => <Book key={x._id} book={x} />)
                    : 
                    <div>
                        <p className="no-articles">There are no books in the library</p>
                        <div>
                            <img></img>
                        </div>
                    </div>

                }
            </div>
        </section>
    );
};




