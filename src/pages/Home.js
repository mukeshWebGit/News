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
    if(this.props.search === '')
    var response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.q}&language=${this.props.language}&pageSize=${this.props.pageSize}&apiKey=a86f22a30fb7431dbbcc8d0317b839ec`)
   else
    response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.search}&language=${this.props.language}&pageSize=${this.props.pageSize}&apiKey=a86f22a30fb7431dbbcc8d0317b839ec`)

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
    if (this.props.q !== old.q || this.props.language !== old.language || this.props.pageSize !== old.pageSize || this.props.search !== old.search)
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
                  description = {item.description.slice(0, 110) + "..."}
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
