import React from 'react';
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'

function Layout({children}) {
    return (
        <div className="content">
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}

export default Layout;