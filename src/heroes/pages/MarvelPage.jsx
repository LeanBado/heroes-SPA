import React from 'react'
import { HeroList } from '../components/HeroList'

const publisher = 'Marvel Comics'
export const MarvelPage = () => {
  return (
    <>
        <h1>MARVEL page</h1>
        <hr/>
        <HeroList publisher={publisher}></HeroList>
    </>
  )
}
