import React from 'react'
import './Error.css'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className='error-page'>
      <h2>404</h2>
      <p>Oups ! La page que vous demandez n'existe pas.</p>
      <div className='retour-accueil'>
        <Link to='/'>Retourner sur la page d'accueil</Link>
      </div>
    </div>
  )
}

export default Error
