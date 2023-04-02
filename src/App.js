import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react";
import uniqid from 'uniqid';

import * as bookService from "./services/bookService"

import { Header } from './components/Header/Header'
import { Home } from './components/Home/Home'
import { Login } from './components/Login/Login'
import { Register } from './components/Register/Register'
import { Footer } from './components/Footer/Footer'
import { Catalog } from './components/Catalog/Catalog'
import { CreateBook } from './components/CreateBook/CreateBook'
import { BookDetails } from './components/BookDetails/BookDetails';

function App() {
    const [books, setBooks] = useState([]);
    const navigate = useNavigate()

    // Ако работим със сървъра, не се пише, сега се запазват в стейта 
    const addComment = (bookId, comment) => {
        setBooks(state => {
            const book = state.find(x => x.id == bookId);

            const comments = book.comments || [];
            comments.push(comment);

            return [
                ...state.filter(x => x._id !== bookId),
                { ...book, comments },
            ];
        })
    };

    const addBookHandler = (bookData) => {
        setBooks(state => [
            ...state,
            {
                ...bookData,
                _id: uniqid()
            }
        ]);

        navigate('/catalog');
    };

    useEffect(() => {
        bookService.getAll()
            .then(result => {
                setBooks(result);
            })
    }, []);



    return (
        <div className="App">
            {/* <Router> */}
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/catalog" element={<Catalog key={books._id} books={books} />} />
                    <Route path="/create" element={<CreateBook addBookHandler={addBookHandler} />} />
                    <Route path="/catalog/:bookId" element={<BookDetails books={books} addComment={addComment} />} />
                </Routes>
            {/* </Router> */}
            <Footer />
        </div>
    );
}

export default App;
