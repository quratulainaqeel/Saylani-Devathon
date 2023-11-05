import React from 'react'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import FindDoctor from './Pages/FindDoctor'
import Services from './Pages/Services'
import Navigationbar from './Components/Navigationbar'
import { Navigate, Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer'
import ContactUs from './Pages/ContactUs'

export default function Guest() {
    return (
        <>
            <Navigationbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/login" element={<Login />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path="/contact" element={<Signup />} />
                <Route path="/finddoctor" element={<FindDoctor />} />
                <Route path="/services" element={<Services />} />
                <Route path="/logout" element={<Navigate to='/' replace={true} />} />
                <Route path="*" element={<Navigate to='/login' replace={true} />} />
            </Routes>
            <Footer/>
        </>
    )
}
