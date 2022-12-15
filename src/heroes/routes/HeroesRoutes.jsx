import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../../ui'
import { heroes } from '../data/heroes'
import { DcPage, HeroPage, MarvelPage, Search } from '../pages'


const {publisher} = heroes


export const HeroesRoutes = () => {
  return (
    <>
    <Navbar></Navbar>
        <div className='container'>
            <Routes>
                <Route
                path='marvel' element={<MarvelPage></MarvelPage>}
                ></Route>
                <Route
                path='dc' element={<DcPage></DcPage>}
                ></Route>
                <Route
                path='search' element={<Search></Search>}
                ></Route>
                <Route
                path='hero/:id' element={<HeroPage publisher={publisher}></HeroPage>}
                ></Route>

            


                <Route
                path='/' element={<Navigate to={"/marvel"}/>}
                ></Route>

            </Routes>
        </div>

    </>
  )
}
