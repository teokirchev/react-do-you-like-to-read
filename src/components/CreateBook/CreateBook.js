import { useState } from "react";

export const CreateBook = ({ 
    onCreateBookSubmit,
 }) => {

   const [values, setValues] = useState({
        title: '', 
        author: '',
        imageUrl: '',
        category: '',
        summary: '',
        year: ''
   })
   
   const onChangeHandler = (e) => {
    setValues(state => ({...state, [e.target.name]: e.target.value}))
   }

   const onSubmit = (e) => {
    e.preventDefault();
    onCreateBookSubmit(values)
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
                        value={values.title}
                        onChange={onChangeHandler}
                    />
                    <input
                        type="text"
                        name="author"
                        id="author"
                        placeholder="Author"
                        value={values.author}
                        onChange={onChangeHandler}

                    />
                    <input
                        type="text"
                        name="year"
                        id="year"
                        placeholder="Year"
                        value={values.year}
                        onChange={onChangeHandler}
                    />
                    <input
                        type="text"
                        name="imageUrl"
                        id="imageUrl"
                        placeholder="Upload Photo"
                        value={values.imageUrl}
                        onChange={onChangeHandler}

                    />
                    <input
                        type="text"
                        name="category"
                        id="category"
                        placeholder="Category"
                        value={values.category}
                        onChange={onChangeHandler}

                    />
                    <input
                        type="text"
                        name="summary"
                        className="summary"
                        id="summary"
                        placeholder="Resume"
                        value={values.summary}
                        onChange={onChangeHandler}

                    />

                    <button type="submit">Add Book</button>
                </form>
            </div>
        </section>
    );
}