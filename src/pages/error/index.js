import React from 'react'
import { Link } from 'react-router-dom'
import MainLayout from '../../layout/mainLayout'
import './error.css'

export default class Error extends React.Component {
  render() {
    return (
      <MainLayout>
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
      </MainLayout>
    )
  }
}
