
import Home from './Components/Home';
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router";
import NotfoundPage from './Components/NotfoundPage';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Contact from './Components/Contact';
import About from './Components/About';
import Product from './Components/Product';
import { Toaster } from 'react-hot-toast';

function App() {


  return (
    <>
     <Navbar></Navbar>
     <Toaster></Toaster>
   <div className="mx-auto container">
   <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route path="/home" element={<Home></Home>} />
      <Route path="/contact" element={<Contact></Contact>} />
      <Route path="/about" element={<About></About>} />
      <Route path="/login" element={<Login></Login>} />
      <Route path="/signup" element={<Signup></Signup>} />
      <Route path="/products" element={<Product></Product>} />
      <Route path="*" element={<NotfoundPage></NotfoundPage>} />
    </Routes>
   </div>

    </>
  )
}

export default App
