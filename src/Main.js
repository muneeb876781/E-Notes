import React from 'react'
import Navbar from './Navbar'
import ToDo_list from './ToDo_list'
import App from './App';
import {Route, Routes} from 'react-router-dom';
import { Error404 } from './Error404';

export const Main = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route exact path = '/' element = {<ToDo_list/>}/>
        <Route exact path = '/about' element = {<App/>}/>
        <Route element = {<Error404/>}/>
    </Routes>
    </>
  )
}
