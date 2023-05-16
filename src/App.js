
import React from 'react';
import  { NavPar }  from './componantes/Common-components';
import HomePage from './componantes/HomePage';
import Trending from './componantes/trending';
import Store from './componantes/store';
import News from './componantes/News';
import Contact from './componantes/Contact';
import Feed from './componantes/feed';
import Footer from './componantes/Footer';

function App() {
    return (
        <div>
            <NavPar/>
            <HomePage/>
            <Trending/>
            <Store/>
            <News/>
            <Contact />
            <Feed />
            <Footer />
        </div>
    )
}

export default App;