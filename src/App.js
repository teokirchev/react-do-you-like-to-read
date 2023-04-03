import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react";
import uniqid from 'uniqid';
import { AuthContext } from './contexts/AuthContext';

import * as bookService from "./services/bookService"

import { Header } from './components/Header/Header'
import { Home } from './components/Home/Home'
import { Login } from './components/Login/Login'
import { Register } from './components/Register/Register'
import { Logout } from './components/Logout/Logout'
import { Footer } from './components/Footer/Footer'
import { Catalog } from './components/Catalog/Catalog'
import { CreateBook } from './components/CreateBook/CreateBook'
import { BookDetails } from './components/BookDetails/BookDetails';
import { NotFound } from './components/NotFound/NotFound' 

function App() {
    const [books, setBooks] = useState([]);
    const [auth, setAuth] = useState({});

    const navigate = useNavigate()

    const userLogin = (authData) => {
        setAuth(authData);
    }

    // Ако работим със сървъра, не се пише, сега се запазват в стейта 
    const addComment = (bookId, comment) => {
        setBooks(state => {
            const book = state.find(x => x.id === bookId);

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
        <AuthContext.Provider value={{user: auth, userLogin}}>
        <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/catalog" element={<Catalog key={books._id} books={books} />} />
                    <Route path="/create" element={<CreateBook addBookHandler={addBookHandler} />} />
                    <Route path="/catalog/:bookId" element={<BookDetails books={books} addComment={addComment} />} />
                    <Route path="/404" element={<NotFound />} />
                    <Route path="*" element={<NotFound />} />

                </Routes>
            <Footer />
        </div>
        </AuthContext.Provider>
    );
}

export default App;
