import React, { Component } from 'react'
import { styles }            from './styles.scss'

class HomeView extends Component {
  render() {
    return (
      <div className={styles}>
        <div className="container">
          List of new jobs goes here
        </div>
      </div>
    )
  }
}


export default HomeView
