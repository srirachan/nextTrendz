// Write your JS code here
import {Component} from 'react'

import Header from '../Header'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="home-content-container">
          <div className="sub-container">
            <h1 className="home-heading">Clothes That Get YOU Noticed</h1>
            <p className="home-para">
              Fashion is part of the daily air Clothes That Get YOU Noticed
              Shopping is an activity in which a customer browses the available
              goods or services presented by one or more retailers with the
              potential intent to purchase a suitable selection of them.Shopping
              is an activity in which a customer browses the available goods or
              services presented by one or more retailers with the potential
              intent to purchase a suitable selection of them
            </p>
            <button className="shopnow-button" type="button">
              Shop Now
            </button>
          </div>
          <div className="sub-container">
            <img
              className="home-image"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
              alt="clothes that get you noticed"
            />
          </div>
        </div>
      </div>
    )
  }
}
export default Home
