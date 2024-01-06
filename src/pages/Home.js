import React, { Component } from 'react' 
import NewsItem from './NewsItem';
export default class Home extends Component {
  constructor(){
    super()
    this.state = {
      articals :[],
      totalResults:0,
      page:1
    }
  }
  async getAPIData(){
    var response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.q}&language=hi&pageSize=8&apiKey=a86f22a30fb7431dbbcc8d0317b839ec`)
    var result = await response.json();
    this.setState({
      articals : result.articles,
      totalResult : result.totalResults
    })
  } 
  componentDidMount(){
    this.getAPIData()
  }
  componentDidUpdate(old) {
    if (this.props.q !== old.q)
        this.getAPIData()
}
  render() {
    return (
      <>
        <div className='container'>
            <h3>{this.props.q} News Section</h3>
            <div className='row'>
              {this.state.articals.map((item, index) => {
                  return <NewsItem 
                  key = {index}
                  newsTitle = {item.title}
                  description = {item.description.slice(0, 300)}
                  pic = {item.urlToImage}
                  url = {item.url}
                  />
              })
              }
           </div>
        </div>
        
    </>
    )
  }
}
