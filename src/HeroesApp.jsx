import React from 'react'
import { AuthProvider } from './auth'
import { AppRouter } from './routers/AppRouter'

export const HeroesApp = () => {
  return (
    <>
      <AuthProvider>

        <AppRouter>
          <h1>HeroesApp</h1>
        </AppRouter>
      
      </AuthProvider>  
    </>
  )
}
