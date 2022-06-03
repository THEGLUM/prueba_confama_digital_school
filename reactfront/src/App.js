import logo from './logo.svg';
import './App.css';
//importar componentes
import CompShowBlogs from './blog/showblogs';
import CompCreateBlogs from './blog/createBlog'
import CompEditarBlog from './blog/editBlog';
//react para las rutas
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CompShowBlogs />} />
          <Route path='/create' element={<CompCreateBlogs />} />
          <Route path='/edit/:id' element={<CompEditarBlog />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
