import React from 'react'
import { Link } from 'react-router-dom'
import FooterLessLayout from '../../layout/footerLessLayout'
import './error.css'

const Error = () => {
  return (
    <FooterLessLayout>
      <main className="error">
        <div>
          <h2>404</h2>
          <span>
            Oups! La page que
            <br /> vous demandez n'existe pas.
          </span>
        </div>
        <Link to="/">Retourner sur la page d'accueil</Link>
      </main>
    </FooterLessLayout>
  )
}

export default Error
