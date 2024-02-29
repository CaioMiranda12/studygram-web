import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from '../containers/Home'
import Licitacoes from '../containers/Licitacoes'
import Monitora from '../containers/Monitora'
import Professora from '../containers/Professora'

function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/1'} element={<Licitacoes />} />
        <Route path={'/professora'} element={<Professora />} />
        <Route path={'/monitora'} element={<Monitora />} />
      </Routes>
    </Router>
  )
}

export default MyRoutes
