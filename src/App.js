import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { Home } from './components/Home/Home'
import { Login } from './components/Login/Login'
import { Register } from './components/Register/Register'
import { Footer } from './components/Footer/Footer'
import { Catalog } from './components/Catalog/Catalog'
import { CreateBook } from './components/CreateBook/CreateBook'

function App() {
  return (
    <div className="App">
      <Router> 
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/catalog" element={<Catalog />}/>
          <Route path="/create" element={<CreateBook />}/>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
