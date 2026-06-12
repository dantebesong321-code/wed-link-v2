
import "./App.css";
import { Routes, Route } from "react-router";
import './App.css'
import HomePage from "./pages/HomePage";
import VendorDetailPage from "./pages/VendorDetailPage";
import EditVendorPage from "./pages/EditVendorPage";
import VendorsPage from "./pages/VendorsPage";
import AddVendorPage from "./pages/AddVendorPage";
import CategoryPage from "./pages/CategoryPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";

// components
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";

function App() {
 

  return (
    <>
    <Navbar/>

    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/vendors" element={<VendorsPage />}/>
        <Route path="/vendors/:id" element={<VendorDetailPage />}/>
        <Route path="/vendors/:id/edit" element={<EditVendorPage />} />
        <Route path="/vendors/new" element={<AddVendorPage />}/>
        <Route path="/categories/:id" element={<CategoryPage />}/>
        <Route path="/about"element={<AboutPage />}/>
    <Route path="*" element={<NotFoundPage />}
  />        
      
      </Routes>
      
       <Footer />
    
    </>
  )
}

export default App
