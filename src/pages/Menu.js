import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Menu extends Component {
  constructor(){
    super()
    this.state = ({
      search:""
    })
  }
  getSearch(e){
    this.setState({search:e.target.value})
  }
  postSearch(e){
    e.preventDefault();
    this.props.changeSearch(this.state.search);
    this.setState({search:""})
  }
  render() {
    return (
    <div>
      <div className='menu'>
    <ul>
    <li><Link to="/" onClick={() => this.props.changeSearch("")}>All</Link></li>
    <li><Link to="/Science" onClick={() => this.props.changeSearch("")}>Science</Link></li>
    <li><Link to="/Technology" onClick={() => this.props.changeSearch("")}>Technology</Link></li>
    <li><Link to="/Sports" onClick={() => this.props.changeSearch("")}>Sports</Link></li>
    <li><Link to="/Jokes" onClick={() => this.props.changeSearch("")}>Jokes</Link></li>
    <li><Link to="/Cricket" onClick={() => this.props.changeSearch("")}>Cricket</Link></li>
    <li><Link>language</Link>
    <ul>
      <li onClick={()=> this.props.chnangeLang("hi")}>Hindi</li>
      <li onClick={()=> this.props.chnangeLang("en")}>English</li>
  </ul>
    </li>
  </ul>
  </div>
 
  <ul>
    <li onClick={()=> this.props.chnangePageSize(9)}>9</li>
    <li onClick={()=> this.props.chnangePageSize(12)}>12</li>
    <li onClick={()=> this.props.chnangePageSize(16)}>16</li>
  </ul>
  <form className="d-flex" role="search" onSubmit={(e)=>this.postSearch(e)}>
                            <input className="form-control me-2" type="search" value={this.state.search} name='search' onChange={(e)=>this.getSearch(e)} placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-light" type="submit">Search</button>
                        </form>
  </div>
  )
  }
}