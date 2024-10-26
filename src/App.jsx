import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/nav/Nav';
import Header from './components/header/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="Header_wrapper">
        <Nav />
        <Header/>
      </div>

      <Routes>{/*  <Route path="/" element={<Nav />} /> */}</Routes>
    </BrowserRouter>
  );
}

export default App;
