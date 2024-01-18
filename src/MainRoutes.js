import React from 'react'
import AboutPage from './components/AboutPage'
import NotFoundPage from './components/NotFoundPage'
import Users from './components/Users'
import { Routes, Route } from 'react-router-dom'
import UserDetails from './components/UserDetails'
import Layout from './components/Layout'
// ! Устанавливаем библиотеку npm i react-router-dom
// ! Обернуть App в BrowserRouter
// ! Создаем файл MainRouters в src
// ! Настраиваем роуты

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='nav' element={<Routes/>}/>
        <Route path='/' element={<Layout/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
        <Route path="/users/:id" element={<UserDetails/>}/>
    </Routes>
  )
}

export default MainRoutes
