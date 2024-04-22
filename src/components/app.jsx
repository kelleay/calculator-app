import React, { Component } from 'react';
import NavBar from './navbar';
import { Route, Routes } from 'react-router-dom';
import Calculator from './calculator';
import Login from './login';
import Home from './home';
import Register from './register';
import NotFound from './notfound';
import { Navigate } from 'react-router-dom';

class App extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <NavBar />
                    <div className="container">
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/home' element={<Home />} />
                            <Route path='/calculator' element={<Calculator />} />
                            <Route path='/login' element={<Login />} />
                            <Route path='/register' element={<Register />} />
                            <Route path='/404' element={<NotFound />} />
                            <Route path='*' element={<Navigate replace to="/404" />} />
                        </Routes>
                    </div>
            </React.Fragment>
        );
    }
}
 
export default App;