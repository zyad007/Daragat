import React from 'react';
import { BrowserRouter, Route, Router, Routes, useParams } from 'react-router-dom';
import Home from '../components/Home';
import NotFound from '../components/NotFound';
import Data from '../components/Data';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='*' element={<NotFound />} />
                <Route path='/' element={<Home />} />
                <Route path='/data' element={<Data />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
