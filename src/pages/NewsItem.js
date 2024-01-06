import React from 'react'
import { Link } from 'react-router-dom'

export default function NewsItem(props) {
  return (
    <div className='col-4'>
        <div className='box'>
            <img src={props.pic} className='img' alt='img' />
            <h4>{props.newsTitle}</h4>
            <p>{props.description}</p>
            <Link to={props.url}>Read More</Link>
        </div>

    </div>
  )
}
