import React from "react";
import Navbar from "./Navbar";
import Home from "./pages/Home.js";
import { Route, Routes, BrowserRouter} from "react-router-dom";
import ConfirmAttendance from "./pages/ConfirmAttendance";
import GiftRegistry from "./pages/GiftRegistry";
import FAQs from "./pages/Faq";
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import Footer from "./Footer";
function App(){
    return (
        <>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path='/wedding/home' element={<Home/>}/>
                    <Route path='/wedding/confirm-attendance' element={<ConfirmAttendance/>}/>
                    <Route path='/wedding/gift-registry' element={<GiftRegistry/>}/>
                    <Route path='/wedding/faqs' element={<FAQs/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    )

}

export default App;