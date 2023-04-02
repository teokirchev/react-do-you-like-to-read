

export const CreateBook = ({ addBookHandler }) => {

    const onSubmit = (e) => {
        e.preventDefault();
        const bookData = Object.fromEntries(new FormData(e.target))
        addBookHandler(bookData);
    }
    return (
        <section className="create">
            <div className="form">
                <h2>Favourite Book</h2>
                <form className="create-form" onSubmit={onSubmit}>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Title"
                    />
                    <input
                        type="text"
                        name="author"
                        id="author"
                        placeholder="Author"
                    />
                    <input
                        type="text"
                        name="imageUrl"
                        id="imageUrl"
                        placeholder="Upload Photo"
                    />
                    <input
                        type="text"
                        name="category"
                        id="category"
                        placeholder="Category"
                    />
                    <textarea
                        name="summary"
                        id="summary"
                        placeholder="Resume"
                        rows="4"
                        defaultValue={""}>
                    </textarea>

                    <button type="submit">Add Book</button>
                </form>
            </div>
        </section>
    );
}