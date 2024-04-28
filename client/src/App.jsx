import React from 'react'
import { Header } from './Header'
import { useEffect } from 'react'
import './index.css'

const App = () => {
    let data
    useEffect(() => {
        data = fetch('http://localhost:8000/championship').then(res => {
            return res.json()
        }).then(data => console.log(data)).catch(err => {console.log(err)})
    })

    
  return (
    <div className='leaderBoard'>
        <Header />

    </div>
  )
}

export default App