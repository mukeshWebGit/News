import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {

  return (
    <>
      <ul>
        <li><Link to="/">All</Link></li>
        <li><Link to="/Science">Science</Link></li>
        <li><Link to="/Techonolgy">Techonolgy</Link></li>
        <li><Link to="/Sports">Sports</Link></li>
        <li><Link to="/Jokes">Jokes</Link></li>
        <li><Link to="/Cricket">Cricket</Link></li>
      </ul>

    </>
  )
}
