import React, { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../helpers/getHeroById'

export const HeroPage = () => {

    const {id} = useParams()

    const hero = useMemo(()=> getHeroById(id), [id]) 

    const navigate = useNavigate()
    const onReturnPage = ()=> {
        navigate(-1)
    }

    if(!hero){
      return <Navigate to={"/marvel"}/>
    }

  return (
    <>
      <h1>{hero.superhero}</h1>

      <div className='row mt-5'>
        <div className="col-4">
          <img src={`/assets/${hero.id}.jpg`} alt={hero.superhero} className='img-thumbnail animate__animated animate__rollIn animate__fadeInLeft'></img>
        </div>

        <div className="col-8">
          <h3>{hero.superhero}</h3>
          <ul className='list-grupo list-group-flush'>
            <li className='list-group-item'><b>Alter ego:</b> {hero.alter_ego}</li>
            <li className='list-group-item'><b>Publisher:</b> {hero.publisher}</li>
            <li className='list-group-item'><b>First appearance:</b> {hero.first_appearance}</li>
          </ul>

          <h5 className='mt-5'>Characters</h5>
          <p>{hero.characters}</p>

          <button className='btn btn-outline-primary' onClick={onReturnPage}>
            Regresar
          </button>
        </div>
      </div>
    </>
  )
}
