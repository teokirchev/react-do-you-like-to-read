

export const CreateBook = () => {
    return (
        <section className="create">
    <div className="form">
        <h2>Favourite Book</h2>
        <form className="create-form">
            <input type="text" name="title" id="title" placeholder="Title" />
            <input type="text" name="author" id="author" placeholder="Author" />
            <input type="text" name="imageUrl" id="imageUrl" placeholder="Image url" />
            <input type="text" name="summary" id="summary" placeholder="Resume" />
            <button type="submit">Add Book</button>
        </form>
    </div>
</section>
    );
}