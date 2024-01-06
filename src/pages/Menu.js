import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <div><ul>
    <li><Link to="/">All</Link></li>
    <li><Link to="/Science">Science</Link></li>
    <li><Link to="/Technology">Technology</Link></li>
    <li><Link to="/Sports">Sports</Link></li>
    <li><Link to="/Jokes">Jokes</Link></li>
    <li><Link to="/Cricket">Cricket</Link></li>
  </ul>
  <form className="d-flex" role="search" onSubmit={(e)=>this.postSearch(e)}>
                            <input className="form-control me-2" type="search" name='search' onChange={(e)=>this.getSearch(e)} placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-light" type="submit">Search</button>
                        </form>
  </div>
  )
}
