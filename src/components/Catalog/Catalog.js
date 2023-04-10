import { CatalogItem } from "./CatalogItem/CatalogItem";

export const Catalog = ({ books }) => {
    return (
        <section className="catalog-wrapper">
            <div className="catalog">

                {books.map(x =>
                    <CatalogItem key={x._id} book={x} />
                )}
                {books.length === 0 && (
                    <>
                        <p className="no-articles">There are no books in the library</p>
                        <div className="no-article-img-wrapper">
                            <img src="./assets/empty-shelf.jpg" className="no-articles-img"></img>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};




