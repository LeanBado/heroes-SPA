import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { HeroCard } from '../components/HeroCard'
import { getHeroByName } from '../helpers/getHeroByName'
import queryString from "query-string"

export const Search = () => {

  const navigate = useNavigate()
  const location = useLocation()
  

  const {q = ""} = queryString.parse(location.search)
 

  const heroes = getHeroByName(q)
  console.log(heroes)


  const {searchText ,onInputChange} = useForm({
    searchText: q
  })

  const onSearchSubmit=(event)=>{
    event.preventDefault()
    if(searchText.trim().length <= 1){
      return
    }else{
      //console.log(searchText)
      navigate(`?q=${searchText.toLowerCase().trim()}`)
    }
    
    
  }

  const showDisplay = (q.length !== 0)
  const showError = (q.length > 0) && (heroes.length == 0)
    

  return (
    <>
      <h1>Search</h1>
      <hr></hr>

      <div className="row">

          <div className="col-5">
            <h4>Buscando...</h4>
            <hr></hr>
            <form onSubmit={onSearchSubmit}>
              <input typeof='text' placeholder='buscar hero' className='form-control' name='searchText'value={searchText} autoComplete='off' onChange={onInputChange}></input>
              <button className='btn btn-outline-primary mt-1'>Buscar</button>
            </form>
          </div>

          <div className="col-7">
            <h4>Resultados</h4>
            <hr/>
            
            <div className="alert alert-primary" style={{display: showDisplay ? "none" : ""}}>Buscar hero</div>
            <div className="alert alert-danger" style={{display: showError ? "": "none"}}>Sin resultados con estos parametros: <u>{q}</u></div>
          </div>


          {
            heroes.map (hero =>(
              <HeroCard key={hero.id} {...hero}></HeroCard>
            ))
          }
          {/* <HeroCard></HeroCard> */}

      </div>
      
    </>
  )
}
