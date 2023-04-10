import { Routes, Route, useNavigate} from 'react-router-dom'
import { useState, useEffect } from "react";

import * as bookService from "./services/bookService";

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

    const navigate = useNavigate()
    const [books, setBooks] = useState([]);

    useEffect(() => {
        bookService.getAll()
            .then(result => {
                setBooks(result);
                console.log(result);
            })
    }, []);

    const onCreateBookSubmit = async (data) => {
        const newBook = await bookService.create(data) 

        setBooks(state => [...state, newBook]);
        navigate('/catalog')       
    } 

    return (
        <div className="App">
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/catalog" element={<Catalog books={books} />} />
                    <Route path="/create" element={<CreateBook onCreateBookSubmit={onCreateBookSubmit} />} />
                    <Route path="/catalog/:bookId" element={<BookDetails />} />
                    <Route path="/404" element={<NotFound />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
