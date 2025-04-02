import { Link } from 'react-router-dom'

function Error404() {
  return (
    <div style={{ textAlign: 'center', marginTop: '4rem' }}>
      <h1>404</h1>
      <p>Oups ! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retour à l'accueil</Link>
    </div>
  )
}

export default Error404
