import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import NotFound from '../components/NotFound';
import Data from '../components/Data';
import Admin from '../components/Admin';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='*' element={<NotFound />} />
                <Route path='/' element={<Home />} />
                <Route path='/data' element={<Data />} />
                <Route path='/admin' element={<Admin />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
