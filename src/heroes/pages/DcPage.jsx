import React from 'react'
import { HeroList } from '../components/HeroList'



const publisher = 'DC Comics'

export const DcPage = () => {
  return (
    <>
        <h1>DC page</h1>
        <hr/>
        <HeroList publisher={publisher}></HeroList>
    </>
  )
}
