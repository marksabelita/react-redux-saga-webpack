import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getNews } from '../actions/news';

class News extends Component {
  
  componentWillMount(){
    this.props.getNews();
    const { getNews } = this.props; 
  }

  render() {
    console.log(this.props.news);
    return (
      <div>
        <div>Test</div>
      </div>
    )
  }
}

const mapStateToProp = (state) => { 
  news: state.news
};

export default connect(mapStateToProp, { getNews })(News);